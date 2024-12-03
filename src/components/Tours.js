import Card from "./Card"
function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Friend</h2>
            </div>
            <div className="cards">
                {tours.map((tour)=>{
                    return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>// a good ruloe of thumb is that element inside the map() calls need key
                })}
            </div>
        </div>
    );

}
export default Tours;