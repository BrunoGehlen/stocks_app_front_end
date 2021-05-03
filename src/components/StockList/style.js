import styled from 'styled-components'

export const Button = styled.div`
    color: #f2f2f2;
    width: 50%;
    padding: 6px;
    border-radius: 6px;
    background: linear-gradient(140deg, #2d4869, #1c2d42),
                linear-gradient(90deg, white, #1c2d42);
`

export const Buttons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 4px;
`

export const Layout = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`