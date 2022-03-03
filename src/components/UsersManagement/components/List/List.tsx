import { FC, useState } from "react";
import { IItem } from "~/services/getUserItems";
import ItemIcon from "./components/ItemIcon";
import updateItem from "../../../../services/updateItem";
import Modal from "react-modal";

import "./list-style.scss";
import itemHasWrongEmail from "~/utils/itemHasWrongEmail";
import ErrorBlock from "~/components/ErrorBlock";

interface IList {
	items: Array<IItem>;
	refetch: () => void;
}

interface IUpdateModal {
	item: IItem;
	refetch: () => void;
}

const UpdateModal: FC<IUpdateModal> = (props: { item; refetch }) => {
	const [showModal, setShowModal] = useState(false);
	const [newEmail, setNewEmail] = useState({ email: "", error: ""});

	const onSubmit = async () => {
		const newItem = {
			...props.item,
			email: newEmail.email,
		};
		if (itemHasWrongEmail(newItem)) {
      setNewEmail({ ...newEmail, error: "Email is incorrect"})
      // setShowModal(true)
			return;
		}
		await updateItem(newItem).then(props.refetch);
	};

	{Modal.setAppElement('body')}

	return (
		<>
			<button className="update" onClick={() => setShowModal(true)}>
				Update Email
			</button>
			<Modal
			
				className="modal"
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
				contentLabel="Example Modal"
			>
				<h1>Update Email</h1>
				<input
					placeholder="New Email"
					className="input"
					value={newEmail.email}
					onChange={(event) =>
						setNewEmail({ ...newEmail, email: event.target.value })
					}
				/>
        <ErrorBlock error={newEmail.error} />
				<div className="pt-12px text-center">
					<button
						className="button"
						onClick={() => {
							onSubmit();
						}}
					>
						Change
					</button>
					<button
						className="button ml-12px"
						onClick={() => {
							setShowModal(false);
						}}
					>
						Cancel
					</button>
				</div>
			</Modal>
		</>
	);
};

const List: FC<IList> = (props: { items; refetch }) => (
	<ul className="list">
		{props.items.map((item) => (
			<li className="item" key={item.name}>
				<ItemIcon name={item.name} />
				<div>
					<div className="title">{item.name}</div>
					<div className="description">{item.email}</div>
				</div>
				<UpdateModal item={item} refetch={props.refetch} />
			</li>
		))}
	</ul>
);

export default List;
