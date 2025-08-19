"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import GlassCard from "./GlassCard";

interface GalleryImage {
  src: string;
  caption: {
    en: string;
    hr: string;
  };
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/front%20door.JPG",
    caption: {
      en: "Front Entrance - Historic building entrance on Vlaška Street",
      hr: "Glavni ulaz - Povijesni ulaz zgrade na Vlaškoj ulici",
    },
    alt: "Front entrance of historic building",
  },
  {
    src: "/IMG_2345.JPG",
    caption: {
      en: "Interior View - Spacious apartment with high ceilings",
      hr: "Unutrašnji pogled - Prostran stan s visokim stropovima",
    },
    alt: "Interior apartment view",
  },
  {
    src: "/IMG_2347.JPG",
    caption: {
      en: "Living Space - Open floor plan with original features",
      hr: "Dnevni prostor - Otvoreni tlocrt s originalnim elementima",
    },
    alt: "Living space interior",
  },
  {
    src: "/IMG_2397.JPG",
    caption: {
      en: "Room Details - Classic architectural elements",
      hr: "Detalji prostorije - Klasični arhitektonski elementi",
    },
    alt: "Room architectural details",
  },
  {
    src: "/IMG_2399.JPG",
    caption: {
      en: "Another Perspective - Bright and airy spaces",
      hr: "Druga perspektiva - Svijetli i prozračni prostori",
    },
    alt: "Bright apartment interior",
  },
  {
    src: "/IMG_2404.JPG",
    caption: {
      en: "Room Layout - Functional living arrangement",
      hr: "Raspored prostorije - Funkcionalni stambeni raspored",
    },
    alt: "Room layout view",
  },
  {
    src: "/IMG_2405.JPG",
    caption: {
      en: "Interior Features - Quality finishes and details",
      hr: "Unutrašnji elementi - Kvalitetne završnice i detalji",
    },
    alt: "Interior features and finishes",
  },
  {
    src: "/IMG_2441.JPG",
    caption: {
      en: "Living Area - Comfortable and well-lit space",
      hr: "Dnevna zona - Udoban i dobro osvijetljen prostor",
    },
    alt: "Well-lit living area",
  },
  {
    src: "/IMG_2442.JPG",
    caption: {
      en: "Room Configuration - Versatile layout options",
      hr: "Konfiguracija prostorije - Svestrane mogućnosti rasporeda",
    },
    alt: "Versatile room configuration",
  },
  {
    src: "/IMG_2443.JPG",
    caption: {
      en: "Space Overview - Complete apartment perspective",
      hr: "Pregled prostora - Potpuna perspektiva stana",
    },
    alt: "Complete apartment overview",
  },
  {
    src: "/IMG_2445%202.JPG",
    caption: {
      en: "Detailed View - Quality construction and materials",
      hr: "Detaljan pogled - Kvalitetna konstrukcija i materijali",
    },
    alt: "Detailed construction view",
  },
  {
    src: "/IMG_2446.JPG",
    caption: {
      en: "Final Perspective - Ready to move in",
      hr: "Završna perspektiva - Spreman za useljenje",
    },
    alt: "Move-in ready apartment view",
  },
];

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gallery({ isOpen, onClose }: GalleryProps) {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(galleryImages.length).fill(false),
  );
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        if (selectedImage !== null) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      } else if (selectedImage !== null) {
        if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev === null
              ? null
              : prev > 0
                ? prev - 1
                : galleryImages.length - 1,
          );
        } else if (e.key === "ArrowRight") {
          setSelectedImage((prev) =>
            prev === null
              ? null
              : prev < galleryImages.length - 1
                ? prev + 1
                : 0,
          );
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedImage, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1,
      );
    } else {
      setSelectedImage(
        selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0,
      );
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={selectedImage === null ? onClose : closeLightbox}
      >
        <div className="h-full overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center justify-between"
            >
              <h2 className="gradient-text text-3xl font-bold text-white md:text-4xl">
                {t("gallery.title")}
              </h2>
              <button
                onClick={onClose}
                className="glass-button p-3 text-white hover:bg-white/20"
                aria-label={t("common.closeGallery")}
              >
                ✕
              </button>
            </motion.div>

            {/* Gallery Grid */}
            {selectedImage === null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <GlassCard className="group p-4">
                      <div className="relative overflow-hidden rounded-lg">
                        {!imageLoaded[index] && (
                          <div className="absolute inset-0 animate-pulse rounded-lg bg-white/10" />
                        )}
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className={`h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110 ${
                            imageLoaded[index] ? "opacity-100" : "opacity-0"
                          }`}
                          onLoad={() => handleImageLoad(index)}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute right-4 bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-medium">
                            {i18n.language === "hr"
                              ? image.caption.hr
                              : image.caption.en}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Lightbox */}
            {selectedImage !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
                ref={lightboxRef}
              >
                {/* Navigation buttons */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="glass-button absolute top-1/2 left-4 z-10 -translate-y-1/2 transform p-3 text-white"
                  aria-label={t("common.previousImage")}
                >
                  ❮
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="glass-button absolute top-1/2 right-4 z-10 -translate-y-1/2 transform p-3 text-white"
                  aria-label={t("common.nextImage")}
                >
                  ❯
                </button>

                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="glass-button absolute top-4 right-4 z-10 p-3 text-white"
                  aria-label={t("common.closeLightbox")}
                >
                  ✕
                </button>

                {/* Image container */}
                <div className="flex h-full max-h-full w-full max-w-5xl flex-col">
                  <div className="flex flex-1 items-center justify-center">
                    <Image
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      width={800}
                      height={600}
                      className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Caption */}
                  <GlassCard className="mt-4 p-4">
                    <p className="text-center text-white">
                      {i18n.language === "hr"
                        ? galleryImages[selectedImage].caption.hr
                        : galleryImages[selectedImage].caption.en}
                    </p>
                    <div className="mt-2 flex justify-center space-x-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === selectedImage
                              ? "bg-white"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
