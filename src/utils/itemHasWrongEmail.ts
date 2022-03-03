import { IItem } from "~/services/getUserItems";

const itemHasWrongEmail = (item: IItem) => {
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (!item.email || regex.test(item.email) === false) {
		return true;
	} else {
		return false;
	}
};

export default itemHasWrongEmail;
