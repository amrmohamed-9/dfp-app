import './css/Atom.css'

function Atom (){
    return(
        <>
            <div className='tech-visual'>
                <div className="visual-effect">
                    <svg className="tech-atom" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="20" fill="#000" />
                        <ellipse cx="100" cy="100" rx="40" ry="100" fill="none" stroke="rgb(17, 35, 55)" strokeWidth="0.8" opacity="0.4" transform="rotate(60 100 100)" />
                        <ellipse cx="100" cy="100" rx="40" ry="100" fill="none" stroke="rgb(17, 35, 55)" strokeWidth="0.8" opacity="0.3" transform="rotate(30 100 100)" />
                        <ellipse cx="100" cy="100" rx="40" ry="100" fill="none" stroke="rgb(17, 35, 55)" strokeWidth="0.8" opacity="0.2" transform="rotate(-30 100 100)" />
                        <ellipse cx="100" cy="100" rx="40" ry="100" fill="none" stroke="rgb(17, 35, 55)" strokeWidth="0.8" opacity="0.2" transform="rotate(-60 100 100)" />
                        <circle cx="160" cy="100" r="4" fill="#0ff">
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="140" cy="120" r="4" fill="#0ff">
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="120" cy="140" r="4" fill="#0ff">
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 100 100" to="360 100 100" dur="5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Atom;