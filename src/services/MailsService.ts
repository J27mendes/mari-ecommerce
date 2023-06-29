import { ISendEmail } from "@/interfaces/ISendEmail"
import { ISendResponse } from "@/interfaces/ISendResponse"
import { Api } from "@/provider/Api"

const SendEmail = (data: ISendEmail) => Api.post<ISendResponse>('mails', data)
export const MailServices = {
    SendEmail
}
//o codigo aqui foi alterado