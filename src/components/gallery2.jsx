import '../styling/gallery.scss'
import Card from './textCard'

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Blandit massa enim nec dui nunc mattis enim.

Lacus laoreet non curabitur gravida. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.Leo vel orci porta non. Nec sagittis aliquam malesuada bibendum. Nullam eget felis eget nunc lobortis mattis aliquam. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Purus viverra accumsan in nisl nisi scelerisque eu. Dictum sit amet justo donec. Scelerisque varius morbi enim nunc faucibus a. 

Hendrerit gravida rutrum quisque non tellus orci. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. In tellus integer feugiat scelerisque varius. Neque convallis a cras semper auctor neque vitae. 

Id semper risus in hendrerit gravida.`

export default function Gallery2(props) {
    return(
        <div className='flex-center' id='bottom-section-container'>
            <div id='left-section-gallery' className='full-width'>column1</div>
            <div id='mid-section-gallery' className='full-width'>
                <Card width='100%' textSection={text} title1={[`De Nobis`, [2,2   ]]} />
            </div>
            <div id='right-section-gallery' className='full-width'>column3</div>
        </div>
    )
}