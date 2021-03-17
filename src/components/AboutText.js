import React from 'react'
import {Link} from 'react-router-dom'
import profile from './img/CP profile.JPG';

console.log(profile);
const socialLinks = [
    {
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1X2qrSdcdoX3lht334dySEbGOl32mcBLN/view?usp=sharing'
    },
]
function AboutText(){

    return(
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                  
                        <img src={profile} alt="" />
            
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-right">
                        <div className="story">
                            <p className="big-p">I’m a senior majoring in Human Centered Design and Engineering (HCDE) with a focus in Human-Computer Interaction (HCI) at the University of Washington.<br />
                            <br />I believe that equitable access to information and technology is key to creating an inclusive and righteous society. I have the empathy to understand the diversity of users’ perspectives and needs. It makes that everyone accesses equal opportunities regardless of race, color, sex, religion, national origin, age, disability, and sexual orientation. </p>
                            <br />
                            <ul>
                                {socialLinks.map((item, i) => <li key={i}><a href={item.url}>{item.name}</a></li>)}
                            </ul> 
                               </div>
                    <br /> </div>

                  
        
                    {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                            
                    </div> */}

                </div>
            </div>
        </section>
    )
    
}

export default AboutText