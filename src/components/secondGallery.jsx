import '../styling/secondGallery.scss'
import CustomCard from './textCard'

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.`

export default function secondGallery() {
    return(
        <div id='second-gallery-container' className='flex-center'>
            <div id='image-second-gal'>image</div>
            <div id='card-second-gal'>
                <CustomCard textSection={text} title1={[`This is a test as well`, [4, 5]]} />
            </div>
        </div>
    )
}