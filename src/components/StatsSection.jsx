/**
 * StatsSection.jsx
 * Animated counter stats section used on Home and WhyChooseUs pages.
 */
import { useEffect, useRef, useState } from 'react'
import stats from '../data/stats'

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function StatsSection({ light = false }) {
  const bg = light ? 'bg-white' : 'bg-brand-brown'
  const textMain = light ? 'text-brand-brown' : 'text-white'
  const textSub = light ? 'text-brand-gold' : 'text-brand-beige'
  const textDesc = light ? 'text-gray-500' : 'text-white/60'
  const divider = light ? 'border-gray-100' : 'border-white/10'

  return (
    <section className={`${bg} py-16`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x ${divider}`}>
        {stats.map((s) => (
          <div key={s.id} className="text-center py-4 sm:py-0 sm:px-6">
            <p className={`font-heading font-bold text-4xl lg:text-5xl ${textSub}`}>
              <AnimatedCounter target={s.value} suffix={s.suffix} />
            </p>
            <p className={`font-heading font-semibold text-lg mt-1 ${textMain}`}>{s.label}</p>
            <p className={`text-xs mt-1 ${textDesc}`}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
