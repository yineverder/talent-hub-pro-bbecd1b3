import { Search, SlidersHorizontal, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filterOptions = [
  { label: "React", active: true },
  { label: "Node.js", active: true },
  { label: "Senior", active: false },
  { label: "Full-time", active: false },
];

export function Header() {
  return (
    <header className="h-20 px-8 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
      {/* Left Section - Title & Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Talent Hub</h1>
        <p className="text-sm text-muted-foreground">
          Encuentra el talento perfecto para tu proyecto
        </p>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por tecnología, rol, experiencia..."
            className="w-full h-12 pl-12 pr-4 search-glass text-foreground placeholder:text-muted-foreground"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-muted-foreground">Filtros activos:</span>
          {filterOptions.filter(f => f.active).map((filter) => (
            <Badge
              key={filter.label}
              variant="secondary"
              className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 cursor-pointer"
            >
              {filter.label}
              <span className="ml-1 opacity-60">×</span>
            </Badge>
          ))}
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-kibernum-orange text-[10px] font-bold rounded-full flex items-center justify-center text-white">
            5
          </span>
        </button>

        {/* Company Selector */}
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-all">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-kibernum-cyan to-kibernum-green flex items-center justify-center text-xs font-bold text-primary-foreground">
            AC
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">Acme Corp</p>
            <p className="text-xs text-muted-foreground">Enterprise</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
