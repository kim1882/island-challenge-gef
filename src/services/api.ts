import axios from 'axios'

const BASE_URL = 'https://blockchain.info'

export const getLatestBlockHash = () => {
  return axios.get(`${BASE_URL}/latestblock?cors=true`)
}

export const getTransactions = (hash: string) => {
  return axios.get(`${BASE_URL}/rawblock/${hash}?cors=true`)
}
