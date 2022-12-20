import { ComponentProps } from 'react'

import styles from './CardTitle.module.scss'

type Props = ComponentProps<'h1'>

export function CardTitle({ children, className, ...rest }: Props) {
  return (
    <h1 className={`${styles.title} ${className ?? ''}`} {...rest}>
      {children}
    </h1>
  )
}
