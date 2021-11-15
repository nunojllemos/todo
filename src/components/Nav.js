import React from 'react'
import { getWeekDay, getMonth, getDay } from '../utils/date'

const Nav = ({ tab, tasks, handleTab }) => {
	let content = (
		<nav>
			<ul>
				<li>
					<h3 className="date">{`${getWeekDay()}, ${getMonth()} ${getDay()}`}</h3>
					<p className="active-tasks has-active">{tasks.length === 1 ? `${tasks.length} active task` : `${tasks.length} active tasks`}</p>
				</li>
				<li className="tabs">
					<ul className="tabs-list">
						<li onClick={() => handleTab('all')} className={`tabs-list-item all ${tab === 'all' ? 'active' : ''}`}>
							All
						</li>
						<li onClick={() => handleTab('complete')} className={`tabs-list-item complete ${tab === 'complete' ? 'active' : ''}`}>
							Complete
						</li>
						<li onClick={() => handleTab('incomplete')} className={`tabs-list-item incomplete ${tab === 'incomplete' ? 'active' : ''}`}>
							Incomplete
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)

	return content
}

export default Nav
