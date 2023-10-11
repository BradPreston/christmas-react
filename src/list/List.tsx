import type { Item } from '../types/index';
import ListItem from './ListItem';
import './List.css';

type Props = {
	items: Item[];
	showButtons: boolean;
};

export default function List({ items, showButtons }: Props) {
	return (
		<ul className='list'>
			{items.map((item) => (
				<ListItem key={item.id} item={item} showButtons={showButtons} />
			))}
		</ul>
	);
}
