import { mysqlTables } from "../utils/table-names-list"
import { connectDatabase } from "../setup-and-security/connect"
import { RowDataPacket } from "mysql2"
import { transformArrayOfObjectsToCamelCase } from "../utils/transform-keys-to-camel-case"

export default new class CreditCardInformationDB {
	async retrieveGeneralCreditCardInformation (): Promise<> {
		const sql = `SELECT * FROM ${mysqlTables.doctor_specific_info}`
		const connection = await connectDatabase()
		const [results] = await connection.execute(sql) as RowDataPacket[]
		const generalCreditCardInformation = results.map((row: RowDataPacket) => row as UserIdAndPassword)
		const camelCasedGeneralCreditCardInformation = transformArrayOfObjectsToCamelCase(generalCreditCardInformation)
		const resultsObject = camelCasedGeneralCreditCardInformation as UserIdAndPassword[]
		return resultsObject
	}
}()
