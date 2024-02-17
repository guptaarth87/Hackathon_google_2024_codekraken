import './Footer.css';
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <> 
        <div id = "contactus" className=" wrapbox w-100 py-4 flex-shrink-0">
     
     
        <div className="footercomponent ">
       
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 white fnt-heading">Towards Happiness</h5>
                    <p className="small white subhead fnt-description">Don't go anywhere every solution is here!</p>
                    <p className="small white mb-0 fnt-description">&copy; Copyrights. All rights reserved. Data salt</p>
                </div>
                <div className="subdiv col-lg-7">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white fnt-heading">Quick links</h5>
                     <ul className="list-unstyled text-muted">
                        <li><Link className="link white fnt-description" to="#overview">Feedback</Link></li>
                        <li><Link className="link white fnt-description" to="#techstack">Watch Events</Link></li>
                        <li><Link className="link white fnt-description" to="#startersection">Go to top</Link></li>
                        <li><Link className="link white fnt-description" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-3 white fnt-heading">Social Media</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a className="link white fnt-description" href="#">Facebook</a></li>
                        <li><a className="link white fnt-description" href="https://www.instagram.com/../?igshid=MzRlODBiNWFlZA%3D%3D"  target="_blank">Instagram</a></li>
                        <li><a className="link white fnt-description" href="#">Linkedin</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 ">
                    <h5 className="mb-3 white fnt-heading">Contact info</h5>
                    <ul className="list-unstyled text-muted">
                        <li className='white fnt-description'>Phone No : +91 7879069987</li>

                        <li className='white fnt-description'>Instagram : @TowardsHappiness</li>
                        
                    </ul>
                </div>
               
               
                </div>
             </div>
            </div>
           
        </div>
       
         
        
    </div>
        
       
        
        </>
    )
}

export default Footer;