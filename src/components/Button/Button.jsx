import { ContainerButton, LoadMoreButton } from "./Button.styled"



export const Button = ({onClickButton}) =>{
    return(
        <ContainerButton>
            <LoadMoreButton onClick={onClickButton}>Load more</LoadMoreButton>
        </ContainerButton>
    )
}