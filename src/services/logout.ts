import { API } from "~/constants";
import getUrl from "~/utils/getUrl";

const logout = async () => {
	const key = "token";
	const token = localStorage.getItem(key);
	const url = getUrl(API.Logout);
	token && localStorage.removeItem(key);
	await fetch(url, {headers: {'Authorization': `Bearer ${token}`}});
};

export default logout;
