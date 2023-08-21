import axios from "axios"
const cep = "08970000"
const url = `https://viacep.com.br/ws/${cep}/json`
axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((e) => console.log(e.message))
