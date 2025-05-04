import { Metadata } from "next"
import { BarChart, MessageSquare, Share2, Users } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Social Media Services | Modern Web Agency",
  description: "Strategic social media management services to build and engage your audience across platforms.",
}

export default function SocialMediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Social Media Services
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Build meaningful connections with your audience through strategic social media management.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Our Social Media Expertise
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Comprehensive social media services to grow your brand online
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Social Media Management</CardTitle>
                <CardDescription>
                  Consistent, high-quality content across platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop and implement comprehensive social media strategies including content creation, scheduling, and publishing to maintain a consistent brand presence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Community Management</CardTitle>
                <CardDescription>
                  Building and engaging with your audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We monitor and respond to comments, messages, and mentions to foster positive relationships with your audience and build a loyal community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Paid Social Advertising</CardTitle>
                <CardDescription>
                  Targeted campaigns to reach your ideal audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create and manage paid social media campaigns to increase brand awareness, drive website traffic, and generate leads with measurable ROI.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Influencer Marketing</CardTitle>
                <CardDescription>
                  Partnerships with relevant influencers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We identify and collaborate with influencers in your industry to expand your reach and build credibility with your target audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-bold md:text-3xl">
                Platforms We Manage
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                We help you establish a strong presence on the platforms that matter most to your audience
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1877F2]/10 mx-auto">
                    <span className="text-xl font-bold text-[#1877F2]">f</span>
                  </div>
                  <h3 className="mt-4 font-medium">Facebook</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1DA1F2]/10 mx-auto">
                    <span className="text-xl font-bold text-[#1DA1F2]">X</span>
                  </div>
                  <h3 className="mt-4 font-medium">X / Twitter</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E1306C]/10 mx-auto">
                    <span className="text-xl font-bold text-[#E1306C]">Ig</span>
                  </div>
                  <h3 className="mt-4 font-medium">Instagram</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0077B5]/10 mx-auto">
                    <span className="text-xl font-bold text-[#0077B5]">In</span>
                  </div>
                  <h3 className="mt-4 font-medium">LinkedIn</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#FF0000]/10 mx-auto">
                    <span className="text-xl font-bold text-[#FF0000]">Yt</span>
                  </div>
                  <h3 className="mt-4 font-medium">YouTube</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#25F4EE]/10 mx-auto">
                    <span className="text-xl font-bold text-[#25F4EE]">Tt</span>
                  </div>
                  <h3 className="mt-4 font-medium">TikTok</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#BD081C]/10 mx-auto">
                    <span className="text-xl font-bold text-[#BD081C]">Pi</span>
                  </div>
                  <h3 className="mt-4 font-medium">Pinterest</h3>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#7289DA]/10 mx-auto">
                    <span className="text-xl font-bold text-[#7289DA]">Rd</span>
                  </div>
                  <h3 className="mt-4 font-medium">Reddit</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Benefits of Professional Social Media Management
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Why investing in professional social media services is crucial for your business
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Increased Brand Awareness</h3>
              <p className="mt-2 text-muted-foreground">
                Reach a wider audience and increase visibility for your brand across multiple platforms.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Higher Engagement</h3>
              <p className="mt-2 text-muted-foreground">
                Build meaningful connections with your audience through consistent, relevant content.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">More Website Traffic</h3>
              <p className="mt-2 text-muted-foreground">
                Drive targeted traffic to your website from interested social media users.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Better Customer Insights</h3>
              <p className="mt-2 text-muted-foreground">
                Gain valuable insights about your audience preferences and behaviors.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Enhanced Customer Service</h3>
              <p className="mt-2 text-muted-foreground">
                Provide prompt responses to customer inquiries and feedback on social channels.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Competitive Advantage</h3>
              <p className="mt-2 text-muted-foreground">
                Stay ahead of competitors by maintaining an active and engaging social presence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 