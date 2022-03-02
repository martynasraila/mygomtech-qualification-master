import {IItem} from "~/services/getUserItems";

const itemHasOldEmail = (item: IItem) => {
    const date = new Date(item.createdAt).getTime();
    const now = new Date().getTime();
    return (now - date > 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/ * 30/*days*/)
     
};

export default itemHasOldEmail;
