"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Lightbulb, Send } from "lucide-react"
import { submitIdea } from "@/actions/submit-idea"

const categories = [
    "DeFi Agents",
    "NFT Agents",
    "DAO Tools",
    "Gaming",
    "Social",
    "Infrastructure",
    "Other",
]

export default function SubmitIdeaForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 shadow-lg shadow-primary/20">
                    <Lightbulb className="w-8 h-8 text-background" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Submit Your Idea</h1>
                <p className="text-foreground/60 text-lg">
                    Share your vision with the 0rca community and find collaborators
                </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-2xl">
                <form action={async (formData) => {
                    setIsLoading(true)
                    const result = await submitIdea(formData)
                    setIsLoading(false)
                    if (result.success) {
                        router.push("/ideas")
                    } else {
                        alert(result.message)
                    }
                }} className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="authorName" className="block text-sm font-medium text-foreground mb-2">
                                Your Name
                            </label>
                            <Input
                                id="authorName"
                                name="authorName"
                                placeholder="John Doe"
                                required
                                className="bg-background/50 border-white/10 focus:border-primary/50"
                            />
                        </div>
                        <div>
                            <label htmlFor="authorEmail" className="block text-sm font-medium text-foreground mb-2">
                                Email (Optional)
                            </label>
                            <Input
                                id="authorEmail"
                                name="authorEmail"
                                type="email"
                                placeholder="john@example.com"
                                className="bg-background/50 border-white/10 focus:border-primary/50"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                            Idea Title
                        </label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="e.g., AI-Powered Yield Optimizer"
                            required
                            className="bg-background/50 border-white/10 focus:border-primary/50"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                            Category
                        </label>
                        <Select name="category" required>
                            <SelectTrigger className="bg-background/50 border-white/10 focus:border-primary/50">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                            Description
                        </label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Describe your idea in detail..."
                            required
                            rows={6}
                            className="bg-background/50 border-white/10 focus:border-primary/50 resize-none"
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
                                Submitting...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                Submit Idea
                            </div>
                        )}
                    </Button>
                </form>
            </Card>
        </section>
    )
}
