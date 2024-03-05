'use client'
import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'

interface FramerMagneticProps {
  children: React.ReactElement
}

export function FramerMagnetic({children}: FramerMagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const [position, setPosition] = useState({x: 0, y: 0})

  const mouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (!ref.current) return
    const {clientX, clientY} = e
    const {width, height, left, top} = ref.current?.getBoundingClientRect()
    let x = clientX - (left + width / 2)
    let y = clientY - (top + height / 2)
    setPosition({x, y})
  }

  const mouseLeave = () => {
    setPosition({x: 0, y: 0})
  }

  const {x, y} = position
  return (
    <motion.span
      className='p-2'
      ref={ref}
      onMouseMove={(e) => mouseMove(e)}
      onMouseLeave={() => mouseLeave()}
      animate={{x, y}}
      transition={{type: 'spring', stiffness: 150, damping: 15, mass: 0.1}}
    >
      {children}
    </motion.span>
  )
}
