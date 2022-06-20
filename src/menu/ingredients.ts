export class Ingredient {
  cnName: Readonly<string>
  enName: Readonly<string>
  constructor (cnName: Readonly<string>, enName: Readonly<string>) {
    this.cnName = cnName
    this.enName = enName
  }
}

class VegetableType extends Ingredient {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class SeafoodType extends Ingredient {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class MeatType extends Ingredient {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class PorkType extends MeatType {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class BeefType extends MeatType {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class ChickenType extends MeatType {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

class EggType extends Ingredient {
  // constructor (cnName: Readonly<string>, enName: Readonly<string>) {
  //   super(cnName, enName)
  // }
}

export const
  Rice: Readonly<Ingredient> = new Ingredient('米', 'Rice'),
  Chicken: Readonly<ChickenType> = new ChickenType('鸡肉', 'Chicken'),
  Mushroom: Readonly<VegetableType> = new VegetableType('香菇', 'Mushroom'),
  Pork: Readonly<PorkType> = new PorkType('猪肉', 'Pork'),
  PreservedEgg: Readonly<EggType> = new EggType('皮蛋', 'Preserved Egg'),
  PotherbMustard: Readonly<VegetableType> = new Ingredient('雪菜', 'Potherb Mustard'),
  Corn: Readonly<VegetableType> = new VegetableType('玉米', 'Corn'),
  Goji: Readonly<VegetableType> = new VegetableType('枸杞', 'Goji'),
  Millet: Readonly<Ingredient> = new Ingredient('小米', 'Millet'),
  MungBean: Readonly<Ingredient> = new Ingredient('绿豆', 'Mung Bean'),
  Jellyfish: Readonly<SeafoodType> = new SeafoodType('海蜇', 'Jellyfish'),
  Cucumber: Readonly<VegetableType> = new VegetableType('黄瓜', 'Cucumber'),
  Peanut: Readonly<Ingredient> = new Ingredient('花生', 'Peanut'),
  BeefShank: Readonly<BeefType> = new BeefType('牛腱', 'Beef Shank'),
  Egg: Readonly<EggType> = new EggType('蛋', 'Egg'),
  Shrimp: Readonly<SeafoodType> = new SeafoodType('虾', 'Shrimp'),
  ChickenFeet: Readonly<ChickenType> = new ChickenType('鸡爪', 'Chicken Feet'),
  Potato: Readonly<VegetableType> = new VegetableType('土豆', 'Potato'),
  WoodEar: Readonly<VegetableType> = new VegetableType('木耳', 'Wood Ear'),
  Sesame: Readonly<VegetableType> = new VegetableType('花生', 'Sesame'),
  Lemon: Readonly<Ingredient> = new Ingredient('柠檬', 'Lemon')
