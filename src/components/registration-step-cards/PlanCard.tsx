import { Plan, PriceType } from '~/config'
import { Card } from '../multi-step/card/Card'
import { SelectionToggle } from '../SelectionToggle'
import styles from './PlanCard.module.scss'

type Props = {
  plans: Plan[]
  selectedPlan: Plan
  onPlanChange: (planId: Plan) => void
  selectedPriceType: PriceType
  onPriceTypeToggle: () => void
}

export default function PlanCard(
  { plans, selectedPlan, onPlanChange, selectedPriceType, onPriceTypeToggle }:
    Props,
) {
  return (
    <Card>
      <Card.Title>Select your plan</Card.Title>
      <Card.Description>
        You have the option of monthly or yearly billing.
      </Card.Description>
      <div className={styles.planList} role='radiogroup'>
        <legend className='sr-only'>Select your plan</legend>
        {plans.map(plan => {
          const inputId = `radio-${plan.id}`

          return (
            <div key={plan.id} className={styles.planWrapper}>
              <input
                id={inputId}
                type='radio'
                name='plan'
                className={styles.planRadio}
                value={plan.id}
                checked={selectedPlan.id === plan.id}
                onChange={() => onPlanChange(plan)}
              />

              <label key={plan.id} htmlFor={inputId} className={styles.plan}>
                <img src={getIconPath(plan.icon)} className={styles.planIcon} />
                <p className={styles.planName}>{plan.name}</p>
                <p className={styles.planPrice}>
                  {getPriceMessage(plan, selectedPriceType)}
                </p>
                {selectedPriceType === 'yearly'
                  && (
                    <p className={styles.yearlyBonusMessage}>
                      {plan.yearlyBonusMessage}
                    </p>
                  )}
              </label>
            </div>
          )
        })}
      </div>
      <SelectionToggle
        leftLabel='Monthly'
        rightLabel='Yearly'
        onToggle={onPriceTypeToggle}
        toggled={selectedPriceType === 'yearly'}
        className={styles.priceTypeSelector}
      />
    </Card>
  )
}

function getIconPath(iconName: string) {
  return `assets/images/icon-${iconName}.svg`
}

function getPriceMessage(plan: Plan, type: PriceType) {
  if (type === 'monthly') {
    return `$${plan.monthlyPrice}/mo`
  }

  return `$${plan.yearlyPrice}/yr`
}
