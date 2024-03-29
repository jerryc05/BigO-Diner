// import { Chef } from './chefs'
import { Ingredient, Rice } from './ingredients'

export type Category = Readonly<{ cnName: string; enName: string }>

export type ItemPrice = [number, number]

export abstract class Item {
  cnName: Readonly<string>
  enName: Readonly<string> | null
  ingredients: Readonly<Ingredient>[] | null
  // chefs: Readonly<Chef[]>
  price: Readonly<ItemPrice>
  durMin: Readonly<number>
  abstract category: Category
  constructor(
    cnName: Item['cnName'],
    enName: Item['enName'],
    ingredients: Item['ingredients']
    // chefs: Readonly<Chef[]>
  ) {
    this.cnName = cnName
    this.enName = enName
    this.ingredients = ingredients
    // this.chefs = chefs
    this.price = [
      // todo
      Math.floor(Math.random() * 15),
      Math.floor(Math.random() * 15),
    ] // todo
    this.durMin = 59 * 60 + 59 // todo
  }
}

export class RiceDish extends Item {
  category = {
    cnName: '饭类',
    enName: 'Rice',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class CongeeDish extends Item {
  category = {
    cnName: '粥类',
    enName: 'Congee',
  }
  constructor(
    cnName: Readonly<string>,
    enName: Readonly<string> | null,
    ingredientsBesidesRice: Readonly<Ingredient>[] | null
    // chefs: Readonly<Chef[]>
  ) {
    super(
      cnName,
      enName,
      [...(ingredientsBesidesRice ?? []), Rice] /* , chefs */
    )
  }
}

export class ColdDish extends Item {
  category = {
    cnName: '冷菜类',
    enName: 'Cold Dish',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class WheatenDish extends Item {
  category = {
    cnName: '面食类',
    enName: 'Wheaten',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class NoodleDish extends Item {
  category = {
    cnName: '面条类',
    enName: 'Noodle',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

abstract class MeatDish extends Item {
  category = {
    cnName: '肉类',
    enName: 'Meat',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class PorkDish extends MeatDish {
  override category = {
    cnName: '猪肉类',
    enName: 'Pork',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class BeefDish extends MeatDish {
  override category = {
    cnName: '牛肉类',
    enName: 'Beef',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class LambDish extends MeatDish {
  override category = {
    cnName: '羊肉类',
    enName: 'Lamb',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class ChickenDish extends MeatDish {
  override category = {
    cnName: '鸡肉类',
    enName: 'Chicken',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class DuckDish extends MeatDish {
  override category = {
    cnName: '鸭肉类',
    enName: 'Duck',
  }
}

export class RabbitDish extends MeatDish {
  override category = {
    cnName: '兔肉类',
    enName: 'Rabbit',
  }
}

export class SeafoodDish extends Item {
  category = {
    cnName: '海鲜类',
    enName: 'Seafood',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class VegetableDish extends Item {
  category = {
    cnName: '素菜类',
    enName: 'Vegetable',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class SoupDish extends Item {
  category = {
    cnName: '汤类',
    enName: 'Soup',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class StreetFoodDish extends Item {
  category = {
    cnName: '小吃类',
    enName: 'Street Food',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class DairyDish extends Item {
  category = {
    cnName: '乳品类',
    enName: 'Dairy Food',
  }
}

export class Drink extends Item {
  category = {
    cnName: '饮品类',
    enName: 'Drink',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class Dessert extends Item {
  category = {
    cnName: '甜点类',
    enName: 'Dessert',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}

export class DessertCake extends Dessert {
  override category = {
    cnName: '蛋糕类',
    enName: 'Cake',
  }
  // constructor (cnName: Readonly<string>, enName: Readonly<string> | null, ingredients: Readonly<Ingredient>[] | null, chefs: Readonly<Chef[]>) {
  //   super(cnName, enName, ingredients, chefs)
  // }
}
