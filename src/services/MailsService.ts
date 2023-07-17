import { ISendEmail } from "@/interfaces/ISendEmail"
import { ISendResponse } from "@/interfaces/ISendResponse"
import { Api } from "@/provider/Api"

function SendEmail(data: ISendEmail) {
    return Api.post<ISendResponse>(`/mail`, data)
}
export const MailServices = {
    SendEmail
}
