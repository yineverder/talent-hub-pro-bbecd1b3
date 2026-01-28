import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Eye, CheckCircle2, Calendar, Sparkles, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileIdenticon } from "./ProfileIdenticon";

export interface TalentCardProps {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  experience: string;
  skills: string[];
  availability: "immediate" | "verified" | "future";
  availableIn?: number;
  matchScore?: number;
  verified?: boolean;
  hasSpecialOffer?: boolean;
  isAICertified?: boolean;
  monthlyCostUF?: number;
  onView?: () => void;
  onAction?: () => void;
  animationDelay?: number;
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}.${parts[1][0]}.`;
  }
  return name.slice(0, 2).toUpperCase() + ".";
}

export function TalentCard({
  name,
  role,
  location,
  experience,
  skills,
  availability,
  availableIn,
  matchScore,
  verified,
  hasSpecialOffer,
  isAICertified,
  monthlyCostUF,
  onView,
  onAction,
  animationDelay = 0,
}: TalentCardProps) {
  const getBadgeConfig = () => {
    switch (availability) {
      case "immediate":
        return {
          label: "Asignación Inmediata",
          className: "badge-bench",
          icon: Clock,
        };
      case "verified":
        return {
          label: "Kibernum Verified",
          className: "badge-external",
          icon: CheckCircle2,
        };
      case "future":
        return {
          label: `Disponible en ${availableIn} días`,
          className: "badge-anticipation",
          icon: Calendar,
        };
    }
  };

  const getActionButton = () => {
    switch (availability) {
      case "immediate":
        return {
          label: "Contratar Ahora",
          className: "gradient-green text-accent-foreground hover:opacity-90",
        };
      case "verified":
        return {
          label: "Ver Perfil",
          className: "gradient-cyan text-primary-foreground hover:opacity-90",
        };
      case "future":
        return {
          label: "Reservar Perfil",
          className: "bg-kibernum-orange text-white hover:bg-kibernum-orange/90",
        };
    }
  };

  const badgeConfig = getBadgeConfig();
  const actionConfig = getActionButton();
  const initials = getInitials(name);

  return (
    <div
      className="glass-card-hover p-5 flex flex-col gap-4 opacity-0 animate-fade-in-up relative"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Special Offer Badge */}
      {hasSpecialOffer && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge className="badge-special-offer flex items-center gap-1">
            <Tag className="w-3 h-3" />
            10% Off - 3 meses
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar - Now using Identicon */}
          <div className="relative">
            <ProfileIdenticon name={name} size="md" />
            {/* Status Indicator */}
            <span
              className={cn(
                "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card",
                availability === "immediate" && "bg-kibernum-green",
                availability === "verified" && "bg-kibernum-cyan",
                availability === "future" && "bg-kibernum-orange"
              )}
            />
          </div>

          <div>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              {initials}
              {verified && (
                <CheckCircle2 className="w-4 h-4 text-kibernum-cyan" />
              )}
            </h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>

        {/* Match Score */}
        {matchScore && (
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground">AI Match</span>
            <span className="text-lg font-bold text-kibernum-cyan">
              {matchScore}%
            </span>
          </div>
        )}
      </div>

      {/* Badges Row */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge className={cn("text-xs font-medium", badgeConfig.className)}>
          <badgeConfig.icon className="w-3 h-3 mr-1" />
          {badgeConfig.label}
        </Badge>
        
        {isAICertified && (
          <Badge className="badge-ai-certified flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI Certified
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {experience}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.slice(0, 4).map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-secondary/80 text-foreground text-xs"
          >
            {skill}
          </Badge>
        ))}
        {skills.length > 4 && (
          <Badge variant="secondary" className="bg-secondary/50 text-muted-foreground text-xs">
            +{skills.length - 4}
          </Badge>
        )}
      </div>

      {/* Cost in UF */}
      {monthlyCostUF && (
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{monthlyCostUF} UF</span>
          <span className="text-xs"> / mes</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 mt-auto pt-2">
        <Button
          className={cn("flex-1 rounded-xl font-medium", actionConfig.className)}
          onClick={onAction}
        >
          {actionConfig.label}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl text-muted-foreground hover:text-foreground"
          onClick={onView}
        >
          <Eye className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
