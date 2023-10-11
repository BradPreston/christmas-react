import { useState, useEffect } from 'react';
import { Item } from '../types';
import { supabase } from '../supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import './List.css';

type Props = {
	item: Item;
	showButtons: boolean;
};

export default function ListItem({ item, showButtons }: Props) {
	const [saved, setSaved] = useState<boolean>();
	const [purchased, setPurchased] = useState<boolean>();

	useEffect(() => {
		supabase
			.from('books')
			.select()
			.eq('id', item.id)
			.then(({ data }: PostgrestSingleResponse<Item[]>) => {
				setSaved(data![0].saved);
				setPurchased(data![0].purchased);
			});
	}, [item]);

	async function handleSaved() {
		await supabase.from('books').update({ saved: !saved }).eq('id', item.id);
		setSaved(!saved);
	}

	async function handlePurchased() {
		await supabase
			.from('books')
			.update({ purchased: !purchased })
			.eq('id', item.id);
		setPurchased(!purchased);
	}

	return (
		<li
			className={`list-item ${purchased ? 'purchased' : saved ? 'saved' : ''}`}>
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
			<a
				className={`item-link ${saved ? 'hide' : ''}`}
				href={item.link}
				target='_blank'>
				View on {item.store}{' '}
				<i className='fa-solid fa-arrow-up-right-from-square'></i>
			</a>
			{showButtons ? (
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
