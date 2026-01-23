import { 
  LayoutDashboard, 
  Users, 
  Search, 
  Clock, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Sparkles,
  Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}

const mainNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Talento" },
  { icon: Search, label: "Búsqueda" },
  { icon: Clock, label: "Reservas", badge: "3" },
  { icon: BarChart3, label: "Analíticas" },
];

const bottomNavItems: NavItem[] = [
  { icon: Settings, label: "Configuración" },
  { icon: HelpCircle, label: "Ayuda" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-sidebar border-r border-border/50 flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 rounded-2xl gradient-cyan flex items-center justify-center shadow-glow">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2">
        {mainNavItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}

        {/* AI Match Button */}
        <div className="my-4 w-10 h-px bg-border" />
        <button className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-kibernum-purple/20 to-kibernum-cyan/20 border border-kibernum-purple/30 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow group">
          <Sparkles className="w-5 h-5 text-kibernum-cyan group-hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-kibernum-green rounded-full animate-pulse" />
        </button>
      </nav>

      {/* Bottom Navigation */}
      <div className="flex flex-col items-center gap-2 mt-auto">
        {bottomNavItems.map((item) => (
          <NavButton key={item.label} item={item} />
        ))}
      </div>

      {/* User Avatar */}
      <div className="mt-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kibernum-cyan to-kibernum-green p-0.5">
          <div className="w-full h-full rounded-full bg-sidebar flex items-center justify-center text-xs font-semibold text-foreground">
            JD
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavButton({ item }: { item: NavItem }) {
  return (
    <button
      className={cn(
        "relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group",
        item.active
          ? "bg-primary/10 text-primary shadow-glow"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      )}
    >
      <item.icon className="w-5 h-5" />
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-1.5 bg-card border border-border rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
        {item.label}
      </span>

      {/* Badge */}
      {item.badge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-kibernum-orange text-[10px] font-bold rounded-full flex items-center justify-center text-white">
          {item.badge}
        </span>
      )}

      {/* Active Indicator */}
      {item.active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-6 bg-primary rounded-full" />
      )}
    </button>
  );
}
