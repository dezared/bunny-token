import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MascotComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анимация сработает только один раз
    threshold: 0.5 // анимация сработает, когда 50% элемента будет в области видимости
  })

  return (
    <div className="absolute right-0 top-[20px]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 0 }} // Маскот невидим и на месте
        animate={{
          opacity: inView ? [0, 1, 1, 1, 1, 1] : 0, // Маскот становится видимым, когда попадает в область видимости
          x: inView ? [0, -10, 0, -10, 0, 0] : 0, // Тряска (движение по оси X)
          y: inView ? [0, -10, 10, -10, 10, 0] : 0 // Тряска (движение по оси Y)
        }}
        transition={{
          delay: 1, // Задержка перед началом анимации
          duration: 2.5, // Общая длительность анимации
          times: [0, 0.3, 0.5, 0.7, 0.9, 1], // Тайминг: последовательность кадров
          repeat: 0, // Анимация повторяется только один раз
          ease: 'easeInOut' // Плавное изменение
        }}
      >
        <img src="/images/woof-right.png" alt="Icon" className="size-[737px]" />
      </motion.div>
    </div>
  )
}

export default MascotComponent
