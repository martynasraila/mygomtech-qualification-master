import { FC } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import itemHasOldEmail from "~/utils/itemHasOldEmail";
import itemHasReusedEmail from "~/utils/itemHasReusedEmail";
import itemHasWrongEmail from "~/utils/itemHasWrongEmail";
import FilterTab from "./components/FilterTab";

import "./filter-style.scss";

interface IFilter {
	items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
	const weakItemsCount = items.reduce((count, item) => count + 1, 0);

	const reusedItemsCount = items.reduce((count,item, index) => itemHasReusedEmail(item, items,index) ? count+1 : count, 0);

	const oldItemsCount = items.reduce((count,item) => itemHasOldEmail(item) ? count+1 : count, 0);

	const wrongItemsCount = items.reduce((count,item) => itemHasWrongEmail(item) ? count+1 : count, 0);

	return (
		<div className="filter">
			<FilterTab title="All" count={items.length} path={Routes.Users} />
			<FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak} />
			<FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
			<FilterTab title="Old" count={oldItemsCount} path={Routes.Old} />
			<FilterTab title="Wrong" count={wrongItemsCount} path={Routes.Wrong} />
		</div>
	);
};

export default Filter;
