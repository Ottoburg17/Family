import React, {useRef} from 'react';
import { Container } from 'reactstrap';
import "./header.css"



const navLinks = [
      {
        display: 'Kezdőlap',
        url:'#'
      },
      {
        display: 'Rólunk',
        url:'#'
      },
      {
        display: 'Szolgáltatások',
        url:'#'
      },
      
];




const Header = () => {

    const menuRef = useRef()

    const menutoggle = ()=> menuRef.current.classList.toggle 
    ('active_menu')


  return (
  <header className='header'>
     <Container>
        <div className='navigation navigation d-flex align-items-center
        justify-content-between'>
            <div className='logo'>
                <h2 className='d-flex align-items-center'>
                <i class="ri-home-heart-line"></i>Családi Rutinok
                </h2>
            </div>


            <div className='nav d-flex align-items-center gap-5'>
                <div className='nav_menu' ref={menuRef} onClick=
                {menutoggle}>
                    <ul className='nav_list'>
                        {navLinks.map((item,index)=> (
                                <li key={index} className='nav_item'>
                                   <a href={item.url}>{item.display}</a>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="nav_right">
                    <p className='mb-0 d-flex align-items-center
                    gap-2'>
                        <i></i>
                    </p>    
                </div>
            </div>

            <div className='mobile_menu'>
                <span>
                    <i class="ri-menu-line" onClick={menutoggle}></i>
                </span>
            </div>
         </div> 
     </Container>
  </header>
  );
};

export default Header;
