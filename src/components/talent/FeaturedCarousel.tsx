import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star, MessageCircle, Clock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileIdenticon } from "./ProfileIdenticon";

interface FeaturedCandidate {
  id: string;
  name: string;
  role: string;
  skills: string[];
  matchScore: number;
  badgeType: "urgente" | "oferta";
  monthlyCostUF?: number;
}

interface FeaturedCarouselProps {
  onViewCandidate: (id: string) => void;
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}.${parts[1][0]}.`;
  }
  return name.slice(0, 2).toUpperCase() + ".";
}

// Mock featured candidates - all with immediate availability
const featuredCandidates: FeaturedCandidate[] = [
  {
    id: "f1",
    name: "Carlos Mendoza",
    role: "Senior DevOps Engineer",
    skills: ["AWS", "Kubernetes", "Docker"],
    matchScore: 98,
    badgeType: "urgente",
    monthlyCostUF: 145,
  },
  {
    id: "f2",
    name: "Ana Riquelme",
    role: "Data Scientist",
    skills: ["Python", "TensorFlow", "ML"],
    matchScore: 96,
    badgeType: "oferta",
    monthlyCostUF: 160,
  },
  {
    id: "f3",
    name: "Diego Fernández",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL"],
    matchScore: 94,
    badgeType: "urgente",
    monthlyCostUF: 120,
  },
  {
    id: "f4",
    name: "Valentina Soto",
    role: "Cloud Architect",
    skills: ["Azure", "Terraform", "CI/CD"],
    matchScore: 97,
    badgeType: "oferta",
    monthlyCostUF: 180,
  },
  {
    id: "f5",
    name: "Roberto Araya",
    role: "Security Engineer",
    skills: ["Pentesting", "OWASP", "SOC"],
    matchScore: 95,
    badgeType: "urgente",
    monthlyCostUF: 155,
  },
];

export function FeaturedCarousel({ onViewCandidate }: FeaturedCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  const handleWhatsAppContact = useCallback((name: string, role: string) => {
    const initials = getInitials(name);
    const phoneNumber = "+56912345678";
    const message = encodeURIComponent(
      `Hola, estoy interesado en el profesional destacado ${initials} (${role}) disponible en KiberMatch. Me gustaría recibir más información.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }, []);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Candidatos Destacados</h2>
          <p className="text-sm text-muted-foreground">Profesionales premium con disponibilidad inmediata</p>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full group"
      >
        <CarouselContent className="-ml-3">
          {featuredCandidates.map((candidate) => (
            <CarouselItem key={candidate.id} className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="featured-card p-4 flex flex-col gap-3 relative overflow-visible">
                {/* Red Badge - Top Right */}
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="featured-ribbon">
                    {candidate.badgeType === "urgente" ? "URGENTE" : "OFERTA"}
                  </Badge>
                </div>

                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <ProfileIdenticon name={candidate.name} size="md" />
                    {/* Immediate availability indicator */}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card bg-kibernum-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {getInitials(candidate.name)}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{candidate.role}</p>
                  </div>
                </div>

                {/* Match Score with Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3.5 h-3.5",
                          i < Math.round(candidate.matchScore / 20)
                            ? "fill-kibernum-warning text-kibernum-warning"
                            : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-primary">{candidate.matchScore}%</span>
                </div>

                {/* Availability Badge */}
                <Badge className="badge-immediate w-fit">
                  <Clock className="w-3 h-3 mr-1" />
                  Disponibilidad Inmediata
                </Badge>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {candidate.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/80 text-foreground text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Cost in UF */}
                {candidate.monthlyCostUF && (
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{candidate.monthlyCostUF} UF</span>
                    <span className="text-xs"> / mes</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto pt-1">
                  <Button
                    className="flex-1 rounded-xl font-medium gradient-green text-accent-foreground hover:opacity-90 gap-2 text-xs h-9"
                    onClick={() => handleWhatsAppContact(candidate.name, candidate.role)}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Hablar con Ejecutivo
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl text-muted-foreground hover:text-foreground h-9 w-9"
                    onClick={() => onViewCandidate(candidate.id)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Visible on hover */}
        <CarouselPrevious className="left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2 bg-card border-border hover:bg-secondary" />
        <CarouselNext className="right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2 bg-card border-border hover:bg-secondary" />
      </Carousel>
    </section>
  );
}
