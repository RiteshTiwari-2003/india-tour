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

// why we use useState when we do any changes on any peace of code then we want to perform that change also on ui then for this we useState hook
// useeffect is basically use for manage side effect, side effect is basiclly a change which happen on any component of website nand due to that event any other apart from that component change occur 
//this is called side effect