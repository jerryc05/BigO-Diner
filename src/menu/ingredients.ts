export class Ingredient {
  cnName: Readonly<string>
  enName: Readonly<string>
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    this.cnName = cnName
    this.enName = enName
  }
}

class VegetableType extends Ingredient {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class SeafoodType extends Ingredient {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class MeatType extends Ingredient {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class PorkType extends MeatType {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class BeefType extends MeatType {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class ChickenType extends MeatType {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

class EggType extends Ingredient {
  constructor(cnName: Readonly<string>, enName: Readonly<string>) {
    super(cnName, enName)
  }
}

export const Rice: Readonly<Ingredient> = new Ingredient('米', 'Rice')
export const Chicken: Readonly<ChickenType> = new ChickenType('鸡肉', 'Chicken')
export const Mushroom: Readonly<VegetableType> = new VegetableType('香菇', 'Mushroom')
export const Pork: Readonly<PorkType> = new PorkType('猪肉', 'Pork')
export const PreservedEgg: Readonly<EggType> = new EggType('皮蛋', 'Preserved Egg')
export const PotherbMustard: Readonly<VegetableType> = new Ingredient('雪菜', 'Potherb Mustard')
export const Corn: Readonly<VegetableType> = new VegetableType('玉米', 'Corn')
export const Goji: Readonly<VegetableType> = new VegetableType('枸杞', 'Goji')
export const Millet: Readonly<Ingredient> = new Ingredient('小米', 'Millet')
export const MungBean: Readonly<Ingredient> = new Ingredient('绿豆', 'Mung Bean')
export const Jellyfish: Readonly<SeafoodType> = new SeafoodType('海蜇', 'Jellyfish')
export const Cucumber: Readonly<VegetableType> = new VegetableType('黄瓜', 'Cucumber')
export const Peanut: Readonly<Ingredient> = new Ingredient('花生', 'Peanut')
export const BeefShank: Readonly<BeefType> = new BeefType('牛腱', 'Beef Shank')
export const Egg: Readonly<EggType> = new EggType('蛋', 'Egg')
export const Shrimp: Readonly<SeafoodType> = new SeafoodType('虾', 'Shrimp')
export const ChickenFeet: Readonly<ChickenType> = new ChickenType('鸡爪', 'Chicken Feet')
export const Potato: Readonly<VegetableType> = new VegetableType('土豆', 'Potato')
export const WoodEar: Readonly<VegetableType> = new VegetableType('木耳', 'Wood Ear')
export const Sesame: Readonly<VegetableType> = new VegetableType('花生', 'Sesame')




export const Lemon: Readonly<Ingredient> = new Ingredient('柠檬', 'Lemon')
