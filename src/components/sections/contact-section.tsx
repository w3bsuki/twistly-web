"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-text"
import { ContactForm } from "@/components/ui/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="container py-12 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <AnimatedText
          text="Let's Talk"
          className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
          once
        />
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Ready to start your next project? Contact us today for a free consultation.
        </p>
      </div>
      <div className="mx-auto max-w-md pt-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 