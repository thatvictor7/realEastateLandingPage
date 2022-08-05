import '../styling/navBottom.scss'
import EmailInput from './emailInput.jsx'
import emailInput from './emailInput.jsx'

export default function NavBottom(params) {
    return (
        <div id='bottom-nav-container' className='flex-center'>
            <div id='head-bottom-nav' className='flex-center'>
                <div>
                    <h5>
                        Contactus Notitia
                    </h5>
                    <span>
                        MCMXIV Via Hispaniam <br></br>Roma, Roma LXXXCCXXV
                    </span>
                </div>
                <div className='nav-column'>
                    <h5>
                        Ut Auxilium
                    </h5>
                    <span>Partus notitia</span>
                    <span>Venditionis Leges Condicionesque</span>
                    <span>Redit et Redde</span>
                    <span>Secretum Notitia</span>
                    <span>Communi Quaestionum</span>
                </div>
                <div className='nav-column'>
                    <h5>
                        Alia Genera
                    </h5>
                    <span>Domum(45)</span>
                    <span>Litore Domus(6)</span>
                    <span>Cameram(19)</span>
                    <span>Villa(27)</span>
                    <span>Conclavia(52)</span>
                </div>
                <div className='nav-column'>
                    <EmailInput />
                </div>
            </div>
            <div id='end-bottom-nav' className='flex-center'>
                <span>@2020, All Rights Reserved</span>
                <span>Designed by: www.victormo.net</span>
            </div>
        </div>
    )
}