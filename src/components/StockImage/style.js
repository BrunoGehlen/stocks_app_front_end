import styled from 'styled-components'

export const Image = styled.img`
    visibility: hidden;
    width: 0%;

    @media screen and (min-width: 992px) {
        width: 60%;
        height: 100vh;
        visibility: visible;
    }
`