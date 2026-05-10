import { motion } from 'framer-motion'
import { HERO } from '../../constants/content'
import { Button } from '../ui/Button'
import { LogoIcon } from '../ui/Logo'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-95">
        {HERO.mosaic.map((tile) => (
          <img key={tile.url} src={tile.url} alt={tile.alt} className="w-full h-full object-cover" loading="eager" />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/82 via-navy/68 to-navy/88" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center mb-10"
        >
          <LogoIcon size={52} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="inline-block font-accent italic text-gold text-base md:text-lg tracking-[0.22em] mb-6 uppercase"
        >
          {HERO.eyebrow}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold text-ivory leading-[1.02] mb-8 md:mb-10"
        >
          <span className="block tracking-tight">{HERO.headlineLine1}</span>
          <span className="block tracking-tight mt-2 sm:mt-3">{HERO.headlineLine2}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-linen/70 text-[15px] md:text-[17px] leading-relaxed mb-12 md:mb-14"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.88 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" size="large">
            {HERO.primaryCta}
          </Button>
          <Button href="#guest-experience" variant="secondary" size="large">
            {HERO.secondaryCta}
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-linen to-transparent" />
    </section>
  )
}
