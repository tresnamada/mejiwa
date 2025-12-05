"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Brain, Target, Sparkles } from 'lucide-react'
import Navbar from "@/components/Navbar"

export default function DeteksiMiji() {
  const [step, setStep] = useState('story') // 'story', 'questions', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // Sample data
  const questions = [
    {
      id: 1,
      text: "Seberapa sering Anda merasa cemas atau khawatir dalam 2 minggu terakhir?",
      options: [
        { value: 0, label: "Tidak pernah" },
        { value: 1, label: "Beberapa hari" },
        { value: 2, label: "Lebih dari setengah hari" },
        { value: 3, label: "Hampir setiap hari" }
      ]
    },
    {
      id: 2,
      text: "Bagaimana kualitas tidur Anda akhir-akhir ini?",
      options: [
        { value: 0, label: "Sangat baik" },
        { value: 1, label: "Cukup baik" },
        { value: 2, label: "Kurang baik" },
        { value: 3, label: "Sangat buruk" }
      ]
    }
  ]

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

  if (step === 'story') {
    return (
      <div className="min-h-screen bg-[#FFD500] relative overflow-hidden">
        <Navbar />
        
        <div className="mt-24 mb-10">
          <motion.div 
            className="container mx-auto px-4 max-w-6xl" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
                Deteksi Miji 
              </h1>
              <p className="text-lg text-[#00296B]/70 max-w-2xl mx-auto">
                AI Asesmen Kesehatan Mental - Ceritakan perasaan Anda dan dapatkan analisis lengkap
              </p>
            </motion.div>

            {/* Story Input Card */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#00296B] mb-3">
                  Ceritakan Apa yang Anda Rasakan
                </h2>
                <p className="text-[#00296B]/70">
                  Tuliskan keluh kesah, perasaan, atau masalah yang sedang Anda hadapi. 
                  AI kami akan menganalisis cerita Anda dan menghasilkan pertanyaan yang tepat.
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-[#00296B] font-semibold mb-3">
                  Cerita Anda <span className="text-red-600">*</span>
                </label>
                <textarea
                  placeholder="Contoh: Akhir-akhir ini saya merasa sangat tertekan dengan pekerjaan. Saya sering merasa cemas dan sulit tidur. Saya kehilangan minat pada hal-hal yang biasanya saya sukai..."
                  className="w-full h-64 p-4 border-2 border-[#00296B]/20 rounded-xl focus:border-[#00296B] focus:ring-2 focus:ring-[#00296B]/20 focus:outline-none resize-none text-[#00296B] bg-white/60 placeholder-[#00296B]/40"
                  maxLength={2000}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-[#00296B]/60">
                    Minimal 50 karakter untuk hasil lebih akurat
                  </span>
                  <span className="text-sm text-[#00296B]/60">
                    0/2000
                  </span>
                </div>
              </div>

              <div className="bg-[#FFD500]/20 border-2 border-[#FFD500]/50 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-[#00296B] mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Tips untuk cerita yang baik:
                </h3>
                <ul className="space-y-1 text-sm text-[#00296B]/80">
                  <li>• Jelaskan apa yang Anda rasakan saat ini</li>
                  <li>• Ceritakan masalah atau situasi yang membuat Anda khawatir</li>
                  <li>• Sebutkan gejala fisik atau emosional yang Anda alami</li>
                  <li>• Jujurlah - semua informasi akan dijaga kerahasiaannya</li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('questions')}
                className="w-full py-4 rounded-xl font-semibold text-lg transition-all shadow-lg bg-[#00296B] hover:bg-[#00296B]/90 text-white"
              >
                Lanjutkan ke Pertanyaan
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Questions View
  if (step === 'questions') {
    return (
      <div className="min-h-screen bg-[#FFD500] relative overflow-hidden">
        <Navbar />
        
        <div className="mt-24 mb-10">
          <motion.div 
            className="container mx-auto px-4 max-w-6xl" 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
                Pertanyaan Asesmen 📝
              </h1>
              <p className="text-lg text-[#00296B]/70">
                Jawab pertanyaan berdasarkan cerita Anda
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#00296B]">
                  Pertanyaan {currentQuestion + 1} dari {questions.length}
                </span>
                <span className="text-sm text-[#00296B]/70">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-white/40 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  className="bg-[#00296B] h-3 rounded-full"
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-6"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-[#00296B] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                    {currentQuestion + 1}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#00296B] leading-tight">
                    {questions[currentQuestion].text}
                  </h2>
                </div>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 text-left rounded-xl border-2 border-[#00296B]/20 hover:border-[#00296B] hover:bg-[#FFD500]/10 transition-all bg-white/50"
                    >
                      <span className="text-[#00296B] font-medium">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                className="flex-1 border-2 border-[#00296B] text-[#00296B] hover:bg-[#00296B]/10 bg-white/80 py-4 rounded-xl font-semibold transition-colors shadow-md"
              >
                Sebelumnya
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => currentQuestion === questions.length - 1 ? setStep('result') : setCurrentQuestion(currentQuestion + 1)}
                className="flex-1 bg-[#00296B] hover:bg-[#00296B]/90 text-white py-4 rounded-xl font-semibold shadow-lg transition-colors"
              >
                {currentQuestion === questions.length - 1 ? 'Lihat Hasil Analisis' : 'Selanjutnya'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFD500] relative overflow-hidden">
      <Navbar />
      <div className="mt-24 mb-10">
        <motion.div 
          className="container mx-auto px-4 max-w-6xl" 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
              Hasil Asesmen ✨
            </h1>
            <p className="text-lg text-[#00296B]/70">
              Analisis lengkap kesehatan mental Anda
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 sticky top-24">
                {/* Skor */}
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-[#00296B] text-white p-6 rounded-full mb-4 shadow-xl">
                    <Brain className="w-16 h-16" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#00296B] mb-2">
                    Tingkat: Baik
                  </h2>
                  <p className="text-[#00296B]/70">Skor: 5/21</p>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3">
                  <div className="bg-green-100 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-semibold text-sm">Status Mental</p>
                    <p className="text-green-900 text-lg font-bold">Sehat</p>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-200 rounded-xl p-4">
                    <p className="text-blue-800 font-semibold text-sm">Tingkat Stres</p>
                    <p className="text-blue-900 text-lg font-bold">Rendah</p>
                  </div>
                  <div className="bg-purple-100 border-2 border-purple-200 rounded-xl p-4">
                    <p className="text-purple-800 font-semibold text-sm">Kecemasan</p>
                    <p className="text-purple-900 text-lg font-bold">Minimal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column  */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Analisis */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-[#00296B] mb-3 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Analisis Mendalam
                </h3>
                <p className="text-[#00296B]/90 leading-relaxed">
                  Kesehatan mental Anda dalam kondisi baik. Anda menunjukkan tanda-tanda kesejahteraan mental yang positif dengan tingkat stres dan kecemasan yang minimal.
                </p>
              </div>

              {/* Recomendasi*/}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-[#00296B] mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Rekomendasi untuk Anda
                </h3>
                <div className="space-y-3">
                  {[
                    'Pertahankan pola hidup sehat Anda',
                    'Lakukan aktivitas yang Anda sukai secara rutin',
                    'Jaga hubungan sosial yang positif',
                    'Praktikkan mindfulness atau meditasi'
                  ].map((rec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 bg-white/50 p-4 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-[#00296B]">{rec}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Target */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-[#00296B] mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Target & Mission untuk Anda
                </h3>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      title: 'Jurnal Syukur Harian',
                      description: 'Menulis 3 hal yang disyukuri setiap hari',
                      target: '30 hari',
                      priority: 'medium'
                    },
                    {
                      title: 'Olahraga Rutin',
                      description: 'Berolahraga minimal 30 menit, 3x seminggu',
                      target: '12 sessions',
                      priority: 'medium'
                    }
                  ].map((task, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/70 p-5 rounded-xl border-2 border-[#FFD500]/30"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00296B] text-lg">{task.title}</h4>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                          Prioritas Sedang
                        </span>
                      </div>
                      <p className="text-[#00296B]/80 text-sm mb-3">{task.description}</p>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#00296B]" />
                        <span className="text-[#00296B]/70 text-sm">Target: {task.target}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 rounded-xl font-semibold shadow-lg bg-[#00296B] text-white hover:bg-[#00296B]/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Target className="w-5 h-5" />
                    Simpan Target
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep('story')}
                    className="py-3 rounded-xl font-semibold shadow-lg bg-white/80 border-2 border-[#00296B] text-[#00296B] hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <Brain className="w-5 h-5" />
                    Ulangi
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}