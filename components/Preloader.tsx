
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SERVICES } from '../data';
import { getOptimizedImage } from '../utils';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing Neural Core...');
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  // Memoize the list of critical images to preload
  const criticalImages = useMemo(() => {
    const images: string[] = [];

    // 1. Service Heroes
    SERVICES.forEach(s => {
      if (s.image) images.push(getOptimizedImage(s.image, 1600));
    });

    // 2. Project Heroes, Thumbnails, and first 3 Gallery Items
    PROJECTS.forEach(p => {
      // Main hero image
      if (p.image) images.push(getOptimizedImage(p.image, 1600));

      // Gallery assets
      if (p.gallery && p.gallery.length > 0) {
        // Preload all thumbnails (used in the ribbon)
        p.gallery.forEach(img => images.push(getOptimizedImage(img, 400)));

        // Preload first 3 main previews (for instant clicking)
        p.gallery.slice(0, 3).forEach(img => images.push(getOptimizedImage(img, 1200)));
      }
    });

    return [...new Set(images)]; // Remove duplicates
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = criticalImages.length;

    if (totalImages === 0) {
      setIsImagesLoaded(true);
      return;
    }

    const preloadImages = async () => {
      const promises = criticalImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            // Update local progress tied to image loading
            // resolve(src);
            resolve(true);
          };
          img.onerror = () => {
            loadedCount++;
            resolve(false);
          };
        });
      });

      await Promise.all(promises);
      setIsImagesLoaded(true);
    };

    preloadImages();
  }, [criticalImages]);

  useEffect(() => {
    const sequence = [
      { p: 15, t: 'Initializing Systems...' },
      { p: 35, t: 'Loading Brand Assets...' },
      { p: 55, t: 'Optimizing Visual Nodes...' },
      { p: 75, t: 'Syncing Local Resources...' },
      { p: 95, t: 'Finalizing Deployment...' },
      { p: 100, t: 'NAXIT is Ready.' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        // Slow down if images aren't loaded yet
        if (sequence[current].p > 85 && !isImagesLoaded) {
          return;
        }

        setProgress(sequence[current].p);
        setText(sequence[current].t);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete, isImagesLoaded]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[2200] bg-naxit-charcoal flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-end mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            NAXIT<span className="text-naxit-cyan">.</span>
          </motion.div>
          <div className="text-[10px] font-mono text-naxit-cyan opacity-60">
            {progress}%
          </div>
        </div>

        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-naxit-cyan shadow-[0_0_10px_rgba(0,212,255,0.5)]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] text-center"
          >
            {text}
          </motion.div>
        </AnimatePresence>

        {/* Loading Indicator for images */}
        {!isImagesLoaded && progress > 50 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex justify-center gap-1"
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2
                }}
                className="w-1 h-1 bg-naxit-cyan rounded-full"
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-naxit-royal rounded-full blur-[150px] animate-pulse" />
      </div>
    </motion.div>
  );
};

export default Preloader;
