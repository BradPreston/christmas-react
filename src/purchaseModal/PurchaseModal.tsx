import './purchaseModal.css';

type Props = {
	url: string;
	store: string;
	hidePurchaseModal: VoidFunction;
};

export default function PurchaseModal({
	url,
	store,
	hidePurchaseModal
}: Props) {
	return (
		<div className='purchaseModal'>
			<div className='purchaseModal_inner'>
				<h2 className='purchaseModal_title'>Really quick!</h2>
				<button
					id='close-kindle-instructions'
					title='Close Kindle instructions'
					onClick={() => hidePurchaseModal()}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				<p>
					If you purchase this item, please try to remember to mark it as
					purchased here. Thanks!
				</p>
				<a
					href={url}
					target='_blank'
					className='purchaseModal_link button--default'
					onClick={() => hidePurchaseModal()}>
					Continue to {store}
				</a>
			</div>
		</div>
	);
}
