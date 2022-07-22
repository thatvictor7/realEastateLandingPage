import '../styling/articlesSection.scss'
import CustomCard from './textCard'

const text = `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

export default function articleSection() {
    return(
        <div id='articles-container' className='flex-center'>
            <div id='article-card'>
                <CustomCard width='100%' textSection={text} title1={[`De Nobis`, [2, 2]]} />
            </div>
            <div id='articles' className='flex-center'>
                <div style={{width: '50%', backgroundColor: 'greenyellow'}}>a</div>
                <div style={{width: '50%', backgroundColor: 'greenyellow'}}>b</div>
                <div style={{width: '50%', backgroundColor: 'greenyellow'}}>c</div>
                <div style={{width: '25%', backgroundColor: 'greenyellow'}}>f</div>
                <div style={{width: '25%', backgroundColor: 'greenyellow'}}>g</div>
            </div>
        </div>
    )
}