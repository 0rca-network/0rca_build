import Header from "@/components/header"
import Hero from "@/components/hero"
import TheoryBlocks from "@/components/theory-blocks"
import BlogSection from "@/components/blog-section"
import HackathonsSection from "@/components/hackathons-section"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <TheoryBlocks />
      <BlogSection />
      <HackathonsSection />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
