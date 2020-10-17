import React from "react";

const Nav = () => {
	let content = (
		<nav>
			<ul>
				<li>
					<h3 className="date">Sunday, October 16</h3>
					<p className="active-tasks has-active">3 active tasks</p>
				</li>
				<li className='tabs'>
					<ul className='tabs-list'>
						<li className="tabs-list-item">All</li>
						<li className="tabs-list-item">Complete</li>
						<li className="tabs-list-item">Incomplete</li>
					</ul>
				</li>
			</ul>
		</nav>
	);

	return content;
};

export default Nav;
