

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import StepCounter from './StepCounter';
import Voucher from './Voucher';
// import 'http://192.241.147.186/fonts/fonts.css';
// import Icon from './Icon';

storiesOf('Buttons', module)
    .add('Primary', () => <Button type="primary" label="Do something"/>)
    .add('Primary hollow', () => <Button type="primary-hollow" label="Do something"/>)
    .add('Primary muted', () => <Button type="primary-muted" label="Do something"/>)
    .add('Danger', () => <Button type="danger" label="Do something"/>)
    .add('Danger hollow', () => <Button type="danger-hollow" label="Do something"/>)
    .add('Danger muted', () => <Button type="danger-muted" label="Do something"/>)
    .add('Success', () => <Button type="success" label="Do something"/>)
    .add('Success hollow', () => <Button type="success-hollow" label="Do something"/>)
    .add('Success muted', () => <Button type="success-muted" label="Do something"/>)
    .add('Warning', () => <Button type="warning" label="Do something"/>)
    .add('Warning hollow', () => <Button type="warning-hollow" label="Do something"/>)
    .add('Warning muted', () => <Button type="warning-muted" label="Do something"/>)
    .add('Default', () => <Button type="default" label="Do something"/>)
    .add('Default hollow', () => <Button type="default-hollow" label="Do something"/>)
    .add('Default muted', () => <Button type="default-muted" label="Do something"/>)

    .add('Primary large', () => <Button type="primary" size="large" label="Do something"/>)
    .add('Primary hollow large', () => <Button type="primary-hollow" size="large" label="Do something"/>)
    .add('Primary muted large', () => <Button type="primary-muted" size="large" label="Do something"/>)
    .add('Danger large', () => <Button type="danger" size="large" label="Do something"/>)
    .add('Danger hollow large', () => <Button type="danger-hollow" size="large" label="Do something"/>)
    .add('Danger muted large', () => <Button type="danger-muted" size="large" label="Do something"/>)
    .add('Success large', () => <Button type="success" size="large" label="Do something"/>)
    .add('Success hollow large', () => <Button type="success-hollow" size="large" label="Do something"/>)
    .add('Success muted large', () => <Button type="success-muted" size="large" label="Do something"/>)
    .add('Warning large', () => <Button type="warning" size="large" label="Do something"/>)
    .add('Warning hollow large', () => <Button type="warning-hollow" size="large" label="Do something"/>)
    .add('Warning muted large', () => <Button type="warning-muted" size="large" label="Do something"/>)
    .add('Default large', () => <Button type="default" size="large" label="Do something"/>)
    .add('Default hollow large', () => <Button type="default-hollow" size="large" label="Do something"/>)
    .add('Default muted large', () => <Button type="default-muted" size="large" label="Do something"/>)

    .add("Cart", () => <Button type="icon-only" icon="blue-cart" />)
    .add("Cart with text", () => <Button type="cart-text" label="Add to Cart" icon="blue-cart" />)
    .add("Favorites", () => <Button type="icon-only" icon="blue-heart" />)
    .add("Favorites with text", () => <Button type="favorites-text" label="Add to Favorites" icon="blue-heart" />)


storiesOf('Forms', module)
    .add("Form input", () => <FormInput label="Email" placeholder="Email" />)
    .add("Form input med", () => <FormInput label="Email" placeholder="Medium Email" size="med" />)
    .add("Form input large", () => <FormInput label="Email" placeholder="Large Email" size="large" />)
    .add("Select input", () => <SelectInput />)
    .add("Select input med", () => <SelectInput size="med" />)
    .add("Select input large", () => <SelectInput size="large" />)
    .add("Select input muted", () => <SelectInput  type="muted" />)
    .add("Select input muted med", () => <SelectInput size="med" type="muted" />)
    .add("Select input muted large", () => <SelectInput size="large" type="muted" />)
    .add("Step Counter", () => <StepCounter value="0" min="-5" max="5" step="1" />)
    .add("Voucher", () => <Voucher size="med" text="Redeem" placeholder="ABC123456789"/>)
    .add("Voucher large", () => <Voucher size="large" text="Redeem" placeholder="Voucher Code"/>)
// .add('Success', () => <Button type="success" label="Do something"/>)