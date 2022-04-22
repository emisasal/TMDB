import pickard_404 from "../static/pickard_404.png"

const NotFound = () => {
    return (
        <div>
            <br/>
            <h2 className="title title-custom">404 - Not Found!</h2>
            <br/>
            <div className="image-404">
            <img src={pickard_404} alt="Not Found" />
            </div>
            </div>
        
    )
}

export default NotFound