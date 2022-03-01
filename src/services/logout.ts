import { API } from "~/constants";
import getUrl from "~/utils/getUrl";

const logout = async () => {
	const key = "token";
	const token = localStorage.getItem(key);
	const url = getUrl(API.Logout);
	token && localStorage.removeItem(key);
	const response = await fetch(url, {headers: {'Authorization': `Bearer ${token}`}});
};

export default logout;

// const login = async (username: string, password: string) => {
//     const url = getUrl(API.Login, {
//       username,
//       password,
//     });

//     const response = await fetch(url);
//     const data = await response.json();
//     const { token } = data;

//     localStorage.setItem('token', token);
//   };
