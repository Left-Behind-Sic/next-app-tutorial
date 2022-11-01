export interface IAllPokemonsApi {
	id: number;
	name: string;
	image: string;
}

export interface IPokemon {
	name: string;
	type: string[];
	stats: Stat[];
	image: string;
}

export interface Stat {
	name: string;
	value: number;
}
