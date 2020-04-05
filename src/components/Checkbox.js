import React from 'react';
import './Checkbox.css';

const Checkbox = (props) => {
    let label, checked;
    let classList = "";
    let dataChecked = 0;

    props.checked === false ? checked = false : checked = true;
    
    checked === false ? dataChecked = 0 : dataChecked = 1;
    
    if(props.label) label = props.label;
    
    if(!props.type) {
        classList += "Checkbox-default";
    } 
    else if(props.type === 'primary') {
        classList += "Checkbox-primary";
    }

    if(checked) {
        if(props.type !=="primary")
            classList += " checked";
        else 
             classList += " checked-primary";
    }

    // console.log("def");

    const toggleCheck = event => {
        let el = event.target;
        let p = "primary";
        dataChecked === 0 ? dataChecked = 1 : dataChecked = 0;

        el.setAttribute("data-checked", dataChecked);

        if(props.type === p)
        {
            if(el.classList.contains(`checked-${p}`))
                el.classList.remove(`checked-${p}`);
            else
                el.classList.add(`checked-${p}`);

        }
        if(el.classList.contains("checked")) 
            el.classList.remove("checked");
        else
            el.classList.add("checked");

    }

    return(
        <div className="Checkbox-container">
        <div className={classList} onClick={toggleCheck} data-checked={dataChecked}>
        </div> <label className="check-label">{label}</label>
        </div>
    );


}

export default Checkbox;