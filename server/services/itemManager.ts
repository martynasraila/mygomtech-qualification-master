import { employees } from '../data';

let items = [];

// Doesn't update, adds new items instead, need to check id and splice old item with new one
export const updateItem = (item) => {
  items.push(item);
};

export const getItems = () => {
  return employees.map((userItem) => {
    const updatedItem = items.find(({ id }) => id === userItem.id);

    return {
      ...(updatedItem || userItem),
    };
  })
};



