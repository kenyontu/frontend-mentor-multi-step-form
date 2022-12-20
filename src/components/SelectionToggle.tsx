import { useId } from 'react'
import styles from './SelectionToggle.module.scss'

type Props = {
  className?: string
  leftLabel: string
  rightLabel: string
  onToggle: () => void
  toggled: boolean
}

export function SelectionToggle(
  { className, leftLabel, rightLabel, toggled, onToggle }: Props,
) {
  const id = 'sel-toggle-' + useId()
  return (
    <div className={`${styles.container} ${className}`}>
      <input
        id={id}
        type='checkbox'
        checked={toggled}
        onChange={onToggle}
        className={styles.toggleCheck}
      />
      <label
        htmlFor={id}
        data-left-label={leftLabel}
        data-right-label={rightLabel}
        className={styles.toggle}
      >
        <span className='sr-only'>{rightLabel}</span>
        <span className={styles.toggleHandle}></span>
      </label>
    </div>
  )
}
