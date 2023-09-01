declare global {
	interface CreditCard {
		id: number
		name: string
		issuer: string
		rewardType: string
		annualFee: number
		signUpBonus: string
		earningRate: string
		bonusCategories: string
		foreignTransactionFees: string
		interestRate: number
	}
}

export {}
