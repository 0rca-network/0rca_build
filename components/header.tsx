"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function Header() {
  const router = useRouter()

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Zap className="w-5 h-5 text-background" />
          </div>
          <span className="text-lg font-bold text-foreground">0rca Build</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/ideas" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Ideas
          </Link>
          <Link href="https://docs.0rca.network" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="/#hackathons" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Hackathons
          </Link>
        </div>

        <Button
          onClick={() => router.push("/ideas")}
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background font-semibold shadow-lg shadow-primary/50"
        >
          Submit an Idea
        </Button>
      </nav>
    </header>
  )
}
