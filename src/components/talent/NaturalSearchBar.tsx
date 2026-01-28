import { Search, Sparkles } from "lucide-react";

interface NaturalSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function NaturalSearchBar({ value, onChange }: NaturalSearchBarProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-kibernum-cyan animate-pulse" />
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe qué profesional buscas (ej: Fullstack React y Node.js)..."
          className="w-full h-16 pl-20 pr-6 text-lg bg-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kibernum-cyan/30 focus:border-kibernum-cyan/50 transition-all shadow-lg"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <span className="text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded-lg">
            AI Powered
          </span>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3">
        Busca por tecnologías, roles, o describe el perfil que necesitas en lenguaje natural
      </p>
    </div>
  );
}
