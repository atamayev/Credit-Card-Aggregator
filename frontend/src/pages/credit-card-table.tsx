import CreditCardRow from "src/components/credit-card-row"
import creditCardData from "src/utils/sample-credit-card-information"

export default function CreditCardsTable () {
	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-9 gap-4 text-center bg-gray-100 p-2 font-semibold">
				<div>Name</div>
				<div>Issuer</div>
				<div>Reward Type</div>
				<div>Annual Fee</div>
				<div>Sign-Up Bonus</div>
				<div>Earning Rate</div>
				<div>Bonus Categories</div>
				<div>Foreign Transaction Fees</div>
				<div>Interest Rate</div>
			</div>
			{creditCardData.map((card, index) => (
				<CreditCardRow key = {index} card = {card} />
			))}
		</div>
	)
}
