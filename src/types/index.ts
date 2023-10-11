export type Item = {
	created_at: string;
	id: number;
	image: string;
	link: string;
	max_price: number | null;
	min_price: number;
	purchased: boolean;
	saved: boolean;
	store: string;
	title: string;
	updated_at: string;
};
