import './css/MainTitle.css'
function MainTitle(props){
    return(
        <>
        <div className="main-title">
            <h1>{props.title}</h1>
        </div>
        </>
    )
}
export default MainTitle