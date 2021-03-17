import React from 'react'
import {useLocation, Link} from 'react-router-dom'


function Menu() {

    const location = useLocation();
    const menuLinks = [
        {
           name: 'Work',
           url: '/',
           active: false
        },
        {
            name: 'About',
            url: '/about',
            active: false
         },
         
         {
            name: 'Resume',
            url: 'https://drive.google.com/file/d/1X2qrSdcdoX3lht334dySEbGOl32mcBLN/view?usp=sharing',
            active: false
         }
    ]
    
    const displayLinks = menuLinks.map((link, i) => {
        if(link.url.startsWith('http')){
          return <li key={i}>
            <a href={link.url} target="_blank">{link.name}</a>
          </li>
        }
        return <li key={i}>
          <Link to={link.url} className={location.pathname === link.url ? 'active' : null}>
            {link.name}
          </Link>
        </li>
      })

    return (
        <ul className="main-menu">
            {displayLinks}
        </ul>
    )

}

export default Menu