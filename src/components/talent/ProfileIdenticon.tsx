import { cn } from "@/lib/utils";

interface ProfileIdenticonProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Generate a consistent color based on name
function getColorFromName(name: string): string {
  const colors = [
    "from-kibernum-cyan to-kibernum-primary",
    "from-kibernum-green to-kibernum-cyan",
    "from-kibernum-orange to-kibernum-warning",
    "from-kibernum-info to-kibernum-purple",
    "from-kibernum-success to-kibernum-green",
    "from-kibernum-primary to-kibernum-info",
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

// Get initials from name
function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const sizeClasses = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-lg",
  lg: "w-24 h-24 text-2xl",
};

export function ProfileIdenticon({ name, size = "md", className }: ProfileIdenticonProps) {
  const gradient = getColorFromName(name);
  const initials = getInitials(name);
  
  return (
    <div
      className={cn(
        "rounded-2xl flex items-center justify-center font-bold text-white bg-gradient-to-br",
        gradient,
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
