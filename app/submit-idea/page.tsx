import Header from "@/components/header"
import Footer from "@/components/footer"
import SubmitIdeaForm from "@/components/submit-idea-form"

export default function SubmitIdeaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <SubmitIdeaForm />
            <Footer />
        </main>
    )
}
