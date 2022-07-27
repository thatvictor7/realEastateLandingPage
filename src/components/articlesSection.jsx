import '../styling/articlesSection.scss'
import { Button } from 'react-bootstrap'
import CustomCard from './textCard'
import image1 from '../assets/peopleWalking.jpg'
import image2 from '../assets/people-sunset.jpg'
import image3 from '../assets/friendsLaugh.jpg'
import image4 from '../assets/peopleWalking2.jpg'
import image5 from '../assets/peopleWalking3.jpg'


const text = `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

function articleCard(widthInput,image) {
    return(
        <div style={{width: widthInput, backgroundImage: `url(${image})`}} className='article'>
            <div className='article-text'>
            <h4 id='article-title4'>Verus Praedium Annuntiationes</h4>
            <h2 id='article-title2'>Ut enim ad minim veniam, quis nostrud exercitation</h2>
            <Button className='article-button' size='sm'>Lege Plus </Button>
            </div>
        </div>
    )
}

export default function articleSection() {
    return(
        <div id='articles-container' className='flex-center'>
            <div id='article-card'>
                <CustomCard width='100%' textSection={text} title1={[`De Nobis`, [2, 2]]} />
            </div>
            <div id='articles' className='flex-center'>
                {articleCard(null,image1)}
                {articleCard(null, image2)}
                {articleCard(null, image3)}
                {articleCard('23%',image4)}
                {articleCard('23%', image5)}
            </div>
        </div>
    )
}