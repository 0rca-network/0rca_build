"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { hackathons } from "@/lib/hackathons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Trophy, Calendar, DollarSign, Users, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function HackathonDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const slug = params.slug as string
    const hackathon = hackathons.find((h) => h.slug === slug)

    const [email, setEmail] = useState("")
    const [registeredEmail, setRegisteredEmail] = useState<string | null>(null)
    const [isRegistering, setIsRegistering] = useState(false)
    const [registrationSuccess, setRegistrationSuccess] = useState(false)

    useEffect(() => {
        const storedEmail = localStorage.getItem("0rca_builder_email")
        if (storedEmail) {
            setRegisteredEmail(storedEmail)
        }
    }, [])

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsRegistering(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        localStorage.setItem("0rca_builder_email", email)
        setRegisteredEmail(email)
        setRegistrationSuccess(true)
        setIsRegistering(false)
    }

    const handleAutoRegister = async () => {
        setIsRegistering(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        setRegistrationSuccess(true)
        setIsRegistering(false)
    }

    if (!hackathon) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Hackathon Not Found</h1>
                    <Button onClick={() => router.push("/")}>Go Home</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <BackgroundBeams className="opacity-30" />

            <div className="relative z-10 container mx-auto px-4 py-12">
                <Button
                    variant="ghost"
                    onClick={() => router.push("/#hackathons")}
                    className="mb-8 hover:bg-white/10"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Hackathons
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <Badge
                                    className={`${hackathon.status === "Live"
                                            ? "bg-accent/20 text-accent border border-accent/30"
                                            : hackathon.status === "Upcoming"
                                                ? "bg-primary/20 text-primary border border-primary/30"
                                                : "bg-foreground/10 text-foreground/60 border border-foreground/20"
                                        }`}
                                >
                                    {hackathon.status}
                                </Badge>
                                <span className="text-foreground/60 flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {hackathon.date}
                                </span>
                                {hackathon.location && (
                                    <span className="text-foreground/60 flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        {hackathon.location}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                {hackathon.title}
                            </h1>
                            <p className="text-xl text-foreground/60 mb-8">
                                {hackathon.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                <Card className="p-6 bg-white/5 border-white/10">
                                    <div className="flex items-center gap-3 mb-2 text-primary">
                                        <DollarSign className="w-5 h-5" />
                                        <span className="font-semibold">Prize Pool</span>
                                    </div>
                                    <p className="text-2xl font-bold">{hackathon.prizePool}</p>
                                </Card>
                                <Card className="p-6 bg-white/5 border-white/10">
                                    <div className="flex items-center gap-3 mb-2 text-accent">
                                        <Users className="w-5 h-5" />
                                        <span className="font-semibold">Participants</span>
                                    </div>
                                    <p className="text-2xl font-bold">{hackathon.participants}</p>
                                </Card>
                            </div>

                            {hackathon.about && (
                                <section className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                                    <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                                        {hackathon.about}
                                    </p>
                                </section>
                            )}

                            {hackathon.requirements && hackathon.requirements.length > 0 && (
                                <section className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                        {hackathon.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {hackathon.schedule && hackathon.schedule.length > 0 && (
                                <section className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4">Schedule</h2>
                                    <div className="space-y-4">
                                        {hackathon.schedule.map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                                <div className="w-24 flex-shrink-0 font-mono text-primary">{item.time}</div>
                                                <div className="font-medium">{item.event}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {hackathon.winners && hackathon.winners.length > 0 && (
                                <section className="mb-12">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Trophy className="w-6 h-6 text-yellow-500" />
                                        Winners
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {hackathon.winners.map((winner, index) => (
                                            <Card key={index} className="p-6 bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/20">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                    <div>
                                                        <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 mb-2">
                                                            {winner.prize}
                                                        </Badge>
                                                        <h3 className="text-xl font-bold">{winner.name}</h3>
                                                        <p className="text-foreground/60">{winner.description}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {hackathon.gallery && hackathon.gallery.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {hackathon.gallery.map((image, index) => (
                                            <div key={index} className="aspect-video rounded-xl overflow-hidden border border-white/10 group">
                                                <img
                                                    src={image}
                                                    alt={`Hackathon moment ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="p-6 border-white/10 bg-card/50 backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-6">Registration</h3>

                                {hackathon.status === "Live" ? (
                                    <div className="space-y-6">
                                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm">
                                            <div className="flex items-center gap-2 font-medium text-primary mb-1">
                                                <Clock className="w-4 h-4" />
                                                Timeline Update
                                            </div>
                                            <p className="text-foreground/80">{hackathon.timeline}</p>
                                        </div>

                                        {registrationSuccess ? (
                                            <div className="text-center py-6 bg-accent/10 rounded-xl border border-accent/20">
                                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                                                    <CheckCircle className="w-6 h-6 text-accent" />
                                                </div>
                                                <h4 className="font-bold text-lg mb-1">You're Registered!</h4>
                                                <p className="text-sm text-foreground/60">Check your email for next steps.</p>
                                            </div>
                                        ) : registeredEmail ? (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-sm text-foreground/80 bg-white/5 p-3 rounded-lg">
                                                    <Users className="w-4 h-4 text-primary" />
                                                    <span>Recognized as <strong>{registeredEmail}</strong></span>
                                                </div>
                                                <Button
                                                    className="w-full bg-gradient-to-r from-primary to-accent h-12 text-lg font-semibold"
                                                    onClick={handleAutoRegister}
                                                    disabled={isRegistering}
                                                >
                                                    {isRegistering ? "Registering..." : "One-Click Register"}
                                                </Button>
                                                <button
                                                    onClick={() => setRegisteredEmail(null)}
                                                    className="text-xs text-foreground/40 hover:text-foreground/60 w-full text-center"
                                                >
                                                    Not you? Switch account
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleRegister} className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Email Address</label>
                                                    <Input
                                                        placeholder="Enter your email"
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="bg-background/50"
                                                    />
                                                </div>
                                                <Button
                                                    type="submit"
                                                    className="w-full bg-gradient-to-r from-primary to-accent h-12 text-lg font-semibold"
                                                    disabled={isRegistering}
                                                >
                                                    {isRegistering ? "Registering..." : "Register Now"}
                                                </Button>
                                            </form>
                                        )}
                                    </div>
                                ) : hackathon.status === "Upcoming" ? (
                                    <div className="text-center py-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                                            <Calendar className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold mb-2">Coming Soon</h4>
                                        <p className="text-sm text-foreground/60 mb-6">Registration opens soon. Stay tuned!</p>
                                        <Button variant="outline" className="w-full">Notify Me</Button>
                                    </div>
                                ) : (
                                    <div className="text-center py-6">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                                            <AlertCircle className="w-6 h-6 text-foreground/40" />
                                        </div>
                                        <h4 className="font-bold text-foreground/60 mb-2">Registrations Closed</h4>
                                        <p className="text-sm text-foreground/40">This event has ended.</p>
                                    </div>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
