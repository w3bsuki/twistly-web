import { Metadata } from "next"
import { Browser, Code, Database, Layout } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Web Development Services | Modern Web Agency",
  description: "We build fast, responsive, and user-friendly websites and web applications using the latest technologies.",
}

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Web Development Services
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We build fast, responsive, and user-friendly websites and web applications using the latest technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Our Web Development Expertise
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              We offer a comprehensive range of web development services to help your business succeed online
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Browser className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Modern Websites</CardTitle>
                <CardDescription>
                  Beautiful and functional websites that represent your brand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create modern, responsive websites optimized for search engines and conversions. Our sites are built with the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Web Applications</CardTitle>
                <CardDescription>
                  Custom web applications to streamline your business processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From simple tools to complex platforms, we develop custom web applications that solve your business challenges and improve efficiency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Back-End Development</CardTitle>
                <CardDescription>
                  Robust and scalable back-end solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build secure, performant, and scalable back-end systems to power your websites and applications using modern frameworks and databases.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Layout className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Front-End Development</CardTitle>
                <CardDescription>
                  Engaging user interfaces and experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create intuitive and engaging user interfaces that provide excellent user experiences across all devices and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold md:text-3xl">
                Our Tech Stack
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                We use the latest technologies to build modern, fast, and scalable web solutions
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
                    <span className="text-xl font-bold">Next.js</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">React Framework</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
                    <span className="text-xl font-bold">TS</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">TypeScript</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
                    <span className="text-xl font-bold">TW</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Tailwind CSS</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm">
                    <span className="text-xl font-bold">SB</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Supabase</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 