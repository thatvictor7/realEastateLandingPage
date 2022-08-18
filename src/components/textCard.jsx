import '../styling/textCard.scss'
import Button from 'react-bootstrap/Button'

function cardTitleColorize(text,colorPositions) {
    const textArray = text.split(' ')

    const startPosition = colorPositions[0] - 1
    const endPosition = colorPositions[1] - 1

    let regularText = []
    let colorizedText = []
    let additionalText = []

    let res = ''

    let test = <p></p>

    textArray.map((e,i) => {
        if (i < startPosition) {
            regularText.push(e)
        }
        else if (i >= startPosition && i <= endPosition) {
            // console.log('greater than: ' + i);
            colorizedText.push(e)
        }
        else {
            additionalText.push(e)
        }
    
    })
    // console.log(typeof regularText.join(' '));
    res = res + regularText.join(' ')
    // test += <p>fsdf</p>
    // console.log(test);
    return(
        <div>
            <p>{regularText.join(' ')} <span id='emphasized'>{colorizedText.join(' ')}</span> </p>  
        </div>
    )
}

export default function TextCard(props) {

    // const button = props.button
    const textSection = props.textSection
    const buttonText = props.button
    const title1 = props.title1
    const title2 = props.title2
    const customWidth = props.width
    
    
    return(
        <div style={{width: customWidth}} id='card-container'>
            <h4 id='top-card'>{title2}</h4>
            <h1>{cardTitleColorize(title1[0], title1[1])}</h1>
            <p>{textSection}</p>

            {/* <Button >{buttonText}</Button> */}
            <div>{buttonText ? <Button >{buttonText}</Button> : null} </div>
        </div>
    )
}