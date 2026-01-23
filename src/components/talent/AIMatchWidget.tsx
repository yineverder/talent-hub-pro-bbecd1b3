import { Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestedMatches = [
  { name: "María García", role: "React Lead", match: 98, avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Carlos Ruiz", role: "Node.js Senior", match: 95, avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Ana Torres", role: "Full Stack Dev", match: 92, avatar: "https://i.pravatar.cc/150?img=5" },
];

export function AIMatchWidget() {
  return (
    <div className="glass-card p-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-kibernum-purple/30 to-kibernum-cyan/30 border border-kibernum-purple/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-kibernum-cyan" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Match</h3>
            <p className="text-xs text-muted-foreground">Basado en tu historial</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
          Ver todos
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Matches List */}
      <div className="space-y-3">
        {suggestedMatches.map((match, index) => (
          <div
            key={match.name}
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={match.avatar}
              alt={match.name}
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{match.name}</p>
              <p className="text-xs text-muted-foreground">{match.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-kibernum-cyan">{match.match}%</span>
              <TrendingUp className="w-4 h-4 text-kibernum-green opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      {/* AI Status */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Última actualización: hace 5 min</span>
          <span className="flex items-center gap-1 text-kibernum-green">
            <span className="w-2 h-2 rounded-full bg-kibernum-green animate-pulse" />
            AI activa
          </span>
        </div>
      </div>
    </div>
  );
}
