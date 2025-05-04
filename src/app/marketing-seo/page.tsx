import { Metadata } from "next"
import { BarChart, Globe, LineChart, Search, TrendingUp } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Marketing & SEO Services | Modern Web Agency",
  description: "Strategic digital marketing and SEO services to boost your online visibility and drive conversions.",
}

export default function MarketingSeoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Marketing & SEO Services
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Strategic digital marketing and SEO services to boost your online visibility and drive conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Our Marketing & SEO Expertise
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              We provide comprehensive marketing and SEO services to help your business grow online
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Search Engine Optimization</CardTitle>
                <CardDescription>
                  Improve your visibility in search engine results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We optimize your website to rank higher in search engine results pages (SERPs) through on-page SEO, off-page SEO, and technical SEO strategies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Content Marketing</CardTitle>
                <CardDescription>
                  Engaging content that attracts and converts your audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create high-quality, relevant content that resonates with your target audience and drives organic traffic to your website.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">PPC Advertising</CardTitle>
                <CardDescription>
                  Pay-per-click campaigns that deliver results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop and manage targeted PPC campaigns on Google, Bing, and social media platforms to drive immediate traffic and conversions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Analytics & Reporting</CardTitle>
                <CardDescription>
                  Data-driven insights to optimize your marketing strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We track and analyze key metrics to measure the success of your marketing campaigns and provide actionable insights for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold md:text-3xl">
                Our Marketing Process
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                A strategic approach to digital marketing for measurable results
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div className="relative flex flex-col gap-6 md:flex-row">
                <div className="flex md:w-1/4">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Research & Analysis</h3>
                    <p className="mt-2 text-muted-foreground">
                      We analyze your industry, competitors, and target audience to develop a solid foundation.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/4">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Strategy Development</h3>
                    <p className="mt-2 text-muted-foreground">
                      We create a customized strategy aligned with your business goals and target audience.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/4">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Implementation</h3>
                    <p className="mt-2 text-muted-foreground">
                      We execute the strategy across relevant channels and platforms to reach your audience.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/4">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Measure & Optimize</h3>
                    <p className="mt-2 text-muted-foreground">
                      We continuously monitor performance and refine our approach to maximize results.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Steps (Only visible on small screens) */}
              <div className="md:hidden">
                <div className="mb-6">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Strategy Development</h3>
                    <p className="mt-2 text-muted-foreground">
                      We create a customized strategy aligned with your business goals and target audience.
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Implementation</h3>
                    <p className="mt-2 text-muted-foreground">
                      We execute the strategy across relevant channels and platforms to reach your audience.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Measure & Optimize</h3>
                    <p className="mt-2 text-muted-foreground">
                      We continuously monitor performance and refine our approach to maximize results.
                    </p>
                  </div>
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