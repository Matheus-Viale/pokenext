import Image from "next/image";
import  styles from "../../styles/Pokemon.module.css"

import { useRouter } from "next/router";

type Props = {
    pokemon: Pokemon
}

export const getStaticPaths = async() => {

    const maxPokemons = 100;
    const api = 'https://pokeapi.co/api/v2/pokemon';

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((pokemon: Pokemon, index: number) =>{
        return{
            params: {pokemonId: (index + 1).toString()}
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async(context: any) => {
    const id = context.params.pokemonId;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data =  await res.json();

    return {
        props: {pokemon: data}
    }
}

export default function Pokemon({pokemon}: Props){

    const router = useRouter();

    if(router.isFallback) {
        return <div className={styles.loading}><Image src="/images/pokeLoad.gif" width="200" height="200" alt="Loading"/><h3>Carregando...</h3></div>
    }


    return (
        <div className={styles.container}>
            <h1>{pokemon.name}</h1>
            <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width="200" height="200" alt={pokemon.name}/>
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item: any, index: number) =>(
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h3>Altura:</h3>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h3>Peso:</h3>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}