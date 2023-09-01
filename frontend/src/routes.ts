/* eslint-disable max-len */
import CreditCardTable from "./pages/credit-card-table"

const showAll = {showHeader: true, dropdown: true, search: true}

const routes = [
	{ path: "/", component: CreditCardTable, ...showAll },
]

export default routes
