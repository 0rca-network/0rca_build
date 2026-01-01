"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import IdeasContent from "@/components/ideas-content"

export default function IdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("relevance")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <IdeasContent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Footer />
    </main>
  )
}
