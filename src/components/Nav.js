import React from "react";

const Nav = () => {
	let content = (
		<nav>
			<ul>
				<li>
					<h3>Sunday</h3>
					<p>3 active tasks</p>
				</li>
				<li>
					<ul>
						<li>All</li>
						<li>Complete</li>
						<li>Incomplete</li>
					</ul>
				</li>
			</ul>
		</nav>
	);

	return content;
};

export default Nav;
