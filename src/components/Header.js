import React,{useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";


function Header() {
  const [burgerStatus , SetBurgerStatus] = useState(0);
  return (
    <Container>
      <a href="/#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
      <NavLink to="#model-S">MOdel S</NavLink>
      <NavLink to="#model-3">Model 3</NavLink>
      <NavLink to="#model-X">Model X</NavLink>
      <NavLink to="#model-y">Model Y</NavLink>

        
      </Menu>
      <RightMenu>
        <a href="/#">shop </a>
        <a href="/#">account</a>
        <CustomMenu onClick={()=> SetBurgerStatus(true)}/>
      </RightMenu>
      <BurgetNav show={burgerStatus}>
         <CustomeClose onClick={()=> SetBurgerStatus(false)} />
         <li><a href="/#">Model S</a></li>
         <li><a href="/#">Model 3</a></li>
         <li><a href="/#">Model X</a></li>
         <li><a href="/#">Model Y</a></li>
        <li><a href="/#">Existing inventory</a></li>
        <li><a href="/#">Used inventory</a></li>
        <li><a href="/#">Trade-in</a></li>
        <li><a href="/#">Cyber truck</a></li>
        <li><a href="/#">Roadster</a></li>
        
        
      </BurgetNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between; // this is when the menus display become none so space b/w is even
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index:1;
`;
const Menu = styled.div`
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
  display:none;
    
  }
`;

const RightMenu = styled.div`
display:flex;
align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

  }
`;
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`;
const CustomeClose =styled(CloseIcon)`
cursor:pointer;
position:fixed;
top:2rem;
right:2rem;
`
const BurgetNav =styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding: 5rem 20px;
text-align:start;
transform:${props => props.show ? `translateX(0)`:`translateX(100%)`};
transition:transform 0.8s ease-in-out;
li{
  padding:10px 0;
  border-bottom: 1px solid rgba(0,0,0,.2)

  a{
    font-weight:600;
  }
}
`