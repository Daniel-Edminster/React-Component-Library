import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Primary', module)
    .add('Primary', () => <Button type="primary" label="Do something"/>)
    .add('Primary hollow', () => <Button type="primary-hollow" label="Do something"/>)
    .add('Primary muted', () => <Button type="primary-muted" label="Do something"/>)
    .add('Primary large', () => <Button type="primary" size="large" label="Do something"/>)
    .add('Primary hollow large', () => <Button type="primary-hollow" size="large" label="Do something"/>)
    .add('Primary muted large', () => <Button type="primary-muted" size="large" label="Do something"/>)