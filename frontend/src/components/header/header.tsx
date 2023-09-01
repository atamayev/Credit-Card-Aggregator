import LoginAndSignUpButtons from "./login-and-signup-buttons"
import NameAndLogo from "./name-and-logo"

interface HeaderProps {
	dropdown: boolean
	search: boolean
}

export default function Header(props: HeaderProps) {
	const { dropdown, search } = props

	return (
		<div className="bg-gray-800 text-white py-4">
			<div className="container mx-auto flex justify-between items-center">

				<NameAndLogo />

				<LoginAndSignUpButtons />
			</div>
		</div>
	)
}
