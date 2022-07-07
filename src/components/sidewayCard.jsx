import '../styling/sidewayCard.scss'

export default function sidewayCard(props) {

    const textLine1 = props.text1
    const textLine2 = props.text2
    const cardOrientation = props.orientation
    const letterSpacing = props.spacing
    return(
        <div style={{letterSpacing: letterSpacing}} id='sideway-container' className={cardOrientation}>
            <span>{textLine1}<br></br></span>
            {textLine2 !== undefined ? <span id='line2'>{textLine2}</span>: null}
        </div>
    )
}