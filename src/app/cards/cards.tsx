'use client'

import { useState } from 'react'
import { Reorder } from 'framer-motion'
import styles from './cards.module.css'

const DEFAULT_CARDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function CardsComponent() {
  const [cards, setCards] = useState(DEFAULT_CARDS)

  return (
    <Reorder.Group className={styles.container} axis="x" values={cards} onReorder={setCards}>
      {cards.map((card) => (
        <Reorder.Item className={styles.card} key={card} value={card}>
          {card}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}