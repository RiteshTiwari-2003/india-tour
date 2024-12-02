function Card({id,image,info,price,name}){
    return(<div className="card">
        <img src={image} className="image"></img>
        <div className="tourinfo">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description"></div>
    </div>);

}
export default Card;