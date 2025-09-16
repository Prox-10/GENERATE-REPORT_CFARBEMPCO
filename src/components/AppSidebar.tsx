import { useState } from "react";
import { 
  Home, 
  Users, 
  Calendar, 
  Settings, 
  FileText, 
  Menu,
  ChevronDown,
  ChevronRight,
  Clock,
  Plane,
  Star,
  Award
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const objectives = [
  { id: 1, title: "Employee Management", url: "/employee-management", icon: Users },
  { id: 2, title: "Attendance Tracking", url: "/attendance-tracking", icon: Clock },
  { id: 3, title: "Leave Management", url: "/leave-management", icon: Plane },
  { id: 4, title: "Performance Evaluation", url: "/performance-evaluation", icon: Star },
  { 
    id: 5, 
    title: "Generate Reports", 
    url: "/reports", 
    icon: FileText,
    subItems: [
      { title: "Daily Time Records", url: "/reports/daily-time-records", icon: Clock },
      { title: "Leave Records", url: "/reports/leave-records", icon: Plane },
      { title: "Employee Evaluation Reports", url: "/reports/evaluation-reports", icon: Star },
      { title: "Length of Service Reports", url: "/reports/service-reports", icon: Award },
    ]
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState<number[]>([5]); // Reports open by default
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  const toggleGroup = (id: number) => {
    if (openGroups.includes(id)) {
      setOpenGroups(openGroups.filter(groupId => groupId !== id));
    } else {
      setOpenGroups([...openGroups, id]);
    }
  };

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-72"}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar-background">
        <div className="p-4 border-b border-sidebar-border">
          <h1 className={`font-bold text-sidebar-foreground ${collapsed ? 'text-xs text-center' : 'text-lg'}`}>
            {collapsed ? 'CFAR' : 'CFARBEMPCO HRIS'}
          </h1>
          {!collapsed && (
            <p className="text-sm text-sidebar-foreground/70 mt-1">Human Resource Information System</p>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80">Objectives</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {objectives.map((objective) => (
                <SidebarMenuItem key={objective.id}>
                  {objective.subItems ? (
                    <Collapsible
                      open={openGroups.includes(objective.id)}
                      onOpenChange={() => toggleGroup(objective.id)}
                      className="w-full"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className={`w-full justify-between ${
                            currentPath.startsWith('/reports') 
                              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' 
                              : 'hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                          }`}
                        >
                          <div className="flex items-center">
                            <objective.icon className="mr-2 h-4 w-4" />
                            {!collapsed && <span>{objective.title}</span>}
                          </div>
                          {!collapsed && (
                            openGroups.includes(objective.id) ? 
                            <ChevronDown className="h-4 w-4" /> : 
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!collapsed && (
                        <CollapsibleContent className="space-y-1 mt-1">
                          {objective.subItems.map((subItem) => (
                            <SidebarMenuButton key={subItem.url} asChild>
                              <NavLink 
                                to={subItem.url} 
                                className={`ml-6 flex items-center ${getNavCls({ isActive: isActive(subItem.url) })}`}
                              >
                                <subItem.icon className="mr-2 h-3 w-3" />
                                <span className="text-sm">{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          ))}
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={objective.url} 
                        className={`flex items-center ${getNavCls({ isActive: isActive(objective.url) })}`}
                      >
                        <objective.icon className="mr-2 h-4 w-4" />
                        {!collapsed && <span>{objective.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}