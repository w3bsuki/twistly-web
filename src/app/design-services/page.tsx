import { Metadata } from "next"
import { CircleUser, Figma, ImageIcon, Paintbrush, Type } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Design Services | Modern Web Agency",
  description: "Professional design services including UI/UX design, branding, and graphic design for your digital presence.",
}

export default function DesignServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Design Services
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Professional design services that elevate your brand and create memorable user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Our Design Expertise
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              We create stunning designs that communicate your brand message effectively
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Figma className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">UI/UX Design</CardTitle>
                <CardDescription>
                  User-centered design that elevates the user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design intuitive user interfaces and seamless user experiences that delight your customers and drive conversions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <CircleUser className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Brand Identity</CardTitle>
                <CardDescription>
                  Distinctive branding that sets you apart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop comprehensive brand identities including logos, color palettes, typography, and brand guidelines that reflect your company's values.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <ImageIcon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Graphic Design</CardTitle>
                <CardDescription>
                  Visually compelling graphics for all your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create eye-catching graphics for social media, marketing materials, presentations, and more to enhance your digital presence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Type className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Typography & Layout</CardTitle>
                <CardDescription>
                  Professional typography and layouts for readability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We select and implement appropriate typography and layouts to ensure your content is readable, accessible, and visually appealing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold md:text-3xl">
                Our Design Process
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                How we approach design projects to deliver exceptional results
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Discovery</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    We learn about your brand, goals, and target audience.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Concept</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    We create initial design concepts based on our research.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Refinement</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    We refine the selected concept based on your feedback.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">04</span>
                  </div>
                  <h3 className="mt-4 text-center font-medium">Delivery</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    We provide the final designs in all required formats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Design Tools We Use
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Professional industry-standard tools for high-quality design work
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#0acf83]/10">
                <Figma className="h-8 w-8 text-[#0acf83]" />
              </div>
              <p className="mt-4 font-medium">Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#ff9a00]/10">
                <Paintbrush className="h-8 w-8 text-[#ff9a00]" />
              </div>
              <p className="mt-4 font-medium">Adobe Suite</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#5551ff]/10">
                <div className="text-lg font-bold text-[#5551ff]">Sk</div>
              </div>
              <p className="mt-4 font-medium">Sketch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#00c4cc]/10">
                <div className="text-lg font-bold text-[#00c4cc]">Cn</div>
              </div>
              <p className="mt-4 font-medium">Canva</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 