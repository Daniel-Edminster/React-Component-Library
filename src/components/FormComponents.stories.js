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
    .add("Form input", () => <FormInput label="Email" placeholder="Email" />)
    .add("Form input med", () => <FormInput label="Email" placeholder="Medium Email" size="med" />)
    .add("Form input large", () => <FormInput label="Email" placeholder="Large Email" size="large" />)
