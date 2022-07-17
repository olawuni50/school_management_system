import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom"

export const FooterContainer = styled.div`
background:#05386B;
border-radius:20px;
height:auto;
`

export const FooterWrap = styled.div`
padding: 18px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 10px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;
line-height: 1.5;

@media screen and (max-width: 420px){
    margin:0;
    padding: 10px;
    width: 100%;
}
`
export const Footer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const FooterLinkTitle = styled.h1`
font-size: 1.4rem;
margin-bottom: 16px;
color: #EEE2DC;
`

export const FooterLink = styled(LinkR)`
display: flex;
justify-content: center;
color: #fff;
text-decoration: none;
font-size: 16px;
cursor:pointer;


&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const FooterLinks = styled(LinkS)`
display: flex;
justify-content: space-between;
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 16px;
cursor:pointer;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(LinkR)`
color: #EEE2DC;
justify-self: start;
cursor: pointer;
text-decoration:none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`;

export const WebsiteRights = styled.small`
color: #EEE2DC;
margin-top: 25px;
margin-bottom: 16px;
font-size: 1rem;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
font-size: 1.2rem;
`;

export const SocialIconLink = styled.a`
color: #EEE2DC;
font-size: 24px;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const FooterP = styled.p`

`

