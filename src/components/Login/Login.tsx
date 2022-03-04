import { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "~/constants";
import login from "~/services/login";
import ErrorBlock from "../ErrorBlock";
import LoadingScreen from "../LoadingScreen";

import "./login-style.scss";

const Login = () => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState<string>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrorMessage(null);
		setIsLoading(true);
		try {
			const result = await login(credentials.username, credentials.password);
			// If there's an error during login then set the error message, otherwise push the new path
			result ? setErrorMessage(result) : push(Routes.Users);
		} catch (error) {
			setErrorMessage(error.message);
		}
		setIsLoading(false);
	};

	const onChange = (e) => {
		setErrorMessage("");
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="login-page">
			<form className="login-form" onSubmit={handleSubmit}>
				<h1 className="text-center">Mygom.tech</h1>
				<input
					value={credentials.username}
					onChange={onChange}
					placeholder="Username"
					name="username"
					type="text"
					className="input mt-52px"
					required
				/>
				<input
					value={credentials.password}
					onChange={onChange}
					placeholder="Password"
					type="password"
					name="password"
					className="input mt-24px"
					required
				/>
				{isLoading ? <LoadingScreen/> : <ErrorBlock error={errorMessage} /> }
				<button type="submit" className="button mt-24px">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
