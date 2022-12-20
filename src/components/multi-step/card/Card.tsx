import { ComponentProps } from 'react'

import styles from './Card.module.scss'
import { CardDescription } from './CardDescription'
import { CardTitle } from './CardTitle'

type Props = ComponentProps<'div'>

export function Card({ children, className, ...rest }: Props) {
  return (
    <div className={`${styles.container} ${className ?? ''}`} {...rest}>
      {children}
    </div>
  )
}

Card.Title = CardTitle
Card.Description = CardDescription
