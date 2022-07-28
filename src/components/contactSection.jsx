import '../styling/contactSection.scss'
import homeImage from '../assets/home4.jpg'
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import { Instagram, Twitter, Facebook, Youtube } from 'react-bootstrap-icons'

function userInputSubmitButton(params) {
    return (
            <form id='input-container' className='flex-center'>
                <input id='email-input' placeholder='Pone oratio tua' type='text' />
                <Button id='email-button'>Submittere</Button>
            </form>
    )
}

export default function Contact(params) {
    return (
        <div id='contact-container'>
            <div id='contact-image' className='flex-center' style={{ backgroundImage: `url(${homeImage})` }}>
                <div id='form-container' className='flex-center'>
                    <h4>In tactu maneamus</h4>
                    <span>Lungere nostrum album manere usque hodie</span>
                    <div>
                        {userInputSubmitButton()}                    
                    </div>
                    <span>Secretum tuum colimus, notitia tua non communicamus.</span>
                </div>
            </div>
            <div id='social-container' className='flex-center'>
                <div className='social-element'>
                    <Instagram />
                    <span className='social-name'>Instagram</span>
                </div>
                <div className='social-element'>
                    <Twitter />
                    <span className='social-name'>Twitter</span>
                </div>
                <div className='social-element'>
                    <Facebook />
                    <span className='social-name'>Facebook</span>
                </div>
                <div className='social-element'>
                    <Youtube />
                    <span className='social-name'>YouTube</span>
                </div>
            </div>
        </div>
    )
}