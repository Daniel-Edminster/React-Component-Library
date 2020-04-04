import React from 'react';
import './SelectInput.css';


const SelectInput = (props) => {

    let classList = "SelectInput-input";

    if(props.size)
    {
        if(props.size === "med")
        {
            classList += " med";
        }
        else if(props.size === "large")
        {
            classList += " large";
        }
    }

    if(props.type)
    {
        if(props.type === "muted")
        {
            classList += " muted";
        }
    }


    return(

        <select className={classList} >
            <option>Select</option>
         </select>
    )


}

export default SelectInput;