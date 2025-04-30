"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Radio } from "lucide-react"

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const datas = new FormData(e.currentTarget);
    datas.append("access_key", "9f967760-6e3f-457e-84ce-16b630d5a90b");
    const object = Object.fromEntries(datas);
    const json = JSON.stringify(object);
    setIsSubmitting(true)
    
    // Simulate form submission
    const res = await fetch('https://api.web3forms.com/submit', {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: json
    }).then((res) => res.json())

    toast({
      title: "Message sent!",
      description: "QSL! Thanks for your message. 73's",
    })

    setFormData({
      name: "",
      email: "",
      message: "",
    })
    setIsSubmitting(false)

    if (onSuccess) {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-2 font-mono">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-green-500 mb-1">
          <Radio className="h-3 w-3" />
          <span>YOUR CALLSIGN/NAME</span>
        </div>
        <Input
          id="callsign"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Callsign or Name"
          required
          className="bg-black/30 border-green-900 focus:border-green-500 text-green-400 placeholder:text-green-900"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-green-500 mb-1">
          <Radio className="h-3 w-3" />
          <span>EMAIL QTH</span>
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="bg-black/30 border-green-900 focus:border-green-500 text-green-400 placeholder:text-green-900"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-green-500 mb-1">
          <Radio className="h-3 w-3" />
          <span>MESSAGE</span>
        </div>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          required
          className="min-h-[120px] bg-black/30 border-green-900 focus:border-green-500 text-green-400 placeholder:text-green-900"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-700 hover:bg-green-600 text-white font-mono"
      >
        {isSubmitting ? "TRANSMITTING..." : "SEND TRANSMISSION"}
      </Button>
    </form>
  )
}
