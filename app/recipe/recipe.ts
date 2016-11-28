export class Recipe {
    _id: string;
    title: string;
    subTitle: string
    description: string;
    cookTime: string;
    imagePath: string;
    serves: number ;
    calories: number ;
    rating: number;
    directions: [Direction];
    ingredients: [Ingredient];
    otherStuff: [Stuff];
    tips: [Tip];
}

export class adminSection {
    edit:boolean;
}

export class Ingredient extends adminSection {
    amount: string;
    name: string;
    unit: string;
}

export class Direction extends adminSection{
    order: number;
    title: string;
}


export class Stuff extends adminSection{
    amount: string;
    name: string;
    unit: string;
}


export class Tip extends adminSection{
    order: number;
    value: string;
}

