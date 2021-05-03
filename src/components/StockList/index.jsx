import Stock from '../Stock'
import { Layout, Buttons, Button } from './style'
import { useEffect, useState } from 'react'
import { StockMarket } from '../../services/axios'

const StockList = () => {

    const [stockList, setStockList] = useState([])

    const sortByBalance = () => {
        setStockList([...stockList.sort((a, b) => b.balance - a.balance)])
    }

    const sortByVolume = () => {
        setStockList([...stockList.sort((a, b) => b.volume - a.volume)])
    }

    const fetchData = async () => {
        const { data: { companies } } = await StockMarket.get('/companies')

        const companyList = companies.map(company => {
            company.balance = company.transactions.reduce((a, b) => {
                return a + b.transaction_value
            }, 0).toFixed(2)

            company.volume = company.transactions.length
            return company
        })

        setStockList([...companyList])
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Layout>
                <header>
                    <h1>
                        Stock Market
                    </h1>
                </header>
                <Buttons>
                    <Button onClick={() => sortByVolume()}>sort by volume</Button>
                    <Button onClick={() => sortByBalance()}>sort by balance</Button>
                </Buttons>
                {
                    stockList.map((stock, index) => {
                        return (<Stock
                            key={index}
                            abrv={stock.abreviation}
                            companyName={stock.company_name}
                            volume={stock.volume}
                            balance={stock.balance}
                        />)
                    })
                }
            </Layout>
        </>
    )
}

export default StockList

