import Header from "@/components/header"
import Hero from "@/components/hero"
import TheoryBlocks from "@/components/theory-blocks"
import BlogSection from "@/components/blog-section"
import HackathonsSection from "@/components/hackathons-section"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"
import ParallaxBackground from "@/components/parallax-background"

import { client } from "@/lib/sanity"

export const revalidate = 60 // Revalidate every 60 seconds

async function getData() {
  const landingPageQuery = `*[_type == "landingPage"][0]`
  const hackathonsQuery = `*[_type == "hackathon"] | order(dateRange desc)`
  const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc)`

  console.log("Sanity Config Check:", {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  })

  try {
    const [landingPage, hackathons, blogPosts] = await Promise.all([
      client.fetch(landingPageQuery),
      client.fetch(hackathonsQuery),
      client.fetch(blogPostsQuery),
    ])
    return { landingPage, hackathons, blogPosts }
  } catch (error) {
    console.error("Sanity Fetch Error:", error)
    return { landingPage: null, hackathons: [], blogPosts: [] }
  }
}

export default async function Home() {
  const { landingPage, hackathons, blogPosts } = await getData()

  return (
    <main className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <ParallaxBackground />
      <Header />
      <Hero
        headline={landingPage?.heroHeadline}
        description={landingPage?.heroDescription}
      />
      <TheoryBlocks blocks={landingPage?.theoryBlocks} />
      <BlogSection posts={blogPosts} />
      <HackathonsSection hackathons={hackathons} />
      <RegistrationForm />
      <Footer />
    </main>
  )
}

