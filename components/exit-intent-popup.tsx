"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("exitPopupShown")
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <Card className="max-w-lg w-full bg-white border-[#e8e4dd] shadow-2xl">
        <CardContent className="p-6 sm:p-8 relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-[#6b5d52] hover:text-[#3d3530] text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-[#3d3530]">Wait! Before you go...</h2>
            <p className="text-base sm:text-lg text-[#6b5d52] mb-6 leading-relaxed">
              Your parents' stories are priceless. Every day that passes, precious memories fade.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#c97d5d] mb-6">
              Black Friday Special: Save 60% • Only until December 2nd
            </p>

            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-[#c97d5d] mt-1">✓</span>
                <span className="text-sm sm:text-base text-[#6b5d52]">Record their voice, preserve their wisdom</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c97d5d] mt-1">✓</span>
                <span className="text-sm sm:text-base text-[#6b5d52]">
                  AI persona lets future generations hear their stories
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c97d5d] mt-1">✓</span>
                <span className="text-sm sm:text-base text-[#6b5d52]">One-time payment, lifetime access</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 rounded-full bg-[#c97d5d] hover:bg-[#b76d4d] text-white"
                onClick={() => {
                  setIsVisible(false)
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                See Black Friday Pricing
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="flex-1 rounded-full text-[#6b5d52]"
                onClick={() => setIsVisible(false)}
              >
                Continue browsing
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
