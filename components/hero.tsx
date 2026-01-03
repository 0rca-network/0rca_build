"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
          Build the Future of{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Decentralized AI Agents
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 text-balance max-w-2xl mx-auto mb-12">
          0rca is the premier platform for deploying, monetizing, and orchestrating autonomous AI agents on-chain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold text-base h-12 px-8"
          >
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-foreground font-semibold text-base h-12 px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
