import React from 'react';
import Layout from 'components/layout';

import 'typeface-archivo';
import 'assets/css/styles.css';

export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}
