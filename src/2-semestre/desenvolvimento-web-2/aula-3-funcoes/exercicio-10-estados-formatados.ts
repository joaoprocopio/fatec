import axios from "axios"
import crypto from "crypto"
import https from "https"

interface IRegiao {
  id: number
  sigla: string
  nome: string
}

interface IEstado {
  id: number
  sigla: string
  nome: string
  regiao: IRegiao
}

const $axios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
  httpsAgent: new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
  })
})

class Ibge {
  static async regioes(): Promise<IRegiao[] | never[]> {
    try {
      const response = await $axios.get("/localidades/regioes")

      return response.data
    } catch (e) {
      return []
    }
  }

  static async estados(id: number): Promise<IEstado[] | never[]> {
    try {
      const response = await $axios.get(`/localidades/regioes/${id}/estados`)

      return response.data
    } catch (e) {
      return []
    }
  }
}

;(async () => {
  const r = await Ibge.estados(1)

  if (!r.length) return

  r.forEach((estado: IEstado) => {
    console.log(`${estado.nome} - ${estado.sigla}`)
  })
})()
