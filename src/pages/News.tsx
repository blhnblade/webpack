import { sum } from '@/helpers/sum'

const News = () => {

    return(
        <div data-testid={'App'}>
            <div>Новости</div>
            <div>{sum(1, 2)}</div>
            <div data-testid={'Platform'}>PLATFORM = {__PLATFORM__}</div>
            {__IS_DEV__}
            {
                __IS_DEV__ ? 
                <div>development mode</div>
                :
                <div>production mode</div>
            }
        </div>
    )
}

export default News
