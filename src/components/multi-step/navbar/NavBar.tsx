import styles from './NavBar.module.scss'

type Props = {
  steps: number
  currentStep: number
  isAtPersonalInfoStep: boolean
  personalInfoFormId: string
  onBackButtonClick: () => void
  onNextStepButtonClick: () => void
  onConfirmButtonClick: () => void
}

export function NavBar(
  {
    steps,
    currentStep,
    isAtPersonalInfoStep,
    personalInfoFormId,
    onBackButtonClick,
    onNextStepButtonClick,
    onConfirmButtonClick,
  }: Props,
) {
  return (
    <div className={styles.container}>
      {currentStep > 0 && (
        <button className={styles.goBackButton} onClick={onBackButtonClick}>
          Go Back
        </button>
      )}
      {(currentStep < steps - 1 && !isAtPersonalInfoStep) && (
        <button
          className={styles.nextStepButton}
          onClick={onNextStepButtonClick}
        >
          Next Step
        </button>
      )}
      {/* If at the personal info step, the next button triggers the form submit */}
      {(currentStep < steps - 1 && isAtPersonalInfoStep) && (
        <button
          className={styles.nextStepButton}
          form={personalInfoFormId}
          type='submit'
        >
          Next Step
        </button>
      )}
      {currentStep === steps - 1 && (
        <button className={styles.confirmButton} onClick={onConfirmButtonClick}>
          Confirm
        </button>
      )}
    </div>
  )
}
