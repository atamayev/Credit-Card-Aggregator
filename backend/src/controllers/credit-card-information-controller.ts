import { Request, Response } from "express"
import OperationHandler from "../utils/operation-handler"
import CreditCardInformationDB from "src/db/credit-card-information-db"

export async function fetchCreditCardInformation(req: Request, res: Response): Promise<void> {
	const operation: () => Promise<void> = async () => await CreditCardInformationDB.retrieveGeneralCreditCardInformation()
	await OperationHandler.executeAsyncOperationAndReturnCustomValueToRes(res, operation)
}
