import styles from '@/styles/Home.module.css';

import Image from 'next/image';

import Card from '@/components/Card';

type Props = {
  pokemons: Pokemon[]
}

export async function getStaticProps(){

  const maxPokemons = 250;
  const api = 'https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item: Pokemon, index: number) =>{
    item.id = index + 1
  })

  return{
    props:{
      pokemons: data.results as Pokemon[],
    },
  }

}

export default function Home({pokemons}: Props) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt='Pokenext Logo'/>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: Pokemon) =>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}
