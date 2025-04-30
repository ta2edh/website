"use client"

import { useState, useEffect } from "react"

export default function SignalMeter() {
  const [signalLevel, setSignalLevel] = useState(5)

  useEffect(() => {
    // Simulate changing signal levels
    const interval = setInterval(() => {
      setSignalLevel(Math.floor(Math.random() * 9) + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
        <div
          key={level}
          className={`h-4 w-1 ${level <= signalLevel ? "bg-green-500" : "bg-green-900/30"}`}
          style={{ height: `${level * 2 + 4}px` }}
        ></div>
      ))}
    </div>
  )
}
