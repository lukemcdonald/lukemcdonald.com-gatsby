import React from 'react';
import Layout from './src/components/layout';

import 'typeface-archivo';
import './src/assets/css/styles.css';

export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}
