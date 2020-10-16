import React from "react";

const Form = () => {
	let content = (
		<div>
			<form>
				<input type='text' placeholder='Enter new task...' />
				<button>+</button>
			</form>
		</div>
	);

	return content;
};

export default Form;
