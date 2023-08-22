import axios from "axios"
import crypto from "crypto"
import https from "https"

const $axios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
  httpsAgent: new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
  })
})

class Ibge {
  static async regioes() {
    const response = await $axios.get("/localidades/regioes")

    return response.data
  }
}

;(async () => {
  const r = await Ibge.regioes()

  console.log(r)
})()
