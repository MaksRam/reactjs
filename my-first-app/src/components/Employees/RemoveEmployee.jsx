import React, {useState} from "react";
import state from "../../Data/state";
import SingleEmployee from "./Employee";

function RemoveItems() {

    let employeesNames = state.employees

    let removeHandler=(e)=>{
        let x=e.target.getAttribute("removeEmployee")
        updateList(list.filter(items=>items.name!==x))
    }

let [list, updateList] = useState(employeesNames);
return (
    <div>
{list.map(x=>{
    return(
        <div>
            
            <SingleEmployee name={x.name} occupation={x.occupation} tribe={x.tribe}/>
            <button removeEmployee={x.name} onClick={removeHandler}>x</button>
        </div>
    )
})}

    </div>
)

}

export default RemoveItems;