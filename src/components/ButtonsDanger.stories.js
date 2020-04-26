import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Danger', module)
    .add('Danger', () => <Button type="danger" label="Do something"/>)
    .add('Danger hollow', () => <Button type="danger-hollow" label="Do something"/>)
    .add('Danger muted', () => <Button type="danger-muted" label="Do something"/>)
    .add('Danger large', () => <Button type="danger" size="large" label="Do something"/>)
    .add('Danger hollow large', () => <Button type="danger-hollow" size="large" label="Do something"/>)
    .add('Danger muted large', () => <Button type="danger-muted" size="large" label="Do something"/>)