import { Users, Clock } from "lucide-react";

const stats = [
  {
    label: "Candidatos Disponibles",
    value: "247",
    change: "+12%",
    positive: true,
    icon: Users,
    color: "kibernum-primary",
  },
  {
    label: "Tiempo Promedio de Contratación",
    value: "2.3 días",
    change: "-18%",
    positive: true,
    icon: Clock,
    color: "kibernum-success",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-card p-5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}
              style={{
                backgroundColor: `hsl(var(--${stat.color}) / 0.1)`,
              }}
            >
              <stat.icon
                className="w-5 h-5"
                style={{ color: `hsl(var(--${stat.color}))` }}
              />
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.positive
                  ? "bg-kibernum-green/10 text-kibernum-green"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
