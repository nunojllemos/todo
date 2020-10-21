/* import dependencies */
import React, { useEffect } from "react";

const Nav = ({ tab, tasks, handleTab }) => {
	/* handle selected tab */
	const handleSelectedTab = (e) => {
		e.preventDefault();
		if (e.target.className.includes("tabs-list-item")) {
			let tab = e.target.innerText;
			handleTab(tab);
		}
	};

	useEffect(() => {
		const tabs = document.querySelector(".tabs-list").children;

		for (let i = 0; i < tabs.length; i++) {
			if (tabs[i].innerText.toLowerCase() === tab.toLowerCase()) {
				tabs[i].classList.add("active");
			} else {
				tabs[i].classList.remove("active");
			}
		}
	}, [tab]);

	/* content */
	let content = (
		<nav>
			<ul>
				<li>
					<h3 className='date'>Sunday, October 16</h3>
					<p className='active-tasks has-active'>
						{tasks.length === 1
							? `${tasks.length} active task`
							: `${tasks.length} active tasks`}
					</p>
				</li>
				<li className='tabs'>
					<ul onClick={handleSelectedTab} className='tabs-list'>
						<li className='tabs-list-item all'>All</li>
						<li className='tabs-list-item complete'>Complete</li>
						<li className='tabs-list-item incomplete'>Incomplete</li>
					</ul>
				</li>
			</ul>
		</nav>
	);

	return content;
};

export default Nav;
