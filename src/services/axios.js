import axios from 'axios'

export const StockMarket = axios.create({
    baseURL: 'http://localhost:5000/'
})