/**
 * @fileoverview Merchandise store page with brand selection popup.
 * 
 * Displays a merchandise catalog with featured product display and product grid.
 * On initial load, shows a popup for users to choose between Doon Merchandise
 * and Dopamine Store brands.
 * 
 * @see DOCS.md#animation-system for motion variants
 * @component
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { appleSlideUp, sectionTransition } from "../utils/motion";

// Merchandise images from public folder
const doonHoodie = "/merchendise/doon.png";
const dopamineHoodie = "/merchendise/dopamine.png";
const skullIcon = "/merchendise/skull.png";

// Sample product data for each brand
const doonProducts = [
    { id: 1, name: "GLORIOUS PURPOSE", type: "PREMIUM HOODIE", price: "₹1,299", image: doonHoodie, featured: true },
    { id: 2, name: "LOKI VARIANT", type: "OVERSIZED TEE", price: "₹699", image: doonHoodie },
    { id: 3, name: "TVA COLLECTION", type: "PREMIUM SWEATSHIRT", price: "₹999", image: doonHoodie },
    { id: 4, name: "XPECTO EDITION", type: "GRAPHIC TEE", price: "₹599", image: doonHoodie },
    { id: 5, name: "MERAKI SPECIAL", type: "TOTE BAG", price: "₹399", image: doonHoodie },
];

const dopamineProducts = [
    { id: 1, name: "DR. STRANGE", type: "PREMIUM HOODIE", price: "₹1,499", image: dopamineHoodie, featured: true },
    { id: 2, name: "MULTIVERSE", type: "OVERSIZED TEE", price: "₹799", image: dopamineHoodie },
    { id: 3, name: "MYSTIC ARTS", type: "PREMIUM SWEATSHIRT", price: "₹1,099", image: dopamineHoodie },
    { id: 4, name: "XPECTO '25", type: "GRAPHIC TEE", price: "₹649", image: dopamineHoodie },
    { id: 5, name: "STRANGE VIBES", type: "TOTE BAG", price: "₹449", image: dopamineHoodie },
];

/**
 * Brand Selection Popup Component
 */
const BrandSelectionPopup = ({ onSelectBrand, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-neutral-900 border-4 border-neutral-700 p-8 md:p-12 max-w-3xl w-full mx-4"
                style={{
                    boxShadow: "0 0 0 2px rgba(0,0,0,0.8), 0 20px 60px rgba(0,0,0,0.8)",
                }}
            >
                {/* Popup Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-cyan-400 text-2xl">▶</span>
                        <h2 className="font-minecraft text-white text-2xl md:text-3xl tracking-wider uppercase">
                            Choose Your Store
                        </h2>
                    </div>
                    <p className="font-playball text-white/70 text-lg md:text-xl italic">
                        Select a merchandise brand to explore
                    </p>
                </div>

                {/* Brand Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Doon Merchandise Option */}
                    <motion.button
                        onClick={() => onSelectBrand("doon")}
                        whileHover={{ scale: 1.03, borderColor: "rgba(34, 211, 238, 0.8)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-neutral-800 border-2 border-neutral-600 p-6 text-center transition-all duration-300 hover:bg-neutral-700/50 cursor-pointer group"
                    >
                        <img
                            src={doonHoodie}
                            alt="Doon Merchandise"
                            className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <h3 className="font-minecraft text-white text-lg tracking-wide uppercase">
                                Doon Merchandise
                            </h3>
                            <img src={skullIcon} alt="" className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
                        </div>
                        <p className="font-playball text-cyan-400 text-base italic">
                            Explore Collection →
                        </p>
                    </motion.button>

                    {/* Dopamine Store Option */}
                    <motion.button
                        onClick={() => onSelectBrand("dopamine")}
                        whileHover={{ scale: 1.03, borderColor: "rgba(34, 211, 238, 0.8)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-neutral-800 border-2 border-neutral-600 p-6 text-center transition-all duration-300 hover:bg-neutral-700/50 cursor-pointer group"
                    >
                        <img
                            src={dopamineHoodie}
                            alt="Dopamine Store"
                            className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <img src={skullIcon} alt="" className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
                            <h3 className="font-minecraft text-white text-lg tracking-wide uppercase">
                                Dopamine Store
                            </h3>
                        </div>
                        <p className="font-playball text-red-400 text-base italic">
                            Explore Collection →
                        </p>
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

/**
 * Product Card Component
 */
const ProductCard = ({ product, brandColor }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-800/50 border border-neutral-700 overflow-hidden cursor-pointer group"
        >
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                    <span className="font-terminal text-[10px] text-white/60 uppercase tracking-wider">
                        {product.type}
                    </span>
                </div>
                <div className="absolute top-2 right-2">
                    <span className={`font-minecraft text-xs ${brandColor} uppercase tracking-wide`}>
                        BUY
                    </span>
                </div>
            </div>
            <div className="p-3 border-t border-neutral-700">
                <p className="text-white/60 font-terminal text-xs mb-1">{product.price}</p>
                <h4 className="font-minecraft text-white text-xs tracking-wide uppercase truncate">
                    {product.name}
                </h4>
            </div>
        </motion.div>
    );
};

/**
 * Merchandise Page Component
 */
const MerchandisePage = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [featuredProduct, setFeaturedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const handleSelectBrand = (brand) => {
        setSelectedBrand(brand);
        setShowPopup(false);

        if (brand === "doon") {
            setProducts(doonProducts);
            setFeaturedProduct(doonProducts.find(p => p.featured));
        } else {
            setProducts(dopamineProducts);
            setFeaturedProduct(dopamineProducts.find(p => p.featured));
        }
    };

    const switchBrand = () => {
        const newBrand = selectedBrand === "doon" ? "dopamine" : "doon";
        handleSelectBrand(newBrand);
    };

    const brandColor = selectedBrand === "doon" ? "text-cyan-400" : "text-red-400";
    const brandName = selectedBrand === "doon" ? "Doon Merchandise" : "Dopamine Store";

    return (
        <div className="min-h-screen bg-black relative">
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 30%, rgba(139, 0, 0, 0.3) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(139, 0, 0, 0.2) 0%, transparent 40%)
                    `,
                }}
            />

            {/* Marble/dark texture overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 2px,
                            rgba(255,255,255,0.03) 2px,
                            rgba(255,255,255,0.03) 4px
                        )
                    `,
                }}
            />

            {/* Brand Selection Popup */}
            <AnimatePresence>
                {showPopup && (
                    <BrandSelectionPopup
                        onSelectBrand={handleSelectBrand}
                        onClose={() => setShowPopup(false)}
                    />
                )}
            </AnimatePresence>

            {/* Main Content - Only show after brand selection */}
            {selectedBrand && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 pt-20 pb-16 px-4 md:px-8 lg:px-16"
                >
                    {/* Header */}
                    <div className="max-w-7xl mx-auto mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <motion.div
                                variants={appleSlideUp(0.1)}
                                initial="hidden"
                                animate="show"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-cyan-400 text-xl">▶</span>
                                    <h1 className="font-minecraft text-white text-2xl md:text-4xl tracking-wider uppercase">
                                        Merchandise
                                    </h1>
                                </div>
                                <p className={`font-playball ${brandColor} text-xl md:text-2xl italic`}>
                                    {brandName}
                                </p>
                            </motion.div>

                            {/* Brand Switcher */}
                            <motion.button
                                variants={appleSlideUp(0.2)}
                                initial="hidden"
                                animate="show"
                                onClick={switchBrand}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-2 border border-neutral-600 text-white/70 font-terminal text-sm tracking-wide hover:border-cyan-400 hover:text-white transition-all duration-300"
                            >
                                Switch to {selectedBrand === "doon" ? "Dopamine Store" : "Doon Merchandise"}
                            </motion.button>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Left - Featured Product */}
                            <motion.div
                                variants={appleSlideUp(0.2)}
                                initial="hidden"
                                animate="show"
                                className="relative"
                            >
                                {/* Decorative elements */}
                                <div className="absolute -left-4 top-1/4 font-terminal text-white/20 text-sm tracking-widest transform -rotate-90 origin-left">
                                    できる
                                </div>

                                {/* Featured Product Display */}
                                <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
                                    {featuredProduct && (
                                        <>
                                            <motion.img
                                                key={featuredProduct.id}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                                src={featuredProduct.image}
                                                alt={featuredProduct.name}
                                                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                                            />

                                            {/* Product Info Bar */}
                                            <div className="mt-8 w-full max-w-md">
                                                <div className="flex items-end justify-between mb-4">
                                                    <div>
                                                        <p className="font-terminal text-white/60 text-sm uppercase tracking-wider mb-1">
                                                            {featuredProduct.type}
                                                        </p>
                                                        <h2 className="font-minecraft text-white text-xl md:text-2xl tracking-wide uppercase">
                                                            {featuredProduct.name}
                                                        </h2>
                                                    </div>
                                                    <p className={`font-playball ${brandColor} text-xl md:text-2xl`}>
                                                        {featuredProduct.price}
                                                    </p>
                                                </div>

                                                {/* Buy Button */}
                                                <motion.a
                                                    href={selectedBrand === "doon" ? "#" : "https://www.dopamineofficial.in/"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`block w-full py-3 text-center font-minecraft text-white tracking-widest uppercase ${selectedBrand === "doon"
                                                            ? "bg-cyan-600 hover:bg-cyan-500"
                                                            : "bg-red-700 hover:bg-red-600"
                                                        } transition-colors duration-300`}
                                                >
                                                    BUY
                                                </motion.a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>

                            {/* Right - Product Grid */}
                            <motion.div
                                variants={sectionTransition}
                                initial="hidden"
                                animate="show"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {products.filter(p => !p.featured).map((product, index) => (
                                        <motion.div
                                            key={product.id}
                                            variants={appleSlideUp(0.1 * index)}
                                            onClick={() => setFeaturedProduct(product)}
                                        >
                                            <ProductCard product={product} brandColor={brandColor} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MerchandisePage;
