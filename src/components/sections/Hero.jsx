import { motion } from 'framer-motion'
import { HERO } from '../../constants/content'
import { Button } from '../ui/Button'
import { publicAssetUrl } from '../../utils/assetUrl'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-95">
        {HERO.mosaic.map((tile, i) => (
          <img
            key={tile.url}
            src={publicAssetUrl(tile.url)}
            alt={tile.alt}
            className="w-full h-full object-cover min-h-[50%]"
            loading={i === 0 ? 'eager' : 'lazy'}
            {...(i === 0 ? { fetchPriority: 'high' } : {})}
            decoding="async"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/82 via-navy/68 to-navy/88" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-24 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center w-full mb-12 md:mb-14 px-1 sm:px-0"
        >
          <img
            src={publicAssetUrl('/images/logo/refined-spaces-hero-horizontal.png')}
            alt="Refined Spaces"
            width={819}
            height={1024}
            className="mx-auto block h-auto w-auto max-h-[min(52svh,520px)] max-w-[min(820px,calc(100vw-3rem))] max-[380px]:max-w-[calc(100vw-2rem)] object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-2xl mx-auto text-linen/75 text-[15px] md:text-[17px] leading-[1.85] mb-12 md:mb-14 text-center"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.78 }}
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
