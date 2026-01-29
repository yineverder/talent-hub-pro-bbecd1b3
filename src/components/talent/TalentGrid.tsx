import { useMemo } from "react";
import { TalentCard, TalentCardProps } from "./TalentCard";
import { filterProfiles } from "@/lib/searchUtils";
import { Users } from "lucide-react";

// Mock data for demonstration - now includes new fields
const allTalent: Omit<TalentCardProps, "onView" | "onAction">[] = [
  {
    id: "1",
    name: "María García",
    role: "React Lead Developer",
    avatar: "",
    location: "Santiago, Chile",
    experience: "8 años",
    skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    availability: "immediate",
    matchScore: 98,
    verified: true,
    hasSpecialOffer: true,
    isAICertified: true,
    monthlyCostUF: 120,
  },
  {
    id: "2",
    name: "Carlos Ruiz",
    role: "Senior Backend Engineer",
    avatar: "",
    location: "Lima, Perú",
    experience: "6 años",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    availability: "immediate",
    matchScore: 95,
    verified: true,
    hasSpecialOffer: true,
    isAICertified: false,
    monthlyCostUF: 100,
  },
  {
    id: "3",
    name: "Ana Torres",
    role: "Full Stack Developer",
    avatar: "",
    location: "Bogotá, Colombia",
    experience: "5 años",
    skills: ["Vue.js", "Laravel", "MySQL", "Redis"],
    availability: "immediate",
    matchScore: 92,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: false,
    monthlyCostUF: 85,
  },
  {
    id: "4",
    name: "Diego Morales",
    role: "DevOps Engineer",
    avatar: "",
    location: "Buenos Aires, Argentina",
    experience: "7 años",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    availability: "15days",
    matchScore: 94,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: true,
    monthlyCostUF: 130,
  },
  {
    id: "5",
    name: "Valentina López",
    role: "Data Engineer",
    avatar: "",
    location: "México City, México",
    experience: "4 años",
    skills: ["Python", "Spark", "Airflow", "BigQuery"],
    availability: "15days",
    matchScore: 89,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: true,
    monthlyCostUF: 95,
  },
  {
    id: "6",
    name: "Roberto Silva",
    role: "Mobile Developer",
    avatar: "",
    location: "São Paulo, Brasil",
    experience: "5 años",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    availability: "15days",
    matchScore: 87,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: false,
    monthlyCostUF: 90,
  },
  {
    id: "7",
    name: "Camila Herrera",
    role: "Tech Lead",
    avatar: "",
    location: "Santiago, Chile",
    experience: "10 años",
    skills: ["Java", "Spring Boot", "Microservices", "AWS"],
    availability: "1month",
    matchScore: 96,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: true,
    monthlyCostUF: 150,
  },
  {
    id: "8",
    name: "Andrés Martínez",
    role: "Cloud Architect",
    avatar: "",
    location: "Medellín, Colombia",
    experience: "9 años",
    skills: ["AWS", "Azure", "GCP", "Architecture"],
    availability: "1month",
    matchScore: 93,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: true,
    monthlyCostUF: 160,
  },
  {
    id: "9",
    name: "Laura Sánchez",
    role: "ML Engineer",
    avatar: "",
    location: "Lima, Perú",
    experience: "6 años",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    availability: "1month",
    matchScore: 91,
    verified: true,
    hasSpecialOffer: false,
    isAICertified: true,
    monthlyCostUF: 140,
  },
];

interface TalentGridProps {
  searchQuery: string;
  onViewCandidate?: (id: string) => void;
}

export function TalentGrid({ searchQuery, onViewCandidate }: TalentGridProps) {
  const filteredTalent = useMemo(() => {
    return filterProfiles(allTalent as any, searchQuery);
  }, [searchQuery]);

  const totalCount = filteredTalent.length;

  return (
    <div className="w-full">
      {/* Results Header */}
      <div className="mb-6 p-4 rounded-2xl bg-secondary/30 border border-border/50">
        <div className="flex items-center gap-2 text-foreground">
          <Users className="w-5 h-5 text-kibernum-cyan" />
          <span className="font-medium">
            {searchQuery ? (
              <>
                {totalCount} profesional{totalCount !== 1 ? "es" : ""} encontrado{totalCount !== 1 ? "s" : ""}
              </>
            ) : (
              <>Todos los profesionales disponibles ({totalCount})</>
            )}
          </span>
        </div>
        {searchQuery && (
          <p className="text-sm text-muted-foreground mt-1">
            Ordenados por relevancia según tu búsqueda
          </p>
        )}
      </div>

      {/* Grid */}
      {filteredTalent.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTalent.map((talent, index) => (
            <TalentCard
              key={talent.id}
              {...(talent as TalentCardProps)}
              animationDelay={index * 100}
              onView={() => onViewCandidate?.(talent.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No se encontraron profesionales que coincidan con tu búsqueda
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Intenta con otros términos o tecnologías
          </p>
        </div>
      )}
    </div>
  );
}

// Export talent data for use in other components
export { allTalent };
