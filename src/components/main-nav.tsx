"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/web-development",
      label: "Web Development",
      active: pathname === "/web-development",
    },
    {
      href: "/marketing-seo",
      label: "Marketing & SEO",
      active: pathname === "/marketing-seo",
    },
    {
      href: "/design-services",
      label: "Design Services",
      active: pathname === "/design-services",
    },
    {
      href: "/social-media",
      label: "Social Media",
      active: pathname === "/social-media",
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-6 lg:space-x-8", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
} 