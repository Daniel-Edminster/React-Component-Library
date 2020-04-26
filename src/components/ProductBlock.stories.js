import React, { useCallback } from 'react';
import { storiesOf } from '@storybook/react';

import ProductBlock from './ProductBlock';
import './ProductBlock.css';
import Icon from './Icon';
import Button from './Button';

const desc = "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...";

storiesOf('Product Blocks', module)
    .add("Product Block", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="4" salePrice="499" permPrice="599" /> )
    .add("Product Block muted", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="5" salePrice="499" permPrice="599" color="muted" /> )
    .add("Product Block horizontal", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="4" salePrice="499" permPrice="599" orientation="horizontal" /> )
    .add("Product Block horizontal muted", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="4" salePrice="499" permPrice="599" orientation="horizontal" color="muted" /> )
    .add("Product Block horizontal muted", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="4" salePrice="499" permPrice="599" orientation="horizontal" color="muted" /> )
    .add("Product Block mini", () => <ProductBlock image="headphones" name="Beats Solo 2 On Ear Headphones - Black" rating="4" salePrice="499" permPrice="599" orientation="mini"  /> )
    .add("Product Block inline", () => <ProductBlock image="laptop" name="Apple Macbook Pro" rating="4" salePrice="499" permPrice="599" orientation="inline" description={desc} /> )
