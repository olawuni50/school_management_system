import styled from "styled-components"

export const InfoContainer = styled.section`
height: auto;
background: #896eff;
`

export const InfoWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display:flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
}

`

export const InfoText = styled.div`
margin-top: 2rem;
`

export const InfoHead = styled.h1`
padding-bottom: 5px;
text-align: center;
/* color: #05386B; */
color: #896eff;
font-size: 2.5rem;
`

export const InfoP = styled.p`
/* background-color:  #C3073F; */
color: #333;
padding: 8px;
border-radius: 10px;

`