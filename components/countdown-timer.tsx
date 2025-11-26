"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set end date to December 2nd, 2025 at midnight
    const endDate = new Date("2025-12-02T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = endDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 text-center">
      <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#c97d5d]">{timeLeft.days}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Days</div>
      </div>
      <span className="text-xl sm:text-2xl text-[#c97d5d]">:</span>
      <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#c97d5d]">{timeLeft.hours}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Hours</div>
      </div>
      <span className="text-xl sm:text-2xl text-[#c97d5d]">:</span>
      <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#c97d5d]">{timeLeft.minutes}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Minutes</div>
      </div>
      <span className="text-xl sm:text-2xl text-[#c97d5d]">:</span>
      <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px]">
        <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#c97d5d]">{timeLeft.seconds}</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}
