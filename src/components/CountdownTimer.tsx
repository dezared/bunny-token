import { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const targetDate = new Date('2025-04-11T15:00:00Z').getTime()

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date().getTime()
    const diff = targetDate - now

    if (diff <= 0) return null

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeLeft()
      setTimeLeft(updated)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!timeLeft) {
    return (
      <div className="text-center text-4xl font-bold text-red-500">
        Let's go!
      </div>
    )
  }

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="text-center">
      <p className="font-jockey text-[13px]  text-[#ffffffa5]">
        Fair Launch in:
      </p>
      <div className="mb-[8px] flex justify-center gap-6 font-mono text-6xl font-bold text-white">
        <TimeBlock value={pad(timeLeft.days)} label="days" />
        <TimeBlock value={pad(timeLeft.hours)} label="hours" />
        <TimeBlock value={pad(timeLeft.minutes)} label="min" />
        <TimeBlock value={pad(timeLeft.seconds)} label="sec" />
      </div>
    </div>
  )
}

const TimeBlock = ({ value, label }) => (
  <div className="flex animate-pulse flex-col items-center">
    <span>{value}</span>
    <span className="text-sm text-white">{label}</span>
  </div>
)

export default CountdownTimer
