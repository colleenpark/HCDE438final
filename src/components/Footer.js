import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {

    const date = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/geonhui-park/'
        },

        {
                name: 'Email',
                url:'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gunh98@gmail.com'
        }
    ]

    return(
        <footer id="footerSection">
            <div className="container-fluid-small">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-4 copyright">
                        <div className="footer-menu">
                            <h5 className="sub-title">Contact</h5>
                            <ul>
                                {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                            </ul>
                        </div>
                        <p></p>
                        <p>Copyright © {date} Colleen Park.</p>
                    </div>
                   
        
                </div>

            </div>
        </footer>
    )

}

export default Footer