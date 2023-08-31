import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDatabase } from "./setup-and-security/connect"
import creditCardInformationRoutes from "./routes/credit-card-information-routes"

dotenv.config()

const port = process.env.PORT || 8000

// Confirmation of MYSQL Connection
// eslint-disable-next-line @typescript-eslint/no-floating-promises
connectDatabase()

const app = express()

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin as string)
	res.header("Access-Control-Allow-Credentials", "true")
	next()
})

app.use(cors({
	credentials: true,
	origin: (origin, callback) => {
		callback(null, true)
	}
}))

app.use(express.json())

app.use("/api/credit-card-information", creditCardInformationRoutes)
app.use("*", (req, res) => res.status(404).json({ error: "Route not found"}))

// Initialization of server:
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
