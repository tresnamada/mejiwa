"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, Eye, MessageCircle, Camera } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"

interface ChatMessage {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
  emotion?: string
}

export default function CeritaTenjin() {
  const [inputMessage, setInputMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  // Simple send message handler (design only)
  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Terima kasih sudah berbagi dengan saya. Saya di sini untuk mendengarkan Anda.",
        sender: "ai",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#FFD500] relative overflow-hidden">
      <Navbar />
      <div className="mt-24 mb-10">
        <motion.div 
          className="container mx-auto px-4 max-w-7xl" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
              Cerita Miji 
            </h1>
            <p className="text-lg text-[#00296B]/70 max-w-2xl mx-auto">
              Ceritakan perasaan Anda kepada TenJin, kami siap mendengarkan
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Camera & Status Emosi */}
            <div className="lg:col-span-1 space-y-6">
              {/* Camera Placeholder */}
              <motion.div variants={itemVariants}>
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200/50 bg-white/50">
                    <h3 className="text-[#00296B] font-semibold text-lg flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      Camera
                    </h3>
                  </div>

                  <div className="p-4">
                    <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                      {/* Camera Placeholder Content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/60">
                          <Camera className="w-16 h-16 mx-auto mb-3 opacity-40" />
                          <p className="text-sm font-medium">Kamera tidak aktif</p>
                          <p className="text-xs mt-1 opacity-70">Placeholder untuk integrasi camera</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Status Emosi Card */}
              <motion.div variants={itemVariants}>
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200/50 bg-white/50">
                    <h3 className="text-[#00296B] font-semibold text-lg flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Status Emosi
                    </h3>
                  </div>

                  <div className="p-6">
                    {/* Current Emotion Display */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="mb-6"
                      >
                        <p className="text-center text-[#00296B]/50 text-sm">Belum ada data emosi</p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Emotion History */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-[#00296B] mb-3">Riwayat Emosi</h4>
                      <p className="text-center text-[#00296B]/50 text-xs">Belum ada riwayat</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Miji Mascot */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 py-8">
                {/* Miji Mascot */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [-5, 5, -5],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 relative">
                    <Image 
                      src="/Miji.svg" 
                      alt="Miji" 
                      width={320}
                      height={320}
                      className="w-full h-full object-contain drop-shadow-2xl" 
                    />
                  </div>
                </motion.div>

                {/* Message Display */}
                {chatMessages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-lg w-full px-4"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-[#00296B]/20">
                      <p className="text-[#00296B] text-center leading-relaxed text-lg">
                        {chatMessages[chatMessages.length - 1].text}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Input Section */}
                <div className="w-full max-w-lg px-4 space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Ceritakan perasaan Anda..."
                      className="flex-1 px-5 py-4 border-2 border-[#00296B]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00296B] focus:border-transparent text-[#00296B] bg-white/90 backdrop-blur-sm placeholder-[#00296B]/50 font-medium text-lg"
                    />
                    <motion.button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      whileHover={{ scale: inputMessage.trim() ? 1.05 : 1 }}
                      whileTap={{ scale: inputMessage.trim() ? 0.95 : 1 }}
                      className={`px-6 py-4 rounded-xl flex items-center justify-center transition-all shadow-lg ${
                        !inputMessage.trim() || isTyping
                          ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                          : "bg-[#00296B] text-white hover:bg-[#00296B]/90"
                      }`}
                    >
                      <Send className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#00296B] hover:bg-[#00296B]/90 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-colors shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                    Mulai Scan
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Chat History & Analysis */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Chat History */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200/50 bg-white/50">
                  <h3 className="text-[#00296B] font-semibold text-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Riwayat Percakapan
                  </h3>
                </div>

                <div className="h-96 overflow-y-auto p-4 space-y-3">
                  {chatMessages.length === 0 && (
                    <div className="text-center text-[#00296B]/50 py-12">
                      <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <h4 className="text-base font-medium mb-2">Belum ada percakapan</h4>
                      <p className="text-sm">Mulai ceritakan perasaan Anda!</p>
                    </div>
                  )}

                  {chatMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-md ${
                        message.sender === "user"
                          ? "bg-[#00296B] text-white"
                          : "bg-white text-[#00296B] border-2 border-[#00296B]/10"
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <div className="flex items-center justify-between mt-2 gap-2">
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString("id-ID", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                          {message.emotion && (
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                              {message.emotion}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white text-[#00296B] px-5 py-3 rounded-2xl shadow-md border-2 border-[#00296B]/10">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 bg-[#00296B] rounded-full animate-bounce"></div>
                          <div className="w-2.5 h-2.5 bg-[#00296B] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2.5 h-2.5 bg-[#00296B] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Analysis Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-5">
                <h3 className="text-[#00296B] font-semibold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Analisis Emosi Real Time
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-gradient-to-r from-gray-100/50 to-gray-200/50 p-4 rounded-xl border-l-4 border-gray-400"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="font-bold text-[#00296B] text-base">Belum Ada Analisis</h4>
                        <p className="text-xs text-[#00296B]/70 mt-1">
                          Mulai scan untuk melihat analisis emosi
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}