"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Trophy, Calendar, Users, DollarSign, CheckCircle, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { hackathons } from "@/lib/hackathons"

export default function HackathonsSection() {
  const router = useRouter()
  const [selectedHackathon, setSelectedHackathon] = useState<typeof hackathons[0] | null>(null)
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

  const handleHackathonClick = (hackathon: typeof hackathons[0]) => {
    if (hackathon.status === "Completed") {
      router.push(`/hackathons/${hackathon.slug}`)
    } else {
      setSelectedHackathon(hackathon)
    }
  }

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

  const resetModal = () => {
    setSelectedHackathon(null)
    setRegistrationSuccess(false)
    setEmail(registeredEmail || "")
  }

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Active & Past Hackathons</h2>
      <p className="text-foreground/60 mb-12">Compete, build, and win big with the 0rca community</p>

      <div className="space-y-4">
        {hackathons.map((hackathon) => (
          <Card
            key={hackathon.id}
            onClick={() => handleHackathonClick(hackathon)}
            className="group p-6 bg-gradient-to-r from-card to-card/50 border border-white/10 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
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
                {hackathon.status === "Completed" ? "View Results" : "View Details"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedHackathon} onOpenChange={(open) => !open && resetModal()}>
        <DialogContent className="max-w-md bg-card border-white/10">
          {selectedHackathon && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    className={`${selectedHackathon.status === "Live"
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : selectedHackathon.status === "Upcoming"
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-foreground/10 text-foreground/60 border border-foreground/20"
                      }`}
                  >
                    {selectedHackathon.status}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedHackathon.title}</DialogTitle>
                <DialogDescription className="text-foreground/60">
                  {selectedHackathon.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-foreground/60 mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Prize Pool</span>
                    </div>
                    <p className="font-semibold">{selectedHackathon.prizePool}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 text-foreground/60 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Timeline</span>
                    </div>
                    <p className="font-semibold text-sm">{selectedHackathon.date}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-sm">
                  <p className="font-medium text-primary mb-1">Timeline Update</p>
                  <p className="text-foreground/80">{selectedHackathon.timeline}</p>
                </div>

                {selectedHackathon.status === "Live" && (
                  <div className="pt-4 border-t border-white/10">
                    {registrationSuccess ? (
                      <div className="text-center py-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">You're Registered!</h4>
                        <p className="text-sm text-foreground/60">Check your email for next steps.</p>
                      </div>
                    ) : registeredEmail ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-foreground/80 bg-white/5 p-3 rounded-lg">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Recognized as <strong>{registeredEmail}</strong></span>
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-primary to-accent"
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
                      <form onSubmit={handleRegister} className="space-y-3">
                        <h4 className="font-semibold">Join this Hackathon</h4>
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-background/50"
                        />
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-primary to-accent"
                          disabled={isRegistering}
                        >
                          {isRegistering ? "Registering..." : "Register Now"}
                        </Button>
                      </form>
                    )}
                  </div>
                )}

                {selectedHackathon.status === "Upcoming" && (
                  <div className="pt-4 border-t border-white/10 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold">Coming Soon</h4>
                    <p className="text-sm text-foreground/60 mb-4">Registration opens soon. Stay tuned!</p>
                    <Button variant="outline" className="w-full">Notify Me</Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
