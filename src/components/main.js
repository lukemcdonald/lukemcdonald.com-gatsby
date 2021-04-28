import React from 'react';

export default function Main({ children }) {
	return (
		<main className="lg:flex" style={{ maxHeight: '675px' }}>
			{children}
		</main>
	);
}
