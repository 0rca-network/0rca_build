"use client"

import { Card } from "@/components/ui/card"
import { Box, Coins, Cpu } from "lucide-react"

import * as Icons from "lucide-react"

interface TheoryBlock {
  title: string
  content: string
  icon: string
}

export default function TheoryBlocks({ blocks }: { blocks?: TheoryBlock[] }) {
  const displayBlocks = blocks?.length ? blocks : [
    {
      title: "Agent Deployment",
      content: "Seamlessly deploy autonomous agents with intuitive tools and comprehensive documentation.",
      icon: "Box",
    },
    {
      title: "Monetization Layers",
      content: "Built-in revenue streams and tokenomics for sustainable agent operations and growth.",
      icon: "Coins",
    },
    {
      title: "Decentralized Compute",
      content: "Harness distributed computing power for high-performance agent execution across the network.",
      icon: "Cpu",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayBlocks.map((block, index) => {
          // @ts-ignore
          const Icon = Icons[block.icon] || Icons.Box
          return (
            <Card
              key={index}
              className="group p-8 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2.5 mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-full h-full text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{block.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{block.content}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
