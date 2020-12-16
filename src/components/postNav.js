import React from 'react';
import { Link } from 'gatsby';

export default function PostNav({ context }) {
	const { previous, next } = context;

	return (
		<nav>
			<ul className="flex flex-wrap justify-between">
				{previous && (
					<li>
						<Link to={previous.fields.path} rel="prev">
							<span>Previous</span>
							{previous.frontmatter.title}
						</Link>
					</li>
				)}

				{next && (
					<li>
						<Link to={next.fields.path} rel="next">
							<span>Next</span>
							{next.frontmatter.title}
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
