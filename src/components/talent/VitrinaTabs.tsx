import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TalentCard, TalentCardProps } from "./TalentCard";
import { Clock, CheckCircle2, Calendar, Users } from "lucide-react";

// Mock data for demonstration
const benchTalent: Omit<TalentCardProps, "onView" | "onAction">[] = [
  {
    id: "1",
    name: "María García",
    role: "React Lead Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
    location: "Santiago, Chile",
    experience: "8 años",
    skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    availability: "immediate",
    matchScore: 98,
    verified: true,
  },
  {
    id: "2",
    name: "Carlos Ruiz",
    role: "Senior Backend Engineer",
    avatar: "https://i.pravatar.cc/150?img=3",
    location: "Lima, Perú",
    experience: "6 años",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
    availability: "immediate",
    matchScore: 95,
    verified: true,
  },
  {
    id: "3",
    name: "Ana Torres",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=5",
    location: "Bogotá, Colombia",
    experience: "5 años",
    skills: ["Vue.js", "Laravel", "MySQL", "Redis"],
    availability: "immediate",
    matchScore: 92,
    verified: true,
  },
];

const externalTalent: Omit<TalentCardProps, "onView" | "onAction">[] = [
  {
    id: "4",
    name: "Diego Morales",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=8",
    location: "Buenos Aires, Argentina",
    experience: "7 años",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    availability: "verified",
    matchScore: 94,
    verified: true,
  },
  {
    id: "5",
    name: "Valentina López",
    role: "Data Engineer",
    avatar: "https://i.pravatar.cc/150?img=9",
    location: "México City, México",
    experience: "4 años",
    skills: ["Python", "Spark", "Airflow", "BigQuery"],
    availability: "verified",
    matchScore: 89,
    verified: true,
  },
  {
    id: "6",
    name: "Roberto Silva",
    role: "Mobile Developer",
    avatar: "https://i.pravatar.cc/150?img=11",
    location: "São Paulo, Brasil",
    experience: "5 años",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    availability: "verified",
    matchScore: 87,
    verified: true,
  },
];

const anticipationTalent: Omit<TalentCardProps, "onView" | "onAction">[] = [
  {
    id: "7",
    name: "Camila Herrera",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/150?img=16",
    location: "Santiago, Chile",
    experience: "10 años",
    skills: ["Java", "Spring Boot", "Microservices", "AWS"],
    availability: "future",
    availableIn: 15,
    matchScore: 96,
    verified: true,
  },
  {
    id: "8",
    name: "Andrés Martínez",
    role: "Cloud Architect",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "Medellín, Colombia",
    experience: "9 años",
    skills: ["AWS", "Azure", "GCP", "Architecture"],
    availability: "future",
    availableIn: 30,
    matchScore: 93,
    verified: true,
  },
  {
    id: "9",
    name: "Laura Sánchez",
    role: "ML Engineer",
    avatar: "https://i.pravatar.cc/150?img=20",
    location: "Lima, Perú",
    experience: "6 años",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    availability: "future",
    availableIn: 7,
    matchScore: 91,
    verified: true,
  },
];

interface VitrinaTabsProps {
  onViewCandidate?: (id: string) => void;
}

export function VitrinaTabs({ onViewCandidate }: VitrinaTabsProps) {
  return (
    <Tabs defaultValue="bench" className="w-full">
      <TabsList className="w-full justify-start bg-secondary/30 p-1 rounded-2xl mb-6 h-auto flex-wrap">
        <TabsTrigger
          value="bench"
          className="data-[state=active]:bg-kibernum-green/20 data-[state=active]:text-kibernum-green rounded-xl px-6 py-3 gap-2"
        >
          <Clock className="w-4 h-4" />
          <span>Banca de Talento</span>
          <span className="ml-1 px-2 py-0.5 bg-kibernum-green/20 rounded-full text-xs font-medium">
            {benchTalent.length}
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="external"
          className="data-[state=active]:bg-kibernum-cyan/20 data-[state=active]:text-kibernum-cyan rounded-xl px-6 py-3 gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Talento Externo</span>
          <span className="ml-1 px-2 py-0.5 bg-kibernum-cyan/20 rounded-full text-xs font-medium">
            {externalTalent.length}
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="anticipation"
          className="data-[state=active]:bg-kibernum-orange/20 data-[state=active]:text-kibernum-orange rounded-xl px-6 py-3 gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Anticipación</span>
          <span className="ml-1 px-2 py-0.5 bg-kibernum-orange/20 rounded-full text-xs font-medium">
            {anticipationTalent.length}
          </span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="bench" className="mt-0">
        <div className="mb-4 p-4 rounded-2xl bg-kibernum-green/5 border border-kibernum-green/20">
          <div className="flex items-center gap-2 text-kibernum-green">
            <Users className="w-5 h-5" />
            <span className="font-medium">Profesionales listos para asignación inmediata</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {benchTalent.map((talent, index) => (
            <TalentCard
              key={talent.id}
              {...talent}
              animationDelay={index * 100}
              onView={() => onViewCandidate?.(talent.id)}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="external" className="mt-0">
        <div className="mb-4 p-4 rounded-2xl bg-kibernum-cyan/5 border border-kibernum-cyan/20">
          <div className="flex items-center gap-2 text-kibernum-cyan">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Candidatos validados y certificados por Kibernum</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {externalTalent.map((talent, index) => (
            <TalentCard
              key={talent.id}
              {...talent}
              animationDelay={index * 100}
              onView={() => onViewCandidate?.(talent.id)}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="anticipation" className="mt-0">
        <div className="mb-4 p-4 rounded-2xl bg-kibernum-orange/5 border border-kibernum-orange/20">
          <div className="flex items-center gap-2 text-kibernum-orange">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Reserva talento antes de que esté disponible</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {anticipationTalent.map((talent, index) => (
            <TalentCard
              key={talent.id}
              {...talent}
              animationDelay={index * 100}
              onView={() => onViewCandidate?.(talent.id)}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
