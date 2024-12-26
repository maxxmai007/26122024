import { CreditCard, Plane, ShoppingBag, UtensilsCrossed, Building2, Shield } from 'lucide-react';

export const financialGoals = [
  {
    id: 'cashback',
    icon: CreditCard,
    title: 'Cashback'
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel'
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: 'Shopping'
  },
  {
    id: 'dining',
    icon: UtensilsCrossed,
    title: 'Dining and Lifestyle'
  },
  {
    id: 'lounge',
    icon: Building2,
    title: 'Health and Wellness'
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Fuel and Commute'
  }
] as const;

export type FinancialGoal = typeof financialGoals[number]['id'];