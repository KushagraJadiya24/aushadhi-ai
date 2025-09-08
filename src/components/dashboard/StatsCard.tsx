import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  variant = "default" 
}: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5";
      case "success":
        return "border-success/20 bg-gradient-to-br from-success/5 to-success/10";
      case "warning":
        return "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10";
      default:
        return "border-border bg-card";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "primary":
        return "text-primary bg-primary/10";
      case "success":
        return "text-success bg-success/10";
      case "warning":
        return "text-warning bg-warning/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <Card className={`${getVariantStyles()} shadow-soft hover:shadow-medium transition-all duration-200`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
            {trend && (
              <div className="flex items-center space-x-1">
                <span className={`text-xs ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full ${getIconStyles()}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}