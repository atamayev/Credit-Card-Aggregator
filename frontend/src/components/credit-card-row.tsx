
interface Props {
	card: CreditCard
}

export default function CreditCardRow (props: Props) {
	const { card } = props

	return (
		<div key={card.id} className="grid grid-cols-10 gap-4 text-center p-2 border-b">
			<div>{card.id}</div>
			<div>{card.name}</div>
			<div>{card.issuer}</div>
			<div>{card.rewardType}</div>
			<div>{card.annualFee}</div>
			<div>{card.signUpBonus}</div>
			<div>{card.earningRate}</div>
			<div>{card.bonusCategories}</div>
			<div>{card.foreignTransactionFees}</div>
			<div>{card.interestRate}%</div>
		</div>
	)
}
