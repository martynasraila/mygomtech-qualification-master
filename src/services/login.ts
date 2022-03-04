import { API } from "~/constants";
import getUrl from "../utils/getUrl";

const login = async (username: string, password: string) => {
	const url = getUrl(API.Login);

	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify({ username, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		if (response.status === 404) {
			return "Username not found";
		} else if (response.status === 401) {
			return "Password is incorrect";
		}
	}

	const data = await response.json();
	const { token } = data;

	if (token) {
		localStorage.setItem("token", token);
	}
	return;
};

export default login;
