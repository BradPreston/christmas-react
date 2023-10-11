import './kindleInstructions.css';

type Props = {
	closeInstructions: VoidFunction;
};

// eslint-disable-next-line no-empty-pattern
export default function KindleInstructions({ closeInstructions }: Props) {
	return (
		<div id='kindle-instructions'>
			<section id='instructions-wrapper'>
				<button
					id='close-kindle-instructions'
					title='Close Kindle instructions'
					onClick={() => closeInstructions()}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				<h2>Purchasing a Kindle book as a gift?</h2>
				<p>To purchase a Kindle copy of a book as a gift:</p>
				<ol>
					<li>Select "Kindle" as the format</li>
					<li>Click "Buy for others" (Found below the option to "Buy now")</li>
					<li>Enter my email (bap5393@gmail.com) in the "To" field</li>
					<li>Enter your name in the "From" field</li>
					<li>Add a message if you'd like in the "Message" field</li>
					<li>
						Choose a date in the "Delivery Date" (This will be the day I'll have
						access to the book on my Kindle)
					</li>
					<li>Click "Place your order"</li>
				</ol>
				<p>
					Note:{' '}
					<em>
						I will not recieve the book or be notified of the purchase until the
						date selected in the "Delivery Date" field.
					</em>
				</p>
			</section>
		</div>
	);
}
