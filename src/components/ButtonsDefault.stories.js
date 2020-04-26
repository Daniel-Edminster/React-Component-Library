import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Default', module) 
    .add('Default', () => <Button type="default" label="Do something"/>)
    .add('Default hollow', () => <Button type="default-hollow" label="Do something"/>)
    .add('Default muted', () => <Button type="default-muted" label="Do something"/>)
    .add('Default large', () => <Button type="default" size="large" label="Do something"/>)
    .add('Default hollow large', () => <Button type="default-hollow" size="large" label="Do something"/>)
    .add('Default muted large', () => <Button type="default-muted" size="large" label="Do something"/>)