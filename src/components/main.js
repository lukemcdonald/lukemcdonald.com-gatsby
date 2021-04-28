import React from 'react';

export default function Main({ children }) {
	return <main className="lg:absolute lg:inset-0 lg:flex">{children}</main>;
}
