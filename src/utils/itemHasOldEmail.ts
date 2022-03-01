import {IItem} from "~/services/getUserItems";

const itemHasOldEmail = (item: IItem, itemList: Array<IItem>) => {
  const reusedItems = itemList.filter((listItem) => (
    
    
    listItem.email === item.email
  ))
  console.log("Comparing if item has old email");
  console.log();
  
  return reusedItems.length > 1;
};

export default itemHasOldEmail;
