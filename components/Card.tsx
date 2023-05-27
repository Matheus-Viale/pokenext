import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

type Props = {
    pokemon: Pokemon
}

export default function Card({pokemon}: Props){
    return (
        <div className={styles.card}>
            <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="120" height="120" alt={pokemon.name}/>
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}