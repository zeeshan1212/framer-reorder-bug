'use client'

import { useState } from 'react'
import styles from './cards.module.css'

const DEFAULT_CARDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function CardsComponent() {
  const [cards, setCards] = useState(DEFAULT_CARDS)

  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <div className={styles.card} key={card}>
          {card}
        </div>
      ))}
    </div>
  )
}