import '../styling/navBottom.scss'

export default function NavBottom(params) {
    return (
        <div id='bottom-nav-container' className='flex-center'>
            <div id='head-bottom-nav' className='flex-center'>
                <div>
                    <h5>
                        Contactus Notitia
                    </h5>
                    <p>
                        MCMXIV Via Hispaniam <br></br>Roma, Roma LXXXCCXXV
                    </p>
                </div>
                <div className='nav-column'>
                    <h5>
                        Ut Auxilium
                    </h5>
                    <span>Partus notitia</span>
                    <span>Venditionis Leges Condicionesque</span>
                    <span>Redit et Redde</span>
                    <span>Secretum Notitia</span>
                </div>
                <div>
                    <h5>
                        Alia Genera
                    </h5>
                </div>
                <div>
                    d
                </div>
            </div>
            <div id='end-bottom-nav'>
                bottom section
            </div>
        </div>
    )
}