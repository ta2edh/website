"use client"

import { useState, useEffect } from "react"
import { X, Radio, Wifi, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"
import FrequencyDisplay from "@/components/frequency-display"
import SignalMeter from "@/components/signal-meter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faWalkieTalkie,
  faCode,
  faCodeBranch,
  faEnvelope
 } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [frequency, setFrequency] = useState("430.025")

  // Simulate changing frequencies
  useEffect(() => {
    const interval = setInterval(() => {
      const freqs = ["430.025", "430.350", "430.875", "431.125", "431.500", "432.025", "432.450", "432.975", "433.600", "434.125", "434.775", "435.000", "435.625", "436.050", "436.475", "437.000", "437.425", "438.050", "438.875", "439.725"];

      setFrequency(freqs[Math.floor(Math.random() * freqs.length)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1219] text-green-400 flex flex-col">
      {/* Radio-style header */}
      <header className="bg-[#050a0f] border-b border-green-900/40 py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-green-500" />
            <span className="font-mono text-lg font-bold tracking-wider">TA2EDH</span>
          </div>
          <div className="flex items-center gap-3">
            <SignalMeter />
            <span className="font-mono text-xs border border-green-800 bg-black/50 px-2 py-1 rounded">ON AIR</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8 flex flex-col justify-center sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto w-full">
          {/* Radio display panel 
          <div className="bg-[#050a0f] border border-green-900/60 rounded-lg p-4 mb-6 shadow-lg shadow-green-900/10">
            <FrequencyDisplay frequency={frequency} />
          </div>*/}

          <div className="grid gap-6 md:grid-cols-2 w-full">
            {/* Left Column - Intro */}
            <div className="bg-[#050a0f] border border-green-900/60 rounded-lg p-6 space-y-5 shadow-lg shadow-green-900/10 w-full sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <h2 className="font-mono text-lg font-bold uppercase tracking-wider">Operator Info</h2>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 font-mono">
                  <span className="text-white">ERDEM HACISALIHOGLU</span><span className="text-gray-500 ml-2">|</span><span className="text-green-500 ml-2">TA2EDH</span>
                </h1>
                <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon icon={faWalkieTalkie} />
                  <p className="text-sm text-green-300 font-mono">Radio Amateur</p>
                  <FontAwesomeIcon icon={faCode} />
                  <p className="text-sm text-green-300 font-mono">Software Developer</p>
                </div>
                <p className="text-white/80 border-l-2 border-green-500 pl-3 py-1">
                  Undergraduate studying Computer Science and Applied Physics, with a strong interest in hamradio, PCB
                  design, web and system programming.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-green-700 hover:bg-green-600 text-white font-mono"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> QSO REQUEST
                </Button>
                <Button onClick={() => window.location.href="https://github.com/ta2edh"}variant="outline" className="border-green-800 hover:bg-green-900/50 text-green-400 font-mono">
                <FontAwesomeIcon icon={faCodeBranch} /> PROJECTS
                </Button>
              </div>

              <div className="pt-2 border-t border-green-900/40">
                <p className="text-xs text-green-400/70 font-mono">
                  EMAIL QSL:{" "}
                  <a href="mailto:erdem@ta2edh.com" className="text-green-400 hover:underline">
                    erdem@ta2edh.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="bg-[#050a0f] border border-green-900/60 rounded-lg p-6 shadow-lg shadow-green-900/10 w-full sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <h2 className="font-mono text-lg font-bold uppercase tracking-wider">Networks</h2>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 border-t border-green-900/40 bg-[#050a0f]">
        <div className="container mx-auto px-4 text-center text-xs text-green-500/60 font-mono">
          <span className="inline-block px-2 py-1 border border-green-900/40 rounded bg-black/30">
            TA2EDH © {new Date().getFullYear()} | 73's
          </span>
        </div>
      </footer>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#050a0f] border-green-900/60 text-green-400">
          <DialogHeader>
            <DialogTitle className="text-xl font-mono font-semibold flex items-center">
              <Radio className="mr-2 h-5 w-5 text-green-500" />
              QSO REQUEST
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-green-500 hover:text-green-400 hover:bg-green-900/30"
              onClick={() => setIsContactOpen(false)}
            >
              {/*<X className="h-4 w-4" />*/}
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
