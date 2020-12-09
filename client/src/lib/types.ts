export type Location = 'bananaBunches' | 'healthyTown' | 'dairyPark'
    | 'coolCloud' | 'cluckyCoop' | 'yoghurtMountains'
    | 'aquaOcean' | 'fruityOrchard' | 'bushLand'
    | 'vegieZone' | 'zombieWasteland' | 'wickedWaterway'
    | 'supplyStore' | 'grazingLands' | 'grainField';

export interface Character {
    name: string;
    superName: string;
    avatar: any;
    superAvatar: any;
    superpowers: string;
    use: string;
    likes: string;
    superLikes: string;
    location: Location;
    about: string;
    recipe: string;
}