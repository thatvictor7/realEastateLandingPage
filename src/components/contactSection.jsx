import '../styling/contactSection.scss'
import homeImage from '../assets/home4.jpg'

export default function Contact(params) {
    return(
        <div id='contact-container'>
            <div id='contact-image' className='flex-center' style={{backgroundImage: `url(${homeImage})`}}>
                first
            </div>
            <div>
                second
            </div>
        </div>
    )
}