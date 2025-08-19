'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import GlassCard from './GlassCard';

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
    src: '/gallery/placeholder-1.svg',
    caption: {
      en: 'Living Room - High ceilings and original hardwood floors',
      hr: 'Dnevni boravak - Visoki stropovi i originalni drveni podovi'
    },
    alt: 'Living room with high ceilings'
  },
  {
    src: '/gallery/placeholder-2.svg',
    caption: {
      en: 'Kitchen - Fully renovated with modern appliances',
      hr: 'Kuhinja - Potpuno renovirana s modernim uređajima'
    },
    alt: 'Modern renovated kitchen'
  },
  {
    src: '/gallery/placeholder-3.svg',
    caption: {
      en: 'Bedroom - Peaceful courtyard views',
      hr: 'Spavaća soba - Miran pogled na dvorište'
    },
    alt: 'Bedroom with courtyard view'
  },
  {
    src: '/gallery/placeholder-4.svg',
    caption: {
      en: 'Bathroom - Recently renovated with modern fixtures',
      hr: 'Kupaonica - Nedavno renovirana s modernim instalacijama'
    },
    alt: 'Modern renovated bathroom'
  },
  {
    src: '/gallery/placeholder-5.svg',
    caption: {
      en: 'Building Exterior - Historic charm in Zagreb\'s center',
      hr: 'Vanjština zgrade - Povijesni šarm u centru Zagreba'
    },
    alt: 'Historic building exterior'
  },
  {
    src: '/gallery/placeholder-6.svg',
    caption: {
      en: 'Courtyard View - Quiet inner courtyard setting',
      hr: 'Pogled na dvorište - Mirno unutrašnje dvorište'
    },
    alt: 'Peaceful inner courtyard'
  }
];

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gallery({ isOpen, onClose }: GalleryProps) {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        if (selectedImage !== null) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      } else if (selectedImage !== null) {
        if (e.key === 'ArrowLeft') {
          setSelectedImage(prev => 
            prev === null ? null : prev > 0 ? prev - 1 : galleryImages.length - 1
          );
        } else if (e.key === 'ArrowRight') {
          setSelectedImage(prev => 
            prev === null ? null : prev < galleryImages.length - 1 ? prev + 1 : 0
          );
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedImage, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
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

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
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
              className="flex justify-between items-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white gradient-text">
                {t('gallery.title')}
              </h2>
              <button
                onClick={onClose}
                className="glass-button text-white p-3 hover:bg-white/20"
                aria-label={t('common.closeGallery')}
              >
                ✕
              </button>
            </motion.div>

            {/* Gallery Grid */}
            {selectedImage === null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <GlassCard className="p-4 group">
                      <div className="relative overflow-hidden rounded-lg">
                        {!imageLoaded[index] && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />
                        )}
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className={`w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                            imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                          }`}
                          onLoad={() => handleImageLoad(index)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm font-medium">
                            {i18n.language === 'hr' ? image.caption.hr : image.caption.en}
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
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-button text-white p-3 z-10"
                  aria-label={t('common.previousImage')}
                >
                  ❮
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-button text-white p-3 z-10"
                  aria-label={t('common.nextImage')}
                >
                  ❯
                </button>

                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 glass-button text-white p-3 z-10"
                  aria-label={t('common.closeLightbox')}
                >
                  ✕
                </button>

                {/* Image container */}
                <div className="max-w-5xl max-h-full w-full h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      width={800}
                      height={600}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Caption */}
                  <GlassCard className="mt-4 p-4">
                    <p className="text-white text-center">
                      {i18n.language === 'hr' 
                        ? galleryImages[selectedImage].caption.hr 
                        : galleryImages[selectedImage].caption.en
                      }
                    </p>
                    <div className="flex justify-center mt-2 space-x-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === selectedImage 
                              ? 'bg-white' 
                              : 'bg-white/40 hover:bg-white/60'
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