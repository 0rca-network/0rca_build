"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export default function RegistrationForm() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    building: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({ name: "", email: "", github: "", building: "" })
      setTimeout(() => router.push("/ideas"), 1500)
    }, 500)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Ready to Build?</h2>
      <p className="text-center text-foreground/60 mb-12">
        Register now and join the future of decentralized AI agents
      </p>

      <Card className="p-8 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-2xl">
        {submitted && (
          <div className="mb-6 p-4 bg-accent/20 border border-accent/30 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-sm text-accent">Registration successful! Redirecting...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-white/10 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-white/10 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20"
            />
          </div>

          <div>
            <label htmlFor="github" className="block text-sm font-medium text-foreground mb-2">
              GitHub Profile URL
            </label>
            <Input
              id="github"
              name="github"
              type="url"
              placeholder="https://github.com/yourprofile"
              value={formData.github}
              onChange={handleChange}
              className="bg-background/50 border-white/10 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20"
            />
          </div>

          <div>
            <label htmlFor="building" className="block text-sm font-medium text-foreground mb-2">
              What are you building?
            </label>
            <Textarea
              id="building"
              name="building"
              placeholder="Describe your project, ideas, or what you plan to build..."
              value={formData.building}
              onChange={handleChange}
              required
              rows={4}
              className="bg-background/50 border-white/10 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold h-12 shadow-lg shadow-primary/50 transition-all"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-background/30 border-t-background animate-spin" />
                Registering...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Register for Updates
              </div>
            )}
          </Button>
        </form>
      </Card>
    </section>
  )
}
