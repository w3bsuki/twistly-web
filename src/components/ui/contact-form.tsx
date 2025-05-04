"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Your message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  )
} 