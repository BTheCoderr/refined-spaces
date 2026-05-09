import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export function BackToTop() {
  const visible = useScrollPosition(500)

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-navy/90 border border-gold/25 text-gold flex items-center justify-center backdrop-blur-sm shadow-lg shadow-navy/30 transition-colors duration-300 hover:bg-navy hover:border-gold/50 cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
