/* eslint-disable max-len */
import HomeDoctorsList from "./components/doctors-search-list/home-doctors-list"

const showAll = {showHeader: true, dropdown: true, search: true}

const routes = [
	{ path: "/", component: HomeDoctorsList, ...showAll },
]

export default routes
