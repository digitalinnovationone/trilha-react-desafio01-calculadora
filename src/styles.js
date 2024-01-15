import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F1F1F1;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #1F1F1f;
    width: 20rem;
    box-shadow: .1rem .1rem 1rem #1f1f1f;
    border-radius: 1rem;
    padding: 1rem;
    padding-top: 3rem;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

