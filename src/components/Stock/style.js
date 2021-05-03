import styled from 'styled-components'

export const Card = styled.div`
    width: 95%;
    height: 100px;
    background: linear-gradient(140deg, #2d4869, #1c2d42);
    margin: auto;
    border-radius: 8px;
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 14px; 
`

export const CompanyTicker = styled.div`
    color: #f2f2f2;
    font-size: 1.3rem;
    padding: 10px;
    align-self: start;
    margin-left: 6px;
`

export const CompanyName = styled.div`
    color: #f2f2f2;
    font-size: 1rem;
    padding: 10px;
    margin-left: 6px;
    align-self: start;
    
    white-space: nowrap;
    overflow: hidden;
    
    @media screen and (max-width: 340px) {
        max-width: 40%;
    }
`

export const DayVolume = styled.div`
    color: #f2f2f2;
    font-size: 1rem;
    padding: 10px;
    margin-right: 8px;
    align-self: flex-end;
`

export const DayBalance = styled.div`
    height:30px;
    width:120px;
    border-radius: 6px;
    color: #2f2f2f;
    background-color: ${({balance}) => balance > 0 ? '#3aedd6': '#f76769'};
    display: flex;
    justify-content: center;
    margin-right: 12px;
    margin-top: 8px;
    align-self: flex-end;
    
    > spam {
        font-size: 1rem;
        margin-top: 6px;
    }   
`