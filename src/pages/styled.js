import styled from 'styled-components';

const ButtonSair = styled.button`

display:flex;
justify-content:flex-start;
flex-direction:row;
padding: 25px;
height:35px;
background-color:transparent;
width: 120px;
color: #ffffff;
font-weight: bold;
font-size: 21px;
margin: 0 auto;
border: 0px solid transparent;  
cursor:pointer;

 &:hover{
     margin-bottom: 10px;
     border-bottom: 4px solid #ffffff;
      
  
 }

 
 
   @media(max-width: 860px) {
      
           &:hover{
               width:200px;
               height: 60px;
               background:inherit;
               padding-top: 25px;
           }
           .sidebar &:hover{
               opacity: 1;
               visibility:visible;
               background-color: #5988df;
           }

}
`;

export default ButtonSair;