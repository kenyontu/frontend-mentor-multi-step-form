import { ComponentProps } from 'react'

import styles from './CardDescription.module.scss'

type Props = ComponentProps<'p'>

export function CardDescription({ className, children, ...rest }: Props) {
  return (
    <p
      className={`text-body-lg ${styles.description} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </p>
  )
}
