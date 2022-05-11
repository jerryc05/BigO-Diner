import { Ingredient, Rice } from './ingredients'
import { Chef } from './chefs'

export class Item {
  cnName: Readonly<string>
  enName: Readonly<string>
  ingredients: (Readonly<Ingredient>[] | undefined)
  chefs: Readonly<Chef[]>
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    this.cnName = cnName
    this.enName = enName
    this.ingredients = ingredients
    this.chefs = chefs
  }
}

export class RiceDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class CongeeDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, [...ingredients, Rice], chefs)
  }
}

export class ColdDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class FlourDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class NoodleDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

abstract class MeatDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class PorkDish extends MeatDish {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class BeefDish extends MeatDish {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class LambDish extends MeatDish {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class ChickenDish extends MeatDish {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class SeafoodDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class VegetableDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class SoupDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class StreetFoodDish extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class Drink extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class Dessert extends Item {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}

export class DessertCake extends Dessert {
  constructor(cnName: Readonly<string>, enName: Readonly<string>, ingredients: Readonly<Ingredient>[], chefs: Readonly<Chef[]>) {
    super(cnName, enName, ingredients, chefs)
  }
}
