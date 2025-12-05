"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Linkedin, Mail, } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
  ]

  const features = [
    { title: "Suara Miji" },
    { title: "Diagnosa Kesehatan Mental" },
    { title: "Cerita Miji" },
  ]

  return (
    <footer className="bg-[#001a4d] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-[#FFD500] mb-4">MejiWa</h3>
            <p className="text-gray-300 mb-4">
              Platform kesehatan mental yang mendukung Anda menjalani hari dengan lebih baik.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#FFD500]" />
                <span className="text-gray-300">mejiwa@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Fitur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Fitur Utama</h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-[#FFD500] transition-colors">
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sosial Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Ikuti Kami</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#003d99] p-3 rounded-full hover:bg-[#FFD500] hover:text-[#001a4d] transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#003d99] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2025 MejiWa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#FFD500] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD500] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
