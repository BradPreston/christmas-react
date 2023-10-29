import { useState, useEffect } from 'react';
import { Item } from '../types';
import { supabase } from '../supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import './List.css';

type Props = {
	item: Item;
	showButtons: boolean;
	purchaseModal: VoidFunction;
	table: string;
};

export default function ListItem({
	item,
	showButtons,
	purchaseModal,
	table
}: Props) {
	const [saved, setSaved] = useState<boolean>();
	const [purchased, setPurchased] = useState<boolean>();

	useEffect(() => {
		supabase
			.from(table)
			.select()
			.eq('id', item.id)
			.then(({ data }: PostgrestSingleResponse<Item[]>) => {
				setSaved(data![0].saved);
				setPurchased(data![0].purchased);
			});
	}, [item, table]);

	async function handleSaved() {
		await supabase.from(table).update({ saved: !saved }).eq('id', item.id);
		setSaved(!saved);
	}

	async function handlePurchased() {
		await supabase
			.from(table)
			.update({ purchased: !purchased })
			.eq('id', item.id);
		setPurchased(!purchased);
	}

	return (
		<li
			className={`list-item ${purchased ? 'purchased' : saved ? 'saved' : ''} ${
				showButtons && item.title.includes('Pokemon Cards') ? 'fit-height' : ''
			}`}>
			<img
				className='item-image'
				src={item.image}
				alt={item.title}
				loading='lazy'
			/>
			<p className='item-title'>{item.title}</p>
			<p className='item-price'>
				{item.max_price
					? `$${item.min_price.toFixed(2)} - $${item.max_price.toFixed(2)}`
					: `$${item.min_price.toFixed(2)}`}
			</p>
			{!showButtons || item.title.includes('Pokemon Cards') ? (
				<a
					className={`item-link ${saved ? 'hide' : ''}`}
					href={item.link}
					target='_blank'>
					View on {item.store}{' '}
					<i className='fa-solid fa-arrow-up-right-from-square'></i>
				</a>
			) : (
				<a
					className={`item-link ${saved ? 'hide' : ''}`}
					onClick={() => purchaseModal()}>
					View on {item.store}{' '}
					<i className='fa-solid fa-arrow-up-right-from-square'></i>
				</a>
			)}
			{showButtons && !item.title.includes('Pokemon Cards') ? (
				<div className='item-buttons'>
					<button
						className='button--default'
						onClick={handleSaved}
						disabled={purchased}>
						{saved ? 'Unsave' : 'Save'}
					</button>
					<button
						className='button--default'
						onClick={handlePurchased}
						disabled={purchased}>
						Purchased
					</button>
				</div>
			) : null}
		</li>
	);
}
