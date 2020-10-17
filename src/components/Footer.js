import React from "react";

const Footer = () => {
	let content = (
		<footer>
			<p>
				made with <span id='heart'>❤</span> by{" "}
				<span class='bold'>nuno lemos</span>
			</p>
			<p>
				inspired in design by <span class='bold'>Ian Trent @</span>{" "}
				<a
					href='https://dribbble.com/shots/6570568-Todo-List-App'
					target='blank'>
					dribbble
				</a>
			</p>
		</footer>
	);

	return content;
};

export default Footer;
