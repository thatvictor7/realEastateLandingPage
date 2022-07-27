import '../styling/contactSection.scss'
import homeImage from '../assets/home4.jpg'
import { Instagram, Twitter, Facebook, Youtube } from 'react-bootstrap-icons'

export default function Contact(params) {
    return(
        <div id='contact-container'>
            <div id='contact-image' className='flex-center' style={{backgroundImage: `url(${homeImage})`}}>
                first
            </div>
            <div id='social-container' className='flex-center'>
                <div className='social-element'>
                    <Instagram />
                    <span>Instagram</span>
                </div>
                <div className='social-element'>
                    <Twitter />
                    <span>Twitter</span>
                </div>
                <div className='social-element'>
                    <Facebook />
                    <span>Facebook</span>
                </div>
                <div className='social-element'>
                    <Youtube />
                    <span>YouTube</span>
                </div>
            </div>
        </div>
    )
}