import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons / Icons', module) 
    .add("Cart", () => <Button type="icon-only" icon="blue-cart" />)
    .add("Cart with text", () => <Button type="cart-text" label="Add to Cart" icon="blue-cart" />)
    .add("Favorites", () => <Button type="icon-only" icon="blue-heart" />)
    .add("Favorites with text", () => <Button type="favorites-text" label="Add to Favorites" icon="blue-heart" />)