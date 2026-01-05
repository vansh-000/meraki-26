/**
 * @fileoverview Merchandise section showcasing official Meraki merch stores.
 * 
 * Displays two merchandise options (Doon Merchandise & Dopamine Store) with
 * hoodie images and central promotional text. Features Minecraft-themed styling
 * with scroll-linked animations.
 * 
 * @see DOCS.md#scroll-linked-animations for parallax transforms
 * @see DOCS.md#animation-system for motion variants
 * @component
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { appleSlideUp, sectionTransition } from "../utils/motion";

// Merchandise images from public folder
const doonHoodie = "/merchendise/doon.png";
const dopamineHoodie = "/merchendise/dopamine.png";
const skullIcon = "/merchendise/skull.png";

/**
 * Merchandise section with scroll-linked animations.
 * 
 * @returns {JSX.Element} Merchandise section with two store options
 * 
 * @layout
 * - Desktop (lg:): Three columns - Left hoodie, center text, right hoodie
 * - Mobile: Stacked vertically
 * 
 * @scrollAnimation
 * - Content opacity fades in/out at section boundaries
 * - Content slides up on entrance
 */
const Merchandise = () => {
    const sectionRef = useRef(null);

    /**
     * Scroll progress tracking for parallax effects.
     * @offset ["start end", "end start"] - Full viewport traversal
     */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    /**
     * Scroll-linked transform values.
     * 
     * @contentOpacity - Fade curve: 0→1 (enter) → 1 (visible) → 1→0 (exit)
     * @contentY - Slide up: 60px → 0 on enter
     */
    const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);

    return (
        <section
            id="merchandise"
            ref={sectionRef}
            className="relative w-full overflow-hidden py-16 md:py-24"
        >
            {/* 
             * Background Layer - Solid Black
             */}
            <div className="absolute inset-0 z-0 bg-black" />

            {/* Content with scroll-linked transforms */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="relative z-10 flex flex-col px-4 md:px-8 lg:px-16"
            >
                {/* Section Header */}
                <motion.div
                    variants={sectionTransition}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-6 md:mb-8"
                >
                    <motion.div
                        variants={appleSlideUp(0.1)}
                        className="flex items-center gap-3"
                    >
                        <span className="text-cyan-400 text-xl md:text-2xl">▶</span>
                        <h2 className="font-minecraft text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase">
                            Merchandise
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Main Content Area */}
                <motion.div
                    variants={sectionTransition}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative"
                >
                    {/* Content Grid */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 max-w-7xl mx-auto w-full">

                        {/* Left Card - Doon Merchandise */}
                        <motion.div
                            variants={appleSlideUp(0.2)}
                            className="w-full lg:w-[30%] flex flex-col items-center"
                        >
                            {/* Store Header */}
                            <div className="flex items-center gap-2 mb-2 bg-transparent">
                                <h3 className="font-minecraft text-white text-base sm:text-lg md:text-xl tracking-wide uppercase text-center leading-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                                    Doon<br />Merchandise
                                </h3>
                                <motion.img
                                    src={skullIcon}
                                    alt="Skull Icon"
                                    className="w-12 h-12 md:w-16 md:h-16"
                                    style={{ imageRendering: "pixelated" }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Hoodie Image */}
                            <motion.div
                                className="relative w-full max-w-[280px] md:max-w-[320px]"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <img
                                    src={doonHoodie}
                                    alt="Doon Merchandise Hoodie"
                                    className="w-full h-auto object-contain"
                                    style={{
                                        filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))"
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Center Card - Promo Text */}
                        <motion.div
                            variants={appleSlideUp(0.3)}
                            className="w-full lg:w-[40%] flex justify-center my-4 lg:my-0"
                        >
                            <div
                                className="bg-neutral-700/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 text-center w-full max-w-[400px]"
                                style={{
                                    boxShadow: "inset 0 0 0 3px rgba(80,80,80,0.5), 0 8px 32px rgba(0,0,0,0.5)",
                                }}
                            >
                                <p className="font-playball text-white text-lg md:text-xl lg:text-2xl tracking-wide italic mb-3">
                                    The official
                                </p>
                                <h3 className="font-playball text-white text-3xl md:text-4xl lg:text-5xl tracking-wide mb-3">
                                    MERCH
                                </h3>
                                <p className="font-playball text-white text-lg md:text-xl tracking-wide mb-2">
                                    for
                                </p>
                                <p className="font-playball text-white text-2xl md:text-3xl lg:text-4xl tracking-wide mb-2">
                                    MERAKI
                                </p>
                                <p className="font-playball text-white text-lg md:text-xl tracking-wide mb-6">
                                    is out
                                </p>

                                <div className="pt-4">
                                    <p className="font-playball text-white text-base md:text-lg tracking-wide mb-1">
                                        From
                                    </p>
                                    <p className="font-playball text-red-500 text-xl md:text-2xl tracking-wide italic mb-1">
                                        Pixels
                                    </p>
                                    <p className="font-playball text-white text-base md:text-lg tracking-wide mb-1">
                                        to
                                    </p>
                                    <p className="font-playball text-red-500 text-xl md:text-2xl tracking-wide italic mb-3">
                                        Reality
                                    </p>
                                    <p className="font-playball text-yellow-400 text-lg md:text-xl tracking-wider italic mb-6">
                                        Spawn Your Style
                                    </p>
                                </div>

                                {/* Explore Button */}
                                <Link to="/merchandise">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: "rgba(34, 211, 238, 0.8)",
                                            backgroundColor: "rgba(34, 211, 238, 0.1)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-block px-8 py-3 border-2 border-cyan-400/40 bg-black/30 backdrop-blur-sm text-white text-base md:text-lg font-minecraft tracking-widest uppercase transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/20"
                                    >
                                        ▶ Explore Merch
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Card - Dopamine Store */}
                        <motion.div
                            variants={appleSlideUp(0.4)}
                            className="w-full lg:w-[30%] flex flex-col items-center"
                        >
                            {/* Store Header */}
                            <div className="flex items-center gap-2 mb-2 bg-transparent">
                                <motion.img
                                    src={skullIcon}
                                    alt="Skull Icon"
                                    className="w-12 h-12 md:w-16 md:h-16"
                                    style={{ imageRendering: "pixelated" }}
                                    whileHover={{ rotate: -360 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <h3 className="font-minecraft text-white text-base sm:text-lg md:text-xl tracking-wide uppercase text-center leading-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                                    Dopamine<br />Store
                                </h3>
                            </div>

                            {/* Hoodie Image */}
                            <motion.div
                                className="relative w-full max-w-[280px] md:max-w-[320px]"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <img
                                    src={dopamineHoodie}
                                    alt="Dopamine Store Hoodie"
                                    className="w-full h-auto object-contain"
                                    style={{
                                        filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))"
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Merchandise;
