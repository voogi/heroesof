import {IItem} from './iitem';
import {ICharacter} from './icharacter';

export interface IHero extends ICharacter {
    name: string;
    level: number;
    experience: number;
    defense: number;
    inventory: Array<IItem>;
    equippedItems: {
        weapon: IItem
    }
}
