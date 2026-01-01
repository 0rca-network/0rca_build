"use client"

import { useState } from "react"
import {
  Search,
  ChevronDown,
  Wallet,
  Zap,
  MonitorSmartphone,
  Tag,
  Smartphone,
  BadgeDollarSign,
  Router,
  Database,
  Wrench,
  Users,
  Vote,
  Gamepad2,
  Sprout,
  LayoutGrid,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BackgroundBeams } from "@/components/ui/background-beams"

const CATEGORIES = [
  { name: "All Categories", icon: LayoutGrid },
  { name: "Payments", icon: Wallet },
  { name: "Blinks", icon: Zap },
  { name: "Consumer dApps", icon: MonitorSmartphone },
  { name: "NFTs", icon: Tag },
  { name: "Mobile", icon: Smartphone },
  { name: "DeFi", icon: BadgeDollarSign },
  { name: "DePIN", icon: Router },
  { name: "Infrastructure", icon: Database },
  { name: "Developer Tooling", icon: Wrench },
  { name: "Web3 Social", icon: Users },
  { name: "DAOs and Communities", icon: Vote },
  { name: "Gaming", icon: Gamepad2 },
  { name: "ReFi", icon: Sprout },
]

const IDEAS = [
  {
    id: 1,
    title: "E-commerce with Blinks",
    description:
      "E-commerce online is tedious and time-taking, and often involves consumers having to jump through hoops to...",
    category: "Payments",
    creator: "0xDesigner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    difficulty: "INTERMEDIATE",
    difficultyColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: 2,
    title: "CLAMM Integration to Meteora",
    description:
      "CLAMMs (Concentrated Liquidity Automated Market Makers), by design, often hold a significant amount of...",
    category: "DeFi",
    creator: "Meteora",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    difficulty: "ADVANCED",
    difficultyColor: "bg-orange-500/20 text-orange-300",
  },
  {
    id: 3,
    title: "Virtual Pet Game on Solana",
    description:
      "A mobile app that allows users to adopt and care for virtual pets, providing companionship and community...",
    category: "Gaming",
    creator: "Mercuryo",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    difficulty: "INTERMEDIATE",
    difficultyColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: 4,
    title: "Cross-chain DePIN Index",
    description: "Index tokens found some level of product market fit on Ethereum last cycle including [SDPI]...",
    category: "DePIN",
    creator: "DAmconia_Crypto",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    difficulty: "ADVANCED",
    difficultyColor: "bg-orange-500/20 text-orange-300",
  },
  {
    id: 5,
    title: "Data-driven DRiP Recommendations",
    description: "Exploring more utility (and fun) for millions of DRiP users worldwide.",
    category: "Consumer dApps",
    creator: "Vibhu",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    difficulty: "EASY",
    difficultyColor: "bg-blue-500/20 text-blue-300",
  },
  {
    id: 6,
    title: "Private DeFi",
    description:
      "Privacy holds paramount significance in the realm of DeFi as it is imperative for institutional participation, wherein...",
    category: "DeFi",
    creator: "Light Protocol",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    difficulty: "ADVANCED",
    difficultyColor: "bg-orange-500/20 text-orange-300",
  },
  {
    id: 7,
    title: "Mobile Wallet Integration",
    description: "Seamless integration of blockchain wallets into mobile applications for easier user onboarding...",
    category: "Mobile",
    creator: "WalletDev",
    avatar: "https://images.unsplash.com/photo-1519134228821-9d1e44fb3058?w=400&h=400&fit=crop",
    difficulty: "INTERMEDIATE",
    difficultyColor: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: 8,
    title: "DAO Treasury Management Tools",
    description:
      "Advanced tooling for DAOs to manage treasury allocations, voting mechanisms, and fund distribution...",
    category: "DAOs and Communities",
    creator: "DAOBuilder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    difficulty: "ADVANCED",
    difficultyColor: "bg-orange-500/20 text-orange-300",
  },
]

interface IdeasContentProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function IdeasContent({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
}: IdeasContentProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredIdeas = IDEAS.filter((idea) => {
    const categoryMatch = selectedCategory === "All Categories" || idea.category === selectedCategory
    const searchMatch =
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-foreground">Categories</h2>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${selectedCategory === category.name
                        ? "bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/50 text-foreground"
                        : "bg-card/30 border border-white/10 text-foreground/70 hover:text-foreground hover:border-white/20"
                        }`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <category.icon className="w-5 h-5" />
                      </div>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Header with Sort */}
              <div className="flex items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-background">✦</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedCategory}</h3>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-card/30 hover:bg-card/50 text-foreground text-sm font-medium transition-all"
                  >
                    Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-card border border-white/20 rounded-lg shadow-lg z-10">
                      {["relevance", "newest", "trending"].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option)
                            setIsDropdownOpen(false)
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-white/10 text-sm text-foreground/70 hover:text-foreground transition-colors"
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="mb-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <Input
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/30 border-white/20 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20"
                />
              </div>

              {/* Ideas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredIdeas.map((idea) => (
                  <Card
                    key={idea.id}
                    className="p-6 bg-gradient-to-br from-card/40 to-card/20 border border-white/10 hover:border-primary/30 transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {idea.title}
                    </h4>
                    <p className="text-sm text-foreground/60 mb-6 line-clamp-3">{idea.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={idea.avatar || "/placeholder.svg"}
                          alt={idea.creator}
                          className="w-10 h-10 rounded-full border border-white/20"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{idea.creator}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${idea.difficultyColor}`}>
                        {idea.difficulty}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredIdeas.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-foreground/60">No ideas found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
