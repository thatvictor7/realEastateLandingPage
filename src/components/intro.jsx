import '../styling/intro.scss'
import Card from './textCard.jsx'
import SidewayCard from './sidewayCard.jsx'
import { PlusCircleFill } from 'react-bootstrap-icons';

export default function intro() {

    const text = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.`
    const button = `Incipias >`
    const title1 = [`Nunc facilius est quam umquam invenire domum tuam `,[6,7]]
    const title2 = `top title`

    return(
        <div id='intro-container' className='flex-center'>
            <div id='description-section' className='flex-center'>
                <Card textSection={text} button={button} title1={title1} title2={title2} />
                <div id='intro-side-container'>
                    <SidewayCard text1='PARTICIPES' orientation='ru' spacing='10px' />
                    <PlusCircleFill size='2.5em' />
                </div>
            </div>
            <div id='description-image' className='flex-center'></div>
        </div>
    )
}