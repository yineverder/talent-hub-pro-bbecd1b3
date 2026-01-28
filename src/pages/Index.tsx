import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { NaturalSearchBar } from "@/components/talent/NaturalSearchBar";
import { TalentGrid } from "@/components/talent/TalentGrid";
import { AIMatchWidget } from "@/components/talent/AIMatchWidget";
import { QuickViewPanel } from "@/components/talent/QuickViewPanel";

// Mock candidate data for quick view
const mockCandidateDetails = {
  name: "María García",
  role: "React Lead Developer",
  avatar: "",
  location: "Santiago, Chile",
  email: "m.g@kibernum.com",
  phone: "+56 9 **** ****",
  experience: "8 años",
  skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "Docker", "PostgreSQL"],
  softSkills: ["Liderazgo", "Comunicación efectiva", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad"],
  bio: "Desarrolladora apasionada con más de 8 años de experiencia liderando equipos de desarrollo frontend. Especializada en arquitecturas escalables y experiencia de usuario. He liderado proyectos para empresas Fortune 500 en LATAM.",
  rating: 4.9,
  projects: 47,
  verified: true,
  projectHistory: [
    { name: "Banco Estado - App Móvil", role: "Tech Lead Frontend", duration: "2023 - 2024 (1 año)" },
    { name: "Falabella Retail - E-commerce", role: "Senior Developer", duration: "2021 - 2023 (2 años)" },
    { name: "Entel - Portal Clientes", role: "Frontend Developer", duration: "2019 - 2021 (2 años)" },
  ],
  monthlyCost: 4500,
  isAICertified: true,
  professionalSummary: "Perfil excepcional con dominio completo del ecosistema React moderno. Su experiencia liderando equipos en proyectos de alta complejidad para el sector financiero la posiciona como una candidata ideal para roles de arquitectura frontend. Destaca por su capacidad de mentoring y adopción temprana de tecnologías emergentes.",
};

const Index = () => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewCandidate = (id: string) => {
    console.log("Viewing candidate:", id);
    setQuickViewOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20">
        <Header />

        <main className="p-8">
          {/* Stats Section */}
          <section className="mb-8">
            <StatsCards />
          </section>

          {/* Natural Language Search */}
          <section className="mb-8">
            <NaturalSearchBar value={searchQuery} onChange={setSearchQuery} />
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Talent Grid - 3 columns */}
            <section className="xl:col-span-3">
              <TalentGrid searchQuery={searchQuery} onViewCandidate={handleViewCandidate} />
            </section>

            {/* AI Match Widget - 1 column */}
            <aside className="xl:col-span-1">
              <AIMatchWidget />
            </aside>
          </div>
        </main>
      </div>

      {/* Quick View Panel */}
      <QuickViewPanel
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        candidate={mockCandidateDetails}
      />
    </div>
  );
};

export default Index;
