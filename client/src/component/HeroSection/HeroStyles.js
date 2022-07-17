import styled, {keyframes} from "styled-components"

const Spinner = keyframes`
from{
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform:rotateY(0deg);
}
to {
    -moz-transform: rotateY(-360deg);
    -ms-transform: rotateY(-360deg);
    transform: rotateY(-360deg);
}
`

export const HeroContainer = styled.section`
background-color: #1f2471;
/* border-radius: 11px;
background: linear-gradient(145deg, #cacaca, #f0f0f0);
box-shadow:  25px 25px 38px #676767,
             -25px -25px 38px #ffffff; */
width: auto;
height: 550px;
position:relative;
width:100vw;

@media screen and (max-width: 768px){
    height: auto;    
}

&::before,
&::after{
    content: '';
    position:absolute;
    height: 100px;
    bottom: -70px;
    right: 0;
    left: 0;
    background: #fff;
    transform: skewY(30deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
}
`

export const HeroWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px){
    flex-direction: column
}
`

export const HeroText = styled.div`

`

export const HeroHead = styled.h5`
margin-top: 7rem;
font-size: 14px;
/* color:#896eff; */
color:#fff;
padding-bottom: 5px;

@media screen and (max-width: 768px){
    margin-top: none;
    padding-left: 20px
}
`

export const HeroHead2 = styled.h1`
// color:#1f2471;
color:#fff;
width: 70%;
font-size: 2rem;
line-height: 1.3;
padding-bottom: 10px;

@media screen and (max-width: 768px){
    padding-left: 20px;
    width: 79%;
    font-size:1.7rem
}
`

export const HeroP = styled.p`
line-height: 1.5;
font-size: 1rem;
padding-top:10px;
padding-bottom: 2rem;
/* color: #896eff; */
color: #fff;

@media screen and (max-width: 768px){
    max-width: 350px;
   margin-left: 15px;
   
}
`

export const HeroImage = styled.div`
margin-bottom:1.5rem;

`

export const Image = styled.img`
display:block;
margin-left: auto;
margin-right: auto;
width: 60%;
margin-top:3rem;
animation-name: ${Spinner};
animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
animation-iteration-count: infinite;
animation-duration: 30s;


:hover{
    animation-play-state: paused;
}

`