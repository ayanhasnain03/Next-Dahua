'use client';
import { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

const AnimatedCounter = memo(function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(value.toString()), {
        duration: 2,
        ease: "easeOut"
      })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <div ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <span className="ml-1">{suffix}</span>
    </div>
  )
})

AnimatedCounter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  suffix: PropTypes.string
}

export default AnimatedCounter