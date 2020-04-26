import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';


import FormInput from './FormInput';
import SelectInput from './SelectInput';
import StepCounter from './StepCounter';
import Voucher from './Voucher';
import Checkbox from './Checkbox';


// import 'http://192.241.147.186/fonts/fonts.css';
// import Icon from './Icon';

const callbackDemo = (event) => {
    event.preventDefault();
    let input = document.querySelector(".Voucher > div > input");
    alert(input.value);
}


storiesOf('Forms', module)
    .add("Checkbox default", () => <Checkbox checked="true" />)
    .add("Checkbox primary", () => <Checkbox type="primary" checked="true" />)
    .add("Checkbox with label", () => <Checkbox checked="true" label="Don't show this pop-up again" />)