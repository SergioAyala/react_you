// import { heroes } from './data/heroes'
import heroes, {owners} from '../data/heroes';

/* const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
} */

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(5));


const getHeroesByOwner = (owner) => heroes.find((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC').owner);

const result = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(result('DC'));