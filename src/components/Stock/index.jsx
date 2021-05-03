import {
    Card,
    CompanyTicker,
    CompanyName,
    DayBalance,
    DayVolume
} from './style'

const Stock = ({ abrv, companyName, volume, balance }) => {

    return (
        <>
            <Card>
                <CompanyTicker>{abrv}</CompanyTicker>
                <CompanyName>{companyName}</CompanyName>
                <DayVolume>{volume}</DayVolume>
                <DayBalance balance={balance}>
                    <spam>{balance > 0 ? '↑' : '↓' } $ {balance}</spam>
                </DayBalance>
            </Card>
        </>
    )
}

export default Stock