"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  content: string
  href: string
}

export function ServiceCard({ icon: Icon, title, description, content, href }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-primary/20 transition-all hover:border-primary sm:h-[350px]">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="pt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Link href={href}>
          <Button className="w-full">Learn More</Button>
        </Link>
      </div>
    </Card>
  )
} 