import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const ValidacaoSchema = yup.object({
    nome: yup.string().required('Preencha o seu nome completo'),
    email: yup.string().required('Preencha um e-mail válido'),
    telefone: yup.string().required('Preencha um número de teledone válido'),
    entrega: yup.string().required('Preencha uma data'),
    body: yup.string().required('Preencha o campo de mensagem enviando uma descrição do pedido'),
    tamanho: yup.string().required('Preencha o tamanho em centimetros do seu pedido'),
    // arquivo: yup.string().required('Envie um arquivo que represente uma descrição do seu pedido'),
})

export const ValidacaoResolvida = yupResolver(ValidacaoSchema)