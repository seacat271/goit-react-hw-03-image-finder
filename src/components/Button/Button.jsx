import {Button} from "./Button.styled"

const ButtonLoadMore = ({handleLoadMore}) => {
    return (
        <Button onClick={() => {handleLoadMore()}}>Load more</Button>
    )
}
export default ButtonLoadMore;