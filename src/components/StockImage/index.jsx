import {
    Image
} from './style'
import stockImage from '../../assets/stocks_img_1.jpg'

const StockImage = () => {
    return (
        <>
            <Image alt={'Stock Market'} src={stockImage} />
        </>
    )
}

export default StockImage
