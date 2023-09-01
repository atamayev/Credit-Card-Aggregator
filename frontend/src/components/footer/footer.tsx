import CompanyNameAndLogo from "./company-name-and-logo"
import Contact from "./contact"
import Legal from "./legal"
import QuickLinks from "./quick-links"
import SocialMediaLinks from "./social-media-links"

export default function Footer () {
	return (
		<div className="bg-gray-800 text-white py-8">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between">
				<CompanyNameAndLogo />

				<QuickLinks />

				<SocialMediaLinks />

				<Contact />

				<Legal />

			</div>
		</div>
	)
}
