import styled from "styled-components"
import img from "../../Images/a3.jpg"

export const HeroContainer = styled.div`
height: 400px;
background-image: url(${img});
background-size: cover;
`

export const HeroWrapper = styled.div`
max-width: 500px;
margin:0 auto;
`

export const HeroText = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:3rem;
`

export const HeroHead = styled.h1`
display:flex;
justify-content: center;
align-items:center;
text-align:center;
margin-top:"25rem"
`
