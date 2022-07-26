import '../styling/articlesSection.scss'
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