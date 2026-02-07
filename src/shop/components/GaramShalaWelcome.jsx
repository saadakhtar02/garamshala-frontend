import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../img/logo.png";

function GaramShalaWelcome({ onComplete }) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Brewing');
    const [isComplete, setIsComplete] = useState(false);

    const loadingTexts = ['Brewing', 'Grinding Beans', 'Steaming Milk', 'Adding Magic', 'Almost Ready'];

    const fallingLogos = useMemo(() => {
        return [...Array(50)].map((_, i) => {
            const sizes = [24, 32, 40, 48, 56, 64];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            const startX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200);
            const driftX = (Math.random() - 0.5) * 300;
            const rotateAmount = (Math.random() > 0.5 ? 1 : -1) * 360 * (Math.random() * 2 + 1);
            const duration = (Math.random() * 5 + 5) * (size / 40);
            const delay = Math.random() * 5;
            const baseOpacity = 0.2 + (size / 64) * 0.4;
            const swayAmount = (Math.random() - 0.5) * 100;

            return {
                id: i,
                size,
                startX,
                driftX,
                rotateAmount,
                duration,
                delay,
                baseOpacity,
                swayAmount,
            };
        });
    }, []);

    useEffect(() => {
        if (isComplete) return;

        const progressInterval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setIsComplete(true);
                    // Small delay before calling onComplete for smooth transition
                    setTimeout(() => {
                        onComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 80);

        const textInterval = setInterval(() => {
            setLoadingText(prev => {
                const nextIndex = (loadingTexts.indexOf(prev) + 1) % loadingTexts.length;
                return loadingTexts[nextIndex];
            });
        }, 1500);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, [isComplete, onComplete]);

    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-br from-[#0F0A06] via-[#1A120B] to-[#0F0A06] flex flex-col items-center justify-center overflow-hidden relative"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {fallingLogos.map(item => (
                    <motion.img
                        key={item.id}
                        src={logo}
                        alt=""
                        className="absolute object-contain"
                        style={{ width: item.size, height: item.size }}
                        initial={{ x: item.startX, y: -item.size, opacity: 0 }}
                        animate={{
                            x: [
                                item.startX,
                                item.startX + item.swayAmount,
                                item.startX + item.driftX
                            ],
                            y: window.innerHeight + item.size,
                            rotate: item.rotateAmount,
                            opacity: [0, item.baseOpacity, 0]
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-20 flex flex-col items-center">

                <motion.div
                    className="relative mb-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 80 }}
                >
                    <motion.div
                        className="absolute -inset-5 rounded-full z-10"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent, #C8913A, transparent, #8B5E2F, transparent)',
                            padding: '2px',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-full h-full rounded-full bg-[#0F0A06]" />
                    </motion.div>

                    <motion.div
                        className="absolute -inset-3 rounded-full z-0 bg-gradient-to-r from-amber-600/20 to-orange-700/20 blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />

                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-40 h-40 object-contain relative z-30 drop-shadow-[0_0_30px_rgba(200,145,58,0.35)]"
                    />
                </motion.div>

                <motion.h1
                    className="text-4xl font-bold mb-2 tracking-wider"
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                    }}
                >
                    {"GARAMSHALA".split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            className="inline-block bg-gradient-to-r from-[#C8913A] via-[#E8C47A] to-[#C8913A] bg-clip-text text-transparent"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                delay: index * 0.15,
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.3,
                                transition: { duration: 0.2 }
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="text-amber-200/50 text-sm tracking-[0.3em] uppercase mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Authentic Flavors, Crafted with Love
                </motion.p>

                <div className="mb-6 h-8">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={loadingText}
                            className="text-amber-200/70 text-base tracking-widest uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            {isComplete ? "Welcome!" : loadingText}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <div className="w-72">
                    <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#8B5E2F] via-[#C8913A] to-[#E8C47A]"
                            animate={{ width: `${loadingProgress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    <p className="mt-3 text-center text-amber-500/50 text-xs font-mono tracking-widest">
                        {loadingProgress}%
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default GaramShalaWelcome;