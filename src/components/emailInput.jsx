import '../styling/emailInput.scss'
import { Button } from 'react-bootstrap'

export default function EmailInput(params) {
    return (
        <div>
            <form id='input-container' className='flex-center'>
                <input id='email-input' placeholder='Pone oratio tua' type='text' />
                <Button id='email-button'>Submittere</Button>
            </form>
        </div>
    )
}