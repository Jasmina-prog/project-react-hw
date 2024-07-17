import Button from "../components/Button"
import "./Showcase.scss"

function Showcase(){
    return(
        <div className="showcase">
            <div className="container">
                <div className="showcase">
                <div className="showcasetext">
                    <h1>Artificial intelligence & Syber security</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className="btns">
                        <Button name="Get Started"/>
                        <Button name="Watch Video"/>
                    </div>
                </div>
                <div className="showcasepic"></div>
                </div>
            </div>
        </div>
    )
}

export default Showcase