"use client"
import { motion } from "framer-motion"


export default function SehatJiwaSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  const catVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="sehat-jiwa" className="relative bg-[#FFD500] py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Border main isi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-[#FFD500] rounded-t-[60px] border-4 border-[#00296B] py-16 px-8 md:px-16" >
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="text-center">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00296B] mb-4"
              >
                Sehat Jiwa, Bahagia Raga
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl lg:text-2xl text-[#00296B] mb-8 font-medium"
              >
                Apa Kabar Perasaanmu Hari Ini?
              </motion.p>
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(0, 41, 107, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#00296B] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Mulai Diagnosa
              </motion.button>
            </div>
          </div>
        </motion.div>
        <div className="h-4 bg-[#00296B] w-full" />
      </div>
    </section>
  )
}
