"use client"

import { useState, useEffect } from "react"

interface FrequencyDisplayProps {
  frequency: string
}

export default function FrequencyDisplay({ frequency }: FrequencyDisplayProps) {
  const [isTransmitting, setIsTransmitting] = useState(false)

  useEffect(() => {
    // Simulate random transmissions
    const interval = setInterval(() => {
      setIsTransmitting(Math.random() > 0.7)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="text-xs text-green-500 font-mono mb-1">FREQ</div>
          <div className="bg-black border border-green-900 rounded px-3 py-2 font-mono text-2xl tracking-widest text-green-400 w-36 text-center">
            {frequency}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xs text-green-500 font-mono mb-1">MODE</div>
          <div className="bg-black border border-green-900 rounded px-3 py-2 font-mono text-lg tracking-widest text-green-400 w-24 text-center">
            UHF
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="text-xs text-green-500 font-mono mb-1">STATUS</div>
          <div className="flex items-center gap-2 bg-black border border-green-900 rounded px-3 py-2 w-32 justify-center">
            <div
              className={`h-3 w-3 rounded-full ${isTransmitting ? "bg-red-500 animate-pulse" : "bg-green-500"}`}
            ></div>
            <span className="font-mono text-sm">{isTransmitting ? "TX" : "RX"}</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xs text-green-500 font-mono mb-1">BAND</div>
          <div className="bg-black border border-green-900 rounded px-3 py-2 font-mono text-lg tracking-widest text-green-400 w-24 text-center">
            {Number.parseFloat(frequency) > 100
              ? "2M"
              : Number.parseFloat(frequency) > 30
                ? "6M"
                : Number.parseFloat(frequency) > 14
                  ? "20M"
                  : "40M"}
          </div>
        </div>
      </div>
    </div>
  )
}
