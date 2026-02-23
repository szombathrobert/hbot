'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertCircle, Home } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <AlertCircle className="w-24 h-24 text-cyan-400 mx-auto mb-8 stroke-[1px]" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-7xl md:text-9xl font-bold text-white mb-4"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-md mx-auto"
                >
                    Sajnáljuk, de az oxigénszint ezen az oldalon kritikusan alacsony. A keresett tartalom nem található.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/"
                        aria-label='HomeLink'
                        className="inline-flex items-center gap-2 bg-cyan-500 text-[#020617] px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                        <Home size={20} />
                        Vissza a főoldalra
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}