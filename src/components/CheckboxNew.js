import React, { Component } from 'react';

class CheckboxNew extends Component {
    constructor() {
        super();

        let label, checked;
        let classList = "";
        let dataChecked = 0;
    
        props.checked === false ? checked = false : checked = true;
        
        checked === false ? dataChecked = 0 : dataChecked = 1;

        this.state = {
            checked: checked
        }
        
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




    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CheckboxNew;