import { motion } from 'framer-motion'
import { HERO } from '../../constants/content'
import { Button } from '../ui/Button'
import { LogoIcon } from '../ui/Logo'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        alt="Modern luxury property managed by Refined Spaces in Providence, Rhode Island"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/65 to-navy/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center mb-10"
        >
          <LogoIcon size={56} className="md:w-[72px] md:h-[90px]" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="inline-block font-accent italic text-gold text-base md:text-lg tracking-[0.2em] mb-5"
        >
          {HERO.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-ivory leading-[1.1] mb-7"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-xl mx-auto text-linen/75 text-[15px] md:text-base leading-relaxed mb-12"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" size="large">
            {HERO.primaryCta}
          </Button>
          <Button href="#guests" variant="secondary" size="large">
            {HERO.secondaryCta}
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-linen to-transparent" />
    </section>
  )
}
