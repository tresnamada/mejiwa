"use client"

import { motion, AnimatePresence } from "framer-motion"
import { User, Mail, Calendar, MapPin, Edit, LogOut, Settings, Activity, Heart, Brain, Star, Trophy, Clock } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const userData = {
    name: "Rifqinabil",
    email: "rifqinabil@gmail.com",
    joinDate: "January 1981",
    location: "Jakarta",
    avatar: "/avatar-placeholder.png",
    bio: "aku gay",
  }





  const recentActivities = [
    { id: 1, type: "Cerita Miji", time: "2 jam lalu", icon: "💬", mood: "Senang" },
    { id: 2, type: "Suara Miji", time: "5 jam lalu", icon: "🎤", mood: "Netral" },
    { id: 3, type: "Sehat Jiwa", time: "1 hari lalu", icon: "🧘", mood: "Tenang" },
    { id: 4, type: "Cerita Miji", time: "2 hari lalu", icon: "💬", mood: "Bahagia" },
  ]

 
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#00296B] mb-4">
              Profil Saya 👤
            </h1>
            <p className="text-lg text-[#00296B]/70 max-w-2xl mx-auto">
              Kelola informasi pribadi dan pantau perkembangan mental Anda
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column*/}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden sticky top-24">
                {/* Profile*/}
                <div className="h-32 bg-gradient-to-br from-[#00296B] to-[#004080] relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(!isEditing)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Profile*/}
                <div className="relative -mt-16 flex justify-center">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden"
                    >
                      <User className="w-16 h-16 text-[#00296B]" />
                    </motion.div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Profile */}
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-[#00296B] mb-1">{userData.name}</h2>
                  <p className="text-[#00296B]/70 text-sm mb-4">{userData.email}</p>
                  
                  <div className="space-y-3 text-sm text-[#00296B]/80">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Bergabung {userData.joinDate}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.location}</span>
                    </div>
                  </div>

                  <p className="text-[#00296B]/70 text-sm mt-4 leading-relaxed">
                    {userData.bio}
                  </p>

    
                  <div className="mt-6 space-y-3">                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
                    >
                      <LogOut className="w-5 h-5" />
                      Keluar
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column*/}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">


              {/* Aktifitas */}
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-gray-200/50">
                  <h3 className="text-[#00296B] font-bold text-xl flex items-center gap-2">
                    <Clock className="w-6 h-6" />
                    Aktivitas Terakhir
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  {recentActivities.map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: activity.id * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all cursor-pointer"
                    >
                      <div className="text-3xl">{activity.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#00296B]">{activity.type}</h4>
                        <p className="text-sm text-[#00296B]/70">{activity.time}</p>
                      </div>
                      <div className="px-3 py-1 bg-[#FFD500]/30 rounded-full text-xs font-semibold text-[#00296B]">
                        {activity.mood}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
