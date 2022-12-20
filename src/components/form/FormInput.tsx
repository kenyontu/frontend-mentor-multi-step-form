import { ComponentProps, forwardRef, Ref, useId } from 'react'
import styles from './FormInput.module.scss'

type Props =
  & {
    label: string
    value: string
    error?: string
    onChange: (newValue: string) => void
  }
  & Pick<
    ComponentProps<'input'>,
    'placeholder' | 'type' | 'autoFocus' | 'required'
  >

export const FormInput = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { label, value, onChange, error, ...inputProps } = props
    const id = 'formInput-' + useId()

    return (
      <div className={styles.container}>
        <div className={styles.labelContainer}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
          {error && (
            <p className={styles.errorMessage} aria-live='polite'>{error}</p>
          )}
        </div>
        <input
          id={id}
          type='text'
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ''}`}
          value={value}
          onChange={(event) => {
            onChange(event.target.value)
          }}
          {...inputProps}
        />
      </div>
    )
  },
)

FormInput.displayName = 'FormInput'
