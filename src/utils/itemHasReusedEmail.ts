import { IItem } from "~/services/getUserItems";

const itemHasReusedEmail = (item: IItem, itemList: Array<IItem>, index) => {
	return itemList.some((listItem, i) => index !== i && listItem.email === item.email)
};

export default itemHasReusedEmail;
