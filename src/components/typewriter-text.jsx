"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TypewriterText = ({ texts, delay = 3000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [currentKey, setCurrentKey] = useState(0)

  useEffect(() => {
    let timeout

    const handleTyping = () => {
      const fullText = texts[currentIndex]

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))

        if (currentText.length === fullText.length) {
          // Wait before starting to delete
          timeout = setTimeout(() => setIsDeleting(true), delay)
          return
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))

        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
          setCurrentKey((prev) => prev + 1) // Change key to trigger animation
          return
        }
      }

      // Set typing speed: faster when deleting, varied when typing
      const speed = isDeleting ? 80 : Math.random() * 50 + 100
      setTypingSpeed(speed)
    }

    timeout = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts, delay, typingSpeed])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentKey}
        className={className}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block ml-1 w-0.5 h-6 bg-current align-text-bottom"
        ></motion.span>
      </motion.span>
    </AnimatePresence>
  )
}

export default TypewriterText
