import { useState } from "react";
import {
  Home,
  Users,
  FileText,
  Database,
  Stethoscope,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Diet Charts", url: "/diet-charts", icon: FileText },
  { title: "Food Database", url: "/food-database", icon: Database },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[hsl(var(--green))] rounded-lg flex items-center justify-center">
                <img
                  src="/favicon.ico"
                  alt="Logo"
                  className="w-5 h-5 object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Aushadhi-Ai
                </h2>
                <p className="text-xs text-muted-foreground">Diet Management</p>
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-muted transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <SidebarContent className="flex-1">
          <SidebarGroup>
            <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary text-foreground/70 shadow-soft"
                              : "text-foreground/90 hover:text-foreground hover:bg-muted"
                          }`
                        }
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {!isCollapsed && (
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
