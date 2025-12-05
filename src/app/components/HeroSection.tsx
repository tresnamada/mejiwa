"use client"

import { motion, Variants } from "framer-motion"
import { ArrowDown } from "lucide-react"
import PawPrint from "./Paw-meong"

export default function HeroSection() {
  const pawPositions = [
    { left: "8%", top: "15%", delay: 0 },
    { left: "10%", top: "35%", delay: 0.2 },
    { left: "85%", top: "20%", delay: 0.4 },
    { right: "8%", top: "40%", delay: 0.6 },
    { left: "12%", top: "55%", delay: 0.8 },
    { right: "10%", top: "60%", delay: 1 },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-[#FFD500] flex flex-col items-center justify-center overflow-hidden">
      {pawPositions.map((pos, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: pos.delay, duration: 0.6 }}
          className="absolute"
          style={{
            left: pos.left,
            right: pos.right,
            top: pos.top,
          }}
        >
          <PawPrint />
        </motion.div>
      ))}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
          Selamat Datang Sahabat!
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#00296B] mb-8 font-medium">
          Yuk kita usahakan kesehatan mental yang lebih baik!
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-[#00296B] font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow mb-12"
        >
          Mulai Sekarang
        </motion.button>

        {/* Arrow bawah */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-8"
        >
          <ArrowDown size={32} className="text-[#00296B] mx-auto opacity-70" />
        </motion.div>
      </motion.div>

      {/* waspada gelombang */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto" style={{ display: "block" }}>
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill="#00296B" opacity="0.1" />
        </svg>
      </div>
    </div>
  )
}
