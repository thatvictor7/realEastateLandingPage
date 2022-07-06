import '../styling/intro.scss'
import Card from './textCard.jsx'
import SidewayCard from './sidewayCard.jsx'

export default function intro() {

    const text = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.`
    const button = `Get Started >`
    const title1 = [`Now It's Easier Than Ever To Find Your Home `,[6,7]]
    const title2 = `top title`

    return(
        <div id='intro-container' className='flex-center'>
            <div id='description-section' className='flex-center'>
                <Card textSection={text} button={button} title1={title1} title2={title2} />
                <SidewayCard />
            </div>
            <div id='description-image' className='flex-center'></div>
        </div>
    )
}