"use client"
import { motion } from "framer-motion"
import { Clock, Video, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const CourseCard = ({ title, description, duration, format, image, animationType = "fade" }) => {
  // Define animation variants
  const getAnimationVariants = () => {
    switch (animationType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } },
        }
      case "slide":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
        }
      case "zoom":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
        }
      case "flip":
        return {
          hidden: { rotateY: 90, opacity: 0 },
          visible: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } },
        }
    }
  }

  // Get hover animation
  const getHoverAnimation = () => {
    switch (animationType) {
      case "fade":
        return { y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
      case "slide":
        return { x: 5, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
      case "zoom":
        return { scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
      case "flip":
        return { rotateY: 5, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
      default:
        return { y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
    }
  }

  return (
    <motion.div
      className="bg-gray-800/70 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={getAnimationVariants()}
      whileHover={getHoverAnimation()}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-1">{description}</p>

        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Video className="h-4 w-4 mr-2" />
            <span>{format}</span>
          </div>
        </div>

        <Button className="mt-auto bg-blue-600 hover:bg-blue-700 w-full">
          Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export default CourseCard
