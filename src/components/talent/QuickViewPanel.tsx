import { X, MapPin, Mail, Phone, Linkedin, Github, Download, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    bio: string;
    rating: number;
    projects: number;
    verified: boolean;
  };
}

export function QuickViewPanel({ isOpen, onClose, candidate }: QuickViewPanelProps) {
  if (!candidate) return null;

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
          "fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 transform transition-transform duration-300 ease-out overflow-y-auto",
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

        {/* Header Section */}
        <div className="relative h-32 bg-gradient-to-br from-kibernum-cyan/20 to-kibernum-green/20">
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-card shadow-glass-lg">
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-6 pb-6">
          {/* Name & Role */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              {candidate.name}
              {candidate.verified && (
                <CheckCircle2 className="w-5 h-5 text-kibernum-cyan" />
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

          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-2">Acerca de</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{candidate.bio}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-2">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/80">
                  {skill}
                </Badge>
              ))}
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

          {/* Social Links */}
          <div className="flex items-center gap-2 mb-6">
            <Button variant="outline" size="icon" className="rounded-xl">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 gradient-cyan text-primary-foreground rounded-xl">
              Contratar
            </Button>
            <Button variant="outline" className="flex-1 rounded-xl">
              Agendar Entrevista
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
