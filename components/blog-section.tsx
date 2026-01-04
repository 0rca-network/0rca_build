"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface BlogPost {
  title: string
  summary: string
  publishedAt: string
  slug: { current: string }
}

export default function BlogSection({ posts }: { posts?: BlogPost[] }) {
  const displayPosts = posts?.length ? posts : [
    {
      title: "Optimizing Agent Workflows for Maximum Efficiency",
      summary:
        "Discover best practices for streamlining your autonomous agent operations and maximizing performance.",
      slug: { current: "#" },
      publishedAt: "2025-01-15T00:00:00Z",
    },
    {
      title: "New Hackathon: Winter Arc 2025 Now Live",
      summary: "Join our latest hackathon with $50,000 USDC in prize pools and exclusive networking opportunities.",
      slug: { current: "#" },
      publishedAt: "2025-01-12T00:00:00Z",
    },
    {
      title: "Developer Spotlight: Building with 0rca",
      summary: "Interview with our top community developers and insights into their most innovative agent projects.",
      slug: { current: "#" },
      publishedAt: "2025-01-08T00:00:00Z",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Latest from the Ecosystem</h2>
      <p className="text-foreground/60 mb-12">Stay updated with the latest developments in the 0rca community</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map((post, index) => (
          <Card
            key={index}
            className="group p-6 bg-card border border-white/10 rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex flex-col h-full"
          >
            <Badge className="w-fit mb-4 bg-primary/20 text-primary border border-primary/30">Blog</Badge>
            <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-foreground/60 mb-4 flex-grow">{post.summary}</p>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-xs text-foreground/50">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        ))}
      </div>
    </section >
  )
}
