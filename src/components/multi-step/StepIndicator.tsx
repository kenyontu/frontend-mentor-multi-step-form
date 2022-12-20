import styles from './StepIndicator.module.scss'

type Step = {
  id: string
  name: string
}

type Props = {
  steps: Step[]
  currentStep: string
}

export function StepIndicator({ steps, currentStep }: Props) {
  return (
    <ul className={styles.container}>
      {steps.map(step => (
        <li key={step.id} className={styles.step}>
          <div
            className={`text-body-md ${styles.stepNumber} ${
              step.id === currentStep ? styles.active : ''
            }`}
          >
            {step.id}
          </div>
          <p className={`text-body-sm ${styles.stepId}`}>STEP {step.id}</p>
          <p className={`text-body-md ${styles.stepName}`}>{step.name}</p>
        </li>
      ))}
    </ul>
  )
}
