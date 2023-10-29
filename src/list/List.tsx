import type { Item } from '../types/index';
import ListItem from './ListItem';
import './List.css';
import { useState } from 'react';
import { PurchaseModal } from '../purchaseModal';

type Props = {
	items: Item[];
	showButtons: boolean;
	table: string;
};

type ModalProps = {
	url: string;
	store: string;
};

export default function List({ items, showButtons, table }: Props) {
	const [showPurchaseModal, setShowPurchaseModal] = useState(false);
	const [modalProps, setModalProps] = useState<ModalProps | null>(null);

	return (
		<>
			<ul className='list'>
				{items.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						showButtons={showButtons}
						purchaseModal={() => {
							setShowPurchaseModal(true);
							setModalProps({ url: item.link, store: item.store });
						}}
						table={table}
					/>
				))}
			</ul>
			{showPurchaseModal && (
				<>
					{modalProps && showButtons && (
						<>
							<PurchaseModal
								store={modalProps.store}
								url={modalProps.url}
								hidePurchaseModal={() => {
									setShowPurchaseModal(false);
									setModalProps(null);
								}}
							/>
						</>
					)}
				</>
			)}
		</>
	);
}
