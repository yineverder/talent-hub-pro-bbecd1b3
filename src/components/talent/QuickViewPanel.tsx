import { X, MapPin, Mail, Phone, Linkedin, Github, Download, CheckCircle2, Star, Briefcase, DollarSign, Heart, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProfileIdenticon } from "./ProfileIdenticon";

interface Project {
  name: string;
  role: string;
  duration: string;
}

interface QuickViewPanelProps {
  isOpen: boolean;
  onClose: () => void;
  candidate?: {
    name: string;
    role: string;
    avatar: string;
    location: string;
    email: string;
    phone: string;
    experience: string;
    skills: string[];
    softSkills: string[];
    bio: string;
    rating: number;
    projects: number;
    verified: boolean;
    projectHistory: Project[];
    monthlyCost: number;
    isAICertified?: boolean;
    professionalSummary?: string;
  };
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}.${parts[1][0]}.`;
  }
  return name.slice(0, 2).toUpperCase() + ".";
}

// Convert USD to UF (approximate)
function convertToUF(usd: number): number {
  // Using approximate exchange rate: 1 UF ≈ 37.5 USD
  return Math.round(usd / 37.5);
}

export function QuickViewPanel({ isOpen, onClose, candidate }: QuickViewPanelProps) {
  if (!candidate) return null;

  const initials = getInitials(candidate.name);
  const monthlyCostUF = convertToUF(candidate.monthlyCost);

  const handleWhatsAppContact = () => {
    const phoneNumber = "+56912345678"; // Placeholder number
    const message = encodeURIComponent(
      `Hola, estoy interesado en contratar al profesional ${initials} (${candidate.role}) a través de KiberMatch. Me gustaría recibir más información.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };


  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 transform transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-32">
          {/* Header Section */}
          <div className="relative h-32 bg-gradient-to-br from-kibernum-cyan/20 to-kibernum-green/20">
            <div className="absolute -bottom-12 left-6">
              <ProfileIdenticon name={candidate.name} size="lg" className="border-4 border-card shadow-glass-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 px-6 pb-6">
            {/* Name & Role */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2 flex-wrap">
                {initials}
                {candidate.verified && (
                  <CheckCircle2 className="w-5 h-5 text-kibernum-cyan" />
                )}
                {candidate.isAICertified && (
                  <Badge className="badge-ai-certified flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI Certified
                  </Badge>
                )}
              </h2>
              <p className="text-muted-foreground">{candidate.role}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-kibernum-cyan">{candidate.rating}</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-kibernum-cyan text-kibernum-cyan" />
                  Rating
                </p>
              </div>
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-kibernum-green">{candidate.projects}</p>
                <p className="text-xs text-muted-foreground">Proyectos</p>
              </div>
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-foreground">{candidate.experience}</p>
                <p className="text-xs text-muted-foreground">Experiencia</p>
              </div>
            </div>

            {/* Professional Summary (AI-generated value proposition) */}
            {candidate.professionalSummary && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-kibernum-cyan" />
                  Análisis de Valor Diferencial
                </h3>
                <div className="bg-kibernum-cyan/10 border border-kibernum-cyan/20 p-3 rounded-xl">
                  <p className="text-sm text-foreground leading-relaxed">
                    {candidate.professionalSummary}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Skills */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-kibernum-primary/10 text-kibernum-primary border border-kibernum-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-kibernum-info" />
                Habilidades Blandas
              </h3>
              <div className="flex flex-wrap gap-2">
                {candidate.softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-kibernum-info/10 text-kibernum-info border border-kibernum-info/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project History */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-kibernum-success" />
                Proyectos Anteriores
              </h3>
              <div className="space-y-3">
                {candidate.projectHistory.map((project, index) => (
                  <div key={index} className="bg-secondary/30 p-3 rounded-xl border border-border/50">
                    <p className="font-medium text-foreground text-sm">{project.name}</p>
                    <p className="text-xs text-muted-foreground">{project.role}</p>
                    <p className="text-xs text-kibernum-primary mt-1">{project.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Estimate in UF */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-kibernum-warning" />
                Costo de Contratación
              </h3>
              <div className="bg-kibernum-warning/10 border border-kibernum-warning/30 rounded-xl p-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {monthlyCostUF} UF
                  </span>
                  <span className="text-sm text-muted-foreground">/ mes</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  *Tarifa estimada. Consulte con su ejecutivo de cuenta para detalles.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {candidate.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {candidate.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  {candidate.phone}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sticky Actions Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4">
          <Button 
            className="w-full gradient-green text-accent-foreground rounded-xl gap-2"
            onClick={handleWhatsAppContact}
          >
            <MessageCircle className="w-4 h-4" />
            Hablar con Ejecutivo
          </Button>
        </div>
      </div>
    </>
  );
}
