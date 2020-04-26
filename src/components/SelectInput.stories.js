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
    .add("Select input med", () => <SelectInput size="med" />)
    .add("Select input large", () => <SelectInput size="large" />)
    .add("Select input muted", () => <SelectInput  type="muted" />)
    .add("Select input muted med", () => <SelectInput size="med" type="muted" />)
    .add("Select input muted large", () => <SelectInput size="large" type="muted" />)
    