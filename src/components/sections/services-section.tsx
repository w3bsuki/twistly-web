"use client"

import { Code, Paintbrush, PenTool, Share2 } from "lucide-react"

import { AnimatedText } from "@/components/ui/animated-text"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive, and fast websites tailored to your brand",
    content: "We create beautiful, functional websites and web applications using the latest technologies and best practices.",
    href: "/web-development"
  },
  {
    icon: PenTool,
    title: "Marketing & SEO",
    description: "Results-driven marketing strategies to improve visibility",
    content: "Boost your online presence with strategic marketing and search engine optimization that drives traffic and conversions.",
    href: "/marketing-seo"
  },
  {
    icon: Paintbrush,
    title: "Design Services",
    description: "Stunning designs that elevate your brand identity",
    content: "From logos to UI/UX design, we create visually appealing and user-friendly designs that communicate your brand message.",
    href: "/design-services"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build and engage your audience across platforms",
    content: "Establish a strong social media presence with content creation, community management, and targeted campaigns.",
    href: "/social-media"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="container py-12 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <AnimatedText
          text="Our Services"
          className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
          once
        />
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Comprehensive digital solutions for your business needs
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            content={service.content}
            href={service.href}
          />
        ))}
      </div>
    </section>
  )
} 