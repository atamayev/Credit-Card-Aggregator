import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
import "./styles/index.css"
import App from "./App"

if (process.env.NODE_ENV === "production") disableReactDevTools()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path = "/*" element = {<App/>} />
		</Routes>
	</BrowserRouter>
	// </React.StrictMode>
)
