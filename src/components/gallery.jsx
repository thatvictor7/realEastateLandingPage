import '../styling/gallery.scss'
import Card from './textCard.jsx'
import Carousel from 'react-bootstrap/Carousel'
import House1 from '../assets/traditional-home.jpg'
import House2 from '../assets/home1.jpg'
import House3 from '../assets/home2.jpg'

const title1 = [`Now It's Easier Than Ever To Find Your Home `, [4, 6]]

export default function gallery(props) {
    return (
        <div id='gallery-container' className='flex-center'>
            <div id='top-section-container'>
                <Card textSection='aaa' button='Ire Emere >' title1={title1} title2='Collectio moderna' />
                <Carousel id='carousel'>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={House1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Occidens Domum</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carousel-image"
                            src={House2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Orientalem Domum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={House3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Domus Aquilonis</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}