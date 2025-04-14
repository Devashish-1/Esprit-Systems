"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    type: "student",
    name: "Ayush Kumar",
    role: "Computer Science Student",
    image: "/placeholder.jpg",
    quote:
      "Built 3 websites during my internship, landed a job at XYZ Tech! The mentorship and hands-on experience were invaluable for my career.",
    rating: 5,
  },
  {
    id: 2,
    type: "business",
    name: "Neha Sharma",
    role: "Owner, Spice Paradise Restaurant",
    image: "/placeholder.jpg",
    quote:
      "Sales doubled after partnering with SBBSU! Their team created an online ordering system that transformed our restaurant business during the pandemic.",
    rating: 5,
  },
  {
    id: 3,
    type: "student",
    name: "Rahul Singh",
    role: "Digital Marketing Student",
    image: "/placeholder.jpg",
    quote:
      "Through the program, I managed social media campaigns for local businesses. The real-world experience was far more valuable than textbook learning.",
    rating: 4,
  },
  {
    id: 4,
    type: "business",
    name: "Priya Patel",
    role: "Founder, HandCrafted Boutique",
    image: "/placeholder.jpg",
    quote:
      "The students helped us set up an e-commerce store and digital marketing strategy. Our products now reach customers nationwide instead of just locally.",
    rating: 5,
  },
]

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl bg-gray-800/50 p-6 shadow-xl">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <motion.div className="relative" variants={slideVariants} initial="hidden" animate="visible">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.jpg"}
                      alt={testimonials[activeIndex].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center">
                    {testimonials[activeIndex].type === "student" ? (
                      <span className="text-blue-500 text-xl font-bold">S</span>
                    ) : (
                      <span className="text-yellow-500 text-xl font-bold">B</span>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-3">
                <div className="flex items-start mb-4">
                  <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0 transform -scale-x-100" />
                </div>
                <motion.p
                  className="text-lg text-gray-300 italic mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {testimonials[activeIndex].quote}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1)
                setActiveIndex(index)
                setAutoplay(false)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? "bg-blue-500 w-6" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default TestimonialCarousel
