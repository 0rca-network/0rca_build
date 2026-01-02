"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy } from "lucide-react"

const hackathons = [
  {
    title: "0rca Agent Winter Arc",
    date: "Jan 20 - Mar 15, 2026",
    status: "Live",
    prizePool: "$50,000 USDC",
    participants: 1240,
  },
  {
    title: "Smart Agent Summit Q1",
    date: "Feb 1 - Feb 28, 2026",
    status: "Upcoming",
    prizePool: "$75,000 USDC",
    participants: 0,
  },
  {
    title: "Decentralized AI Challenge",
    date: "Dec 1 - Dec 31, 2025",
    status: "Completed",
    prizePool: "$35,000 USDC",
    participants: 856,
  },
  {
    title: "Agent Innovation Bootcamp",
    date: "Nov 15 - Nov 30, 2025",
    status: "Completed",
    prizePool: "$25,000 USDC",
    participants: 420,
  },
]

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Active & Past Hackathons</h2>
      <p className="text-foreground/60 mb-12">Compete, build, and win big with the 0rca community</p>

      <div className="space-y-4">
        {hackathons.map((hackathon, index) => (
          <Card
            key={index}
            className="group p-6 bg-gradient-to-r from-card to-card/50 border border-white/10 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {hackathon.title}
                  </h3>
                  <Badge
                    className={`ml-auto sm:ml-0 ${hackathon.status === "Live"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : hackathon.status === "Upcoming"
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-foreground/10 text-foreground/60 border border-foreground/20"
                      }`}
                  >
                    {hackathon.status}
                  </Badge>
                </div>
                <p className="text-sm text-foreground/60 mb-3">{hackathon.date}</p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">Prize Pool</p>
                    <p className="font-semibold text-foreground">{hackathon.prizePool}</p>
                  </div>
                  {hackathon.participants > 0 && (
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">Participants</p>
                      <p className="font-semibold text-foreground">{hackathon.participants}+</p>
                    </div>
                  )}
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold group-hover:translate-x-1 transition-transform">
                View Details
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
