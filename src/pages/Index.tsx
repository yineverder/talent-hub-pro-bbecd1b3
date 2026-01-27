import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { VitrinaTabs } from "@/components/talent/VitrinaTabs";
import { AIMatchWidget } from "@/components/talent/AIMatchWidget";
import { QuickViewPanel } from "@/components/talent/QuickViewPanel";

// Mock candidate data for quick view
const mockCandidateDetails = {
  name: "María García",
  role: "React Lead Developer",
  avatar: "https://i.pravatar.cc/150?img=1",
  location: "Santiago, Chile",
  email: "maria.garcia@email.com",
  phone: "+56 9 1234 5678",
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
};

const Index = () => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);

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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Vitrinas Section - 3 columns */}
            <section className="xl:col-span-3">
              <VitrinaTabs onViewCandidate={handleViewCandidate} />
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
