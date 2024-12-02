import Card from "./Card"
function Tours({tours,removeTour}){
    return(<div><div><h2>Plan With Friend</h2></div>
    <div>{
        tours.map((tour)=>{
            return <Card {...tour} removeTours={removeTour}></Card>
        })}</div></div>);

}
export default Tours;