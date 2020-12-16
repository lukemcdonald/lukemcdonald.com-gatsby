import React from 'react';
import { Link } from 'gatsby';

export default function PostsNav({ context }) {
	const {
		previousPagePath,
		nextPagePath,
		humanPageNumber,
		numberOfPages,
	} = context;

	return (
		<nav role="navigation">
			<ul>
				{previousPagePath && (
					<li>
						<Link to={previousPagePath} rel="prev">
							{nextPagePath ? 'Previous' : 'Previous Page'}
						</Link>
					</li>
				)}

				{nextPagePath && (
					<li>
						<Link to={nextPagePath} rel="next">
							{previousPagePath ? 'Next' : 'Next Page'}
						</Link>
					</li>
				)}
			</ul>

			{numberOfPages > 1 && (
				<div>
					<span className="hidden">Page</span>
					{`${humanPageNumber} / ${numberOfPages}`}
				</div>
			)}
		</nav>
	);
}
