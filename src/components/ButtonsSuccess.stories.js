import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Success', module) 
    .add('Success', () => <Button type="success" label="Do something"/>)
    .add('Success hollow', () => <Button type="success-hollow" label="Do something"/>)
    .add('Success muted', () => <Button type="success-muted" label="Do something"/>)
    .add('Success large', () => <Button type="success" size="large" label="Do something"/>)
    .add('Success hollow large', () => <Button type="success-hollow" size="large" label="Do something"/>)
    .add('Success muted large', () => <Button type="success-muted" size="large" label="Do something"/>)