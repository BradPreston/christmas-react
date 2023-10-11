export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			books: {
				Row: {
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
				Insert: {
					created_at?: string;
					id?: number;
					image: string;
					link: string;
					max_price?: number | null;
					min_price: number;
					purchased?: boolean;
					saved?: boolean;
					store: string;
					title?: string;
					updated_at?: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					image?: string;
					link?: string;
					max_price?: number | null;
					min_price?: number;
					purchased?: boolean;
					saved?: boolean;
					store?: string;
					title?: string;
					updated_at?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
