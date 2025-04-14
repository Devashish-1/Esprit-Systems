"use client"
import { motion } from "framer-motion"
import { Code, Megaphone, Settings, Users } from "lucide-react"

const ServiceCard = ({ title, description, icon, delay = 0, color = "blue", animation = "slide-up" }) => {
  // Define color variants
  const colorVariants = {
    blue: {
      bg: "bg-blue-600/10",
      border: "border-blue-600/20",
      text: "text-blue-400",
      shadow: "shadow-blue-500/5",
      icon: "text-blue-500",
    },
    yellow: {
      bg: "bg-yellow-600/10",
      border: "border-yellow-600/20",
      text: "text-yellow-400",
      shadow: "shadow-yellow-500/5",
      icon: "text-yellow-500",
    },
    teal: {
      bg: "bg-teal-600/10",
      border: "border-teal-600/20",
      text: "text-teal-400",
      shadow: "shadow-teal-500/5",
      icon: "text-teal-500",
    },
    orange: {
      bg: "bg-orange-600/10",
      border: "border-orange-600/20",
      text: "text-orange-400",
      shadow: "shadow-orange-500/5",
      icon: "text-orange-500",
    },
  }

  // Define animation variants
  const getAnimationVariant = () => {
    switch (animation) {
      case "slide-right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "slide-left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "slide-up":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "slide-down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "zoom":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay } },
        }
      case "rotate":
        return {
          hidden: { rotate: -5, opacity: 0 },
          visible: { rotate: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
        }
    }
  }

  // Get icon component
  const getIcon = () => {
    switch (icon) {
      case "code":
        return <Code className={`h-10 w-10 ${colorVariants[color].icon}`} />
      case "megaphone":
        return <Megaphone className={`h-10 w-10 ${colorVariants[color].icon}`} />
      case "settings":
        return <Settings className={`h-10 w-10 ${colorVariants[color].icon}`} />
      case "users":
        return <Users className={`h-10 w-10 ${colorVariants[color].icon}`} />
      default:
        return <Code className={`h-10 w-10 ${colorVariants[color].icon}`} />
    }
  }

  // Get animation hover effect
  const getHoverAnimation = () => {
    switch (animation) {
      case "slide-right":
      case "slide-left":
        return { x: 5, transition: { duration: 0.2 } }
      case "slide-up":
      case "slide-down":
        return { y: -5, transition: { duration: 0.2 } }
      case "zoom":
        return { scale: 1.05, transition: { duration: 0.2 } }
      case "rotate":
        return { rotate: 2, transition: { duration: 0.2 } }
      default:
        return { y: -5, transition: { duration: 0.2 } }
    }
  }

  return (
    <motion.div
      className={`p-6 rounded-xl border ${colorVariants[color].border} ${colorVariants[color].bg} ${colorVariants[color].shadow} shadow-xl backdrop-blur-sm h-full`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={getAnimationVariant()}
      whileHover={getHoverAnimation()}
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className={`text-xl font-bold mb-2 ${colorVariants[color].text}`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ServiceCard
