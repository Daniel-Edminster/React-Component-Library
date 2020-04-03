

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
// import Icon from './Icon';

storiesOf('Button', module)
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

    // .add('Cart with text', () => <Button type="cart-text" label="Add To Cart"/>)
    // .add('Cart', () => <Button type="cart" />)
    // .add('Favorites with text', () => <Button type="favorites-text" label="Add To Favorites"/>)
    // .add('Favorites', () => <Button type="favorites" />)

    .add("Cart with text", () => <Button type="cart-text" label="Add to Cart" icon="blue-cart" />)


storiesOf('Forms', module)
// .add('Success', () => <Button type="success" label="Do something"/>)