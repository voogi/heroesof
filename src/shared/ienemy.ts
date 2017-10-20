import {IItem} from './iitem';
import {ICharacter} from './icharacter';

export interface IEnemy extends ICharacter {
    name: string;
    level: number;
    defense: number;
    inventory: Array<IItem>;
    equippedItems: {
        weapon: IItem
    }
}
