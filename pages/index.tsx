import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IAllPokemonsApi } from "../interfaces/IPokemon";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [pokemon, setPokemon] = useState<IAllPokemonsApi[]>([]);

	useEffect(() => {
		async function getPokemon() {
			const resp = await fetch(
				"https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
			);
			setPokemon(await resp.json());
		}
		getPokemon();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Next app</title>
			</Head>
			<div className={styles.grid}>
				{pokemon.map((pokemon) => (
					<div className={styles.card} key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`}>
							<img
								src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
								alt={pokemon.name}
							/>
							<h3>{pokemon.name}</h3>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
