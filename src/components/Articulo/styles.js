import styled, { css } from 'styled-components'

export const Container = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(135, 86, 255, 0.6); 
    /* box-shadow: 0 8px 8px -4px lightblue; */
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    width: 450px;
    /* background:#f5f5f5 */
    
    
`

export const Image = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 250px;
    ${props => css`
        background-image: url(${props.imagen})
    `}
`

export const ProductName = styled.h4`
    font-size: 22pt;
    margin-bottom: 0
`

export const Price = styled.p`
    color: #4c4c4c;
    font-size: 18pt;
    
`

