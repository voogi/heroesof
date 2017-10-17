import {WeaponTypes} from './weapon-types';
import {RarityTypes} from './rarity-types';

export interface IItem {
    name: string;
    minDmg: number;
    maxDmg: number;
    baseType: WeaponTypes;
    speed: number;
    critChance: number;
    critMultiplier: number;
    rarity: RarityTypes;
}
