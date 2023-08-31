import express from "express"
import { fetchCreditCardInformation } from "src/controllers/credit-card-information-controller"

const router = express.Router()

router.get("/fetch-credit-card-information", fetchCreditCardInformation)

export default router
