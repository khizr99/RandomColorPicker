import Property from "./Property";
import "./PropertyList.css"

export default function PropertyList({properties}){
    return (
        <div className="PropertyList">
            {
                properties.map(i => (<Property key={i.id} {...i}/>))
            }
            
        </div>
    );
}

