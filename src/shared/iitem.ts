import {WeaponTypes} from './weapon-types';
import {RarityTypes} from './rarity-types';
import {ItemType} from './item-types';

export interface IItem {
    id: number;
    name: string;
    minDmg: number;
    maxDmg: number;
    strength?: number;
    agility?: number;
    intelligence?: number;
    baseWeaponType: WeaponTypes;
    baseType: ItemType;
    speed: number;
    critChance: number;
    critMultiplier: number;
    rarity: RarityTypes;
    equipped: boolean;
}
