import '../styling/intro.scss'
import Card from './textCard.jsx'

export default function intro() {

    const text = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.`
    const button = `Get Started >`
    const title = [`Now It's Easier Than Ever To Find Your Home `,[6,7]]

    return(
        <div id='intro-container' className='flex-center'>
            <div id='description-section' className='flex-center'>
                <Card textSection={text} button={button} title={title} />
            </div>
            <div id='description-image' className='flex-center'></div>
        </div>
    )
}