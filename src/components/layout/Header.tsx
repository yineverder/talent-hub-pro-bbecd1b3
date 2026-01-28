import { Search, SlidersHorizontal, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileIdenticon } from "@/components/talent/ProfileIdenticon";

export function Header() {
  return (
    <header className="h-20 px-8 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
      {/* Left Section - Title & Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">KiberMatch</h1>
        <p className="text-sm text-muted-foreground">
          Encuentra el talento perfecto para tu proyecto
        </p>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-kibernum-orange text-[10px] font-bold rounded-full flex items-center justify-center text-white">
            5
          </span>
        </button>

        {/* Company Selector */}
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-all">
          <ProfileIdenticon name="Acme Corp" size="sm" className="rounded-lg" />
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
