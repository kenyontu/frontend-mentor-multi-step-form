export type PriceType = 'monthly' | 'yearly'

export type Plan = {
  id: string
  name: string
  monthlyPrice: number
  yearlyPrice: number
  yearlyBonusMessage: string
  icon: string
}

export const plans: Plan[] = [
  {
    id: 'monthly_arcade',
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    yearlyBonusMessage: '2 months free',
    icon: 'arcade',
  },
  {
    id: 'monthly_advanced',
    name: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    yearlyBonusMessage: '2 months free',
    icon: 'advanced',
  },
  {
    id: 'monthly_pro',
    name: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    yearlyBonusMessage: '2 months free',
    icon: 'pro',
  },
]

export const plansById = plans.reduce(
  (plans, plan) => ({ ...plans, [plan.id]: plan }),
  {},
)

export type PlanAddon = {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

export const planAddons: PlanAddon[] = [
  {
    id: 'online_service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 'larger_storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 'customizable_profile',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
]
