export interface SearchableProfile {
  id: string;
  name: string;
  role: string;
  skills: string[];
  location: string;
  experience: string;
}

// Normalize text for search (remove accents, lowercase)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Parse search query into keywords
function parseQuery(query: string): string[] {
  const normalized = normalizeText(query);
  // Split by common separators and filter out empty strings and common words
  const stopWords = ["y", "e", "o", "con", "de", "para", "que", "en", "un", "una", "el", "la", "los", "las"];
  return normalized
    .split(/[\s,;]+/)
    .filter((word) => word.length > 1 && !stopWords.includes(word));
}

// Calculate match score for a profile
export function calculateMatchScore(profile: SearchableProfile, query: string): number {
  if (!query.trim()) return 100; // Show all if no query

  const keywords = parseQuery(query);
  if (keywords.length === 0) return 100;

  let matchedKeywords = 0;
  let totalScore = 0;

  const searchableText = normalizeText(
    `${profile.name} ${profile.role} ${profile.skills.join(" ")} ${profile.location} ${profile.experience}`
  );

  for (const keyword of keywords) {
    // Check if keyword matches any part of the profile
    if (searchableText.includes(keyword)) {
      matchedKeywords++;
      
      // Give higher score for skill matches
      const normalizedSkills = profile.skills.map(normalizeText);
      if (normalizedSkills.some((skill) => skill.includes(keyword))) {
        totalScore += 2;
      } else if (normalizeText(profile.role).includes(keyword)) {
        totalScore += 1.5;
      } else {
        totalScore += 1;
      }
    }
  }

  // Calculate percentage based on matched keywords
  const matchPercentage = (matchedKeywords / keywords.length) * 100;
  
  // Bonus for matching multiple technologies (prioritize profiles matching multiple techs)
  const multiMatchBonus = matchedKeywords > 1 ? matchedKeywords * 5 : 0;

  return Math.min(100, matchPercentage + multiMatchBonus);
}

// Filter and sort profiles by search query
export function filterProfiles<T extends SearchableProfile>(
  profiles: T[],
  query: string
): T[] {
  if (!query.trim()) return profiles;

  const scored = profiles.map((profile) => ({
    profile,
    score: calculateMatchScore(profile, query),
  }));

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.profile);
}
