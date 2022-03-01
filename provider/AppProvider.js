import React, {useState} from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
	console.log("Hello World");
	const [name, setName] = useState("To Kill a Mocking Bird");
	const [author, setAuthor] = useState("Harper Lee");
	const [price, setPrice] = useState("$19");

	return (
		<AppContext.Provider
			value = {{
				name, author, price, setName, setAuthor, setPrice
			}}
		>
		{props.children}
		</AppContext.Provider>
	);
}

export {AppProvider, AppContext};
