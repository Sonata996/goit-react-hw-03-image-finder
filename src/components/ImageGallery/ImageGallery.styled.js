import styled from 'styled-components'


export const ListImg = styled.ul`
display: flex;
list-style: none;
flex-wrap: wrap;
row-gap: 10px;
`

export const ImgElem = styled.img`
position: absolute;
height: 100%;
width: 90%;
transition: 200ms;
&:hover{
    width: 100%;
}
`