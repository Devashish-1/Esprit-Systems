"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"

const StatCard = ({ icon, count, text, suffix = "" }) => {
  const [isInView, setIsInView] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-center mb-4">{icon}</div>
      <div>
        <h3 className="text-4xl font-bold mb-1 flex items-end">
          {isInView ? (
            <CountUp start={0} end={count} duration={2.5} separator="," decimals={0} decimal="." />
          ) : (
            <span>0</span>
          )}
          <span className="ml-1">{suffix}</span>
        </h3>
        <p className="text-gray-300">{text}</p>
      </div>
    </motion.div>
  )
}

export default StatCard
