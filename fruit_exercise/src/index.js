import foods from './foods';
import {choice, remove} from './helpers';

let fruit = choice(foods);

console.log(`Id like one ${fruit} please`);

let remaining = remove(foods, fruit);

console.log(`We have ${remaining.length} fruit left`)