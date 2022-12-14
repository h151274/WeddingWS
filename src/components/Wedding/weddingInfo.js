import styled from "styled-components";

export const WeddingContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
margin-bottom: 40px;


@media screen and (max-width: 764px){
    height: 3000px;
}
@media screen and (max-width: 530px){
    height: 2700px;
}
@media screen and (max-width: 412px){
    height: 2200px;
}
`
export const WeddingWrapper = styled.div`
max-width: 1400px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 10px;
padding: 0 50px;



@media screen and (max-width: 764px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const WeddingCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-width: 550px;
width: 100%;
height: 100%;
padding: 30px;
transition: all 0.2 ease-in-out;
`
export const WeddingPicture = styled.img`
height: 100%;
width: 100%;
margin-bottom: 10px;
`

export const WeddingH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const WeddingH2 = styled.h2`
font-size: 30px;
margin-bottom: 10px;
`
export const WeddingTopLine = styled.p`
color: #000;
font-size: 20px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;
export const WeddingP = styled.p`
font-size: 20px;
text-align:center;
`
