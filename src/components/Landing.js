// import MainButton from './MainButton'
import "./css/Landing.css"
// import logo from '../imgs/logoo.jpeg'

function Landing(){
    return(
        <section className="landing">
            <div className="container">
                <div className="landing-content">
                    <div className="landing-text">
                        <h1 className="font-q">Digital Future Pioneers</h1>
                        <div className="d-flex flex-column slogan">
                            <p  className=" text-capitalize">"We are changing the world with technology."</p>
                            <p className="ms-auto">"Bill Gates"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Landing