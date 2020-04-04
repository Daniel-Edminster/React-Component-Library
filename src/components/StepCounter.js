import React from 'react';
import './StepCounter.css';


const StepCounter = (props) => {
    let step;
    let initValue;
    let min;
    let max;
    
    props.step === null ? step = 1: step = Math.abs(props.step);
    props.value === null ? initValue = 0: initValue = props.value;

    props.min === null ? min = -(step): min = props.min;


    //make sure there's no tomfoolery with minmax and stepper
    if(!props.max) 
        max = initValue + Math.abs(min); 
    else if(props.max > min)    
        max = props.max;
    else 
        max = props.max + initValue + Math.abs(min);


    const IncrementStepCounter = () =>
    {
        let stepper = document.querySelector(".StepperInput");
        let old = parseInt(stepper.value);
        stepper.value = old + step;

        CheckMinMax();

    }

    const DecrementStepCounter = () =>
    {
        let stepper = document.querySelector(".StepperInput");
        let old = parseInt(stepper.value);
        stepper.value = old - step;

        CheckMinMax();

    }

    const CheckMinMax = () =>
    {
        let counter = document.querySelector(".StepperInput");

        let cval = parseInt(counter.value);

        // console.log(cval, min, max);

        cval > max ? counter.value = max : counter.value = counter.value;
        cval < min ? counter.value = min : counter.value = counter.value;

    }
    


    return (
        <div className="StepCounter">
            <div className="plusminus minus" onClick={DecrementStepCounter}>-</div>
            <div className="StepperInputContainer"><input  disabled=""  className="StepperInput"  type="text" value={initValue} /></div>
            <div className="plusminus" onClick={IncrementStepCounter}>+</div>
        </div>
    );



}

export default StepCounter;