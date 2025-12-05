"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MejiwaSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="mejiwa" className="relative min-h-screen bg-[#FFD500] flex items-center justify-center py-20 px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl w-full text-center"
      >
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00296B] mb-6"
        >
          Tenangkan Jiwa Kamu!
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-md lg:text-xl text-[#00296B] mb-12 max-w-3xl mx-auto font-medium"
        >
          Ajak jiwa kamu bermain dengan minji, bermain di taman bunga penuh dengan kebahagiaan
        </motion.p>
        <motion.div
          variants={imageVariants}
          className="relative mb-10"
        >
          <div className="relative mx-auto max-w-xl bg-white rounded-3xl p-3 shadow-2xl">
            <div className="relative aspect-[16/7] w-full rounded-2xl overflow-hidden">
              <Image
                src="/Mejibanner.png"
                alt="Kucing Miji"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
        {/* Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(0, 41, 107, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-[#00296B] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Mulai Sekarang
        </motion.button>
      </motion.div>
    </section>
  )
}
