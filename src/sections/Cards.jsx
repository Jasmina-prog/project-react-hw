import Card from "../components/Card"
import "./Cards.scss"

const cardData = [
    {id: 0, title: "Naxly as the Winners in Global Agency Awards"},
    {id: 1, title: "Expert Prespective Agency Awards"},
    {id: 2, title: "Business Prespective Global Agency Awards"},
    {id: 3, title: "Value for Results in Global Agency Awards"},
    {id: 4, title: "Global Experience in Agency Awards"}
]
function Cards(){
    return(
        <div className="cards">
            {
                cardData.map((el, id)=>{
                    return(
                        <Card title={el.title} key={id}/>
                    )
                })
            }
            
        </div>
    )
}

export default Cards