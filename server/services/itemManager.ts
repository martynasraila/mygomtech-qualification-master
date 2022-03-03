import { employees } from "../data";

let items = [];

export const updateItem = (item) => {
	// Add to begging of array, so getItems gets the correct order for updated items
	items.unshift(item);
};

export const getItems = () => {
	return employees.map((userItem) => {
		const updatedItem = items.find(({ id }) => id === userItem.id);

		return {
			...(updatedItem || userItem),
		};
	});
};
