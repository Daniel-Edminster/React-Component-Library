import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Warning', module) 
    .add('Warning', () => <Button type="warning" label="Do something"/>)
    .add('Warning hollow', () => <Button type="warning-hollow" label="Do something"/>)
    .add('Warning muted', () => <Button type="warning-muted" label="Do something"/>)
    .add('Warning large', () => <Button type="warning" size="large" label="Do something"/>)
    .add('Warning hollow large', () => <Button type="warning-hollow" size="large" label="Do something"/>)
    .add('Warning muted large', () => <Button type="warning-muted" size="large" label="Do something"/>)