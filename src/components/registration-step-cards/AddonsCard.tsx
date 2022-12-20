import { PlanAddon, PriceType } from '~/config'
import { Card } from '../multi-step/card/Card'
import styles from './AddonsCard.module.scss'

type Props = {
  addons: PlanAddon[]
  checkedAddons: Set<PlanAddon>
  onToggleAddon: (addon: PlanAddon) => void
  priceType: PriceType
}

export default function AddonsCard(
  { addons, checkedAddons, onToggleAddon, priceType }: Props,
) {
  return (
    <Card>
      <Card.Title>Pick add-ons</Card.Title>
      <Card.Description>
        Add-ons help enhance your gaming experience.
      </Card.Description>
      <div className={styles.cardContent}>
        {addons.map(addon => {
          const isChecked = checkedAddons.has(addon)

          return (
            <div
              key={addon.id}
              className={`${styles.addon} ${isChecked ? styles.checked : ''}`}
              role='checkbox'
              aria-checked={isChecked}
              onKeyDown={event => {
                if (event.key === ' ') {
                  onToggleAddon(addon)
                }
              }}
              onClick={event => {
                event.preventDefault()
                onToggleAddon(addon)
              }}
              tabIndex={0}
            >
              <div className={styles.checkbox}>
                <svg
                  className={styles.checkmark}
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='9'
                  viewBox='0 0 12 9'
                >
                  <path
                    fill='none'
                    stroke='#FFF'
                    strokeWidth='2'
                    d='m1 4 3.433 3.433L10.866 1'
                  />
                </svg>
              </div>
              <p className={styles.name}>{addon.name}</p>
              <p className={styles.description}>{addon.description}</p>
              <p className={styles.price}>
                {getPriceMessage(addon, priceType)}
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

function getPriceMessage(addon: PlanAddon, priceType: PriceType) {
  if (priceType === 'monthly') {
    return `+$${addon.monthlyPrice}/mo`
  }
  return `+$${addon.yearlyPrice}/yr`
}
