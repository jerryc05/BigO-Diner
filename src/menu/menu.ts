import {
  BeefShank,
  Chicken,
  ChickenFeet,
  Corn,
  Cucumber,
  Egg,
  Goji,
  Jellyfish,
  Lemon,
  Millet,
  MungBean,
  Mushroom,
  Peanut,
  Pork,
  Potato,
  PotherbMustard,
  PreservedEgg,
  Sesame,
  Shrimp,
  WoodEar,
} from './ingredients'
import {
  BeefDish,
  ChickenDish,
  ColdDish,
  CongeeDish,
  DairyDish,
  Dessert,
  DessertCake,
  Drink,
  DuckDish,
  Item,
  LambDish,
  NoodleDish,
  PorkDish,
  RabbitDish,
  RiceDish,
  SeafoodDish,
  SoupDish,
  StreetFoodDish,
  VegetableDish,
  WheatenDish,
} from './menuTypes'

// https://github.com/Anduin2017/HowToCook/tree/master/dishes

export const menu: readonly Item[] = [
  new CongeeDish('香菇鸡肉粥', 'Congee w/ Chicken & Mushrooms', [
    Chicken,
    Mushroom,
  ]),
  new CongeeDish('皮蛋瘦肉粥', 'Congee w/ Pork & Preserved Eggs', [
    Pork,
    PreservedEgg,
  ]),
  new CongeeDish('雪菜肉丝粥', 'Congee w/ potherb mustard & shredded pork', [
    PotherbMustard,
    Pork,
  ]),
  new CongeeDish('八宝粥', 'Mixed Congee', null),
  new CongeeDish('玉米碴子粥', 'Congee w/ Crushed Corn', [Corn, Goji]),
  new CongeeDish('小米粥', 'Millet Congee', [Millet, Goji]),
  new CongeeDish('白米粥', 'Rice Congee', []),
  new CongeeDish('玉米瘦肉青菜粥', 'Rice Congee', []),
  new ColdDish('凉拌海蜇头', 'Jellyfish Head Salad', [Jellyfish]),
  new ColdDish('凉拌黄瓜', 'Cucumber Salad', [Cucumber]),
  new ColdDish('拍黄瓜', 'Smashed Cucumber Salad', [Cucumber]),
  new ColdDish('油炸花生米', 'Fried Peanuts', [Peanut]),
  new ColdDish('五香牛肉', 'Multi Spiced Beef', [BeefShank]),
  new ColdDish('酱牛肉', 'Spiced Beef', [BeefShank]),
  new ColdDish('卤蛋', 'Marinated Egg', [Egg]),
  new ColdDish('酸辣虾', 'Sour & Spicy Shrimp', [Shrimp]),
  new ColdDish('泰式柠檬虾', null, null),
  new ColdDish('柠檬酸辣（无骨）鸡爪', 'Sour & Spicy Chicken Feet', [
    ChickenFeet,
    Lemon,
  ]),
  new ColdDish('凉拌土豆丝', 'Shredded Potato Salad', [Potato]),
  new ColdDish('酸辣土豆丝', 'Sour & Spicy Shredded Potato', [Potato]),
  new ColdDish('白糖西红柿', 'Sour & Spicy Shredded Potato', [Potato]),
  new ColdDish('凉拌木耳', 'Wood Ear Salad', [WoodEar]),
  new ColdDish('凉拌藕片', 'Lotus root Salad', [WoodEar]),
  new ColdDish('五彩拉皮', 'Wood Ear Salad', [WoodEar]),
  new WheatenDish('馅饼（自选）', 'Pie (Customized Filling)', []),
  new WheatenDish('油条', 'Fried Dough Fritter', []),
  new WheatenDish('葱油饼', 'Scallion Crepe', []),
  new WheatenDish('农家酱香饼', 'Soy Flavored Flatbread Crepe', []),
  new WheatenDish('鸡蛋饼', 'Egg Crepe', [Egg]),
  new WheatenDish('春饼', 'Spring Crepe', []),
  new WheatenDish('麻酱红糖饼', 'Brown Sugar Crepe w/ Sesame Paste', [Sesame]),
  new WheatenDish('煎饺', 'Fried Dumpling', []),
  new WheatenDish('水饺', 'Dumpling', []),
  new WheatenDish('红油抄手', 'Spicy Wonton in Chili Oil', null),
  new WheatenDish('云吞', 'Wonton', null),
  new WheatenDish('韭菜盒子', 'Fried Chinese Chives Pocket', null),
  new WheatenDish('泡菜饼', null, null),
  new WheatenDish('海鲜煎饼', null, null),
  new WheatenDish('蚵仔煎', 'Oyster Omelette', null),
  new NoodleDish('香菇鸡肉面', null, null),
  new NoodleDish('红烧牛肉面', null, null),
  new NoodleDish('排骨卤肉面', null, null),
  new NoodleDish('重庆小面', null, null),
  new NoodleDish('榨菜肉丝面', null, null),
  new NoodleDish('雪菜肉丝面', null, null),
  new NoodleDish('鸡汤面', null, null),
  new NoodleDish('麻酱拌面', null, null),
  new NoodleDish('鸡丝凉面', null, null),
  new NoodleDish('大排面', null, null),
  new NoodleDish('炒面', null, null),
  new NoodleDish('炸酱面', null, null),
  new NoodleDish('米粉', null, null),
  new NoodleDish('打卤面', null, null),
  new NoodleDish('手擀面（面类型）', null, null),
  new NoodleDish('番茄鸡蛋面', null, null),
  new NoodleDish('什锦面', null, null),
  new NoodleDish('荞麦面（面类型）', null, null),
  new NoodleDish('芸豆焖面', null, null),
  new NoodleDish('意大利肉酱面', null, null),
  new NoodleDish('中式肉酱面', null, null),
  new NoodleDish('番茄肥牛面', null, null),
  new NoodleDish('阳春面', null, null),
  new NoodleDish('油泼面', null, null),
  new NoodleDish('冷面', null, null),
  new NoodleDish('烤冷面', null, null),
  new NoodleDish('日本拉面', null, null),
  new NoodleDish('虾仁奶油意面', null, null),
  new NoodleDish('番茄肉酱意面', null, null),
  new NoodleDish('青椒牛柳意面', null, null),
  new NoodleDish('过油肉拌面', null, null),
  new NoodleDish('羊排焖面', null, null),
  new NoodleDish('烤肉拌面', null, null),
  new RiceDish('卤肉饭', null, null),
  new RiceDish('照烧鸡肉饭', null, null),
  new RiceDish('照烧牛肉饭', null, null),
  new RiceDish('蛋炒饭', null, null),
  new RiceDish('盖浇饭', null, null),
  new RiceDish('煲仔饭', null, null),
  new RiceDish('鸡翅包饭', null, null),
  new RiceDish('小龙虾盖饭', null, null),
  new RiceDish('日式牛丼饭', null, null),
  new RiceDish('日式滑蛋猪排饭', null, null),
  new RiceDish('茄汁芝士焗饭', null, null),
  new RiceDish('海鲜糯米鸡', null, null),
  new RiceDish('三角烤饭团', null, null),
  new RiceDish('午餐肉烤饭团', null, null),
  new RiceDish('卤猪脚饭', null, null),
  new RiceDish('猪油拌饭', null, null),
  new RiceDish('韩式拌饭', null, null),
  new PorkDish('小酥肉', null, null),
  new PorkDish('干炸里脊', null, null),
  new PorkDish('糖醋里脊', null, null),
  new PorkDish('锅包肉', null, null),
  new PorkDish('溜肉段', null, null),
  new PorkDish('（芸豆）土豆炖排骨', null, null),
  new PorkDish('糖醋排骨', null, null),
  new PorkDish('豆豉排骨', null, null),
  new PorkDish('酱排骨', null, null),
  new PorkDish('避风塘排骨', null, null),
  new PorkDish('蒜香排骨', null, null),
  new PorkDish('腐乳排骨', null, null),
  new PorkDish('鱼香肉丝', null, null),
  new PorkDish('京酱肉丝', null, null),
  new PorkDish('青椒肉丝', null, null),
  new PorkDish('水煮肉片', null, null),
  new PorkDish('木须肉', null, null),
  new PorkDish('洋葱炒肉', null, null),
  new PorkDish('红烧肉', null, null),
  new PorkDish('梅菜扣肉', null, null),
  new PorkDish('韩式辣白菜炒肉', null, null),
  new PorkDish('烤猪蹄', null, null),
  new PorkDish('炸猪蹄', null, null),
  new PorkDish('红烧猪蹄', null, null),
  new PorkDish('黄豆焖猪蹄', null, null),
  new PorkDish('酱猪肘', null, null),
  new PorkDish('烤猪肉串', null, null),
  new PorkDish('烤五花肉', null, null),
  new PorkDish('咖喱猪排饭', null, null),
  new PorkDish('红烧狮子头', null, null),
  new PorkDish('蒸排骨', null, null),
  new PorkDish('豆瓣炖排骨', null, null),
  new PorkDish('肉沫麻婆豆腐', null, null),
  new PorkDish('辣椒炒肉', null, null),
  new PorkDish('脆皮猪五花', null, null),
  new PorkDish('回锅肉', null, null),
  new PorkDish('粉蒸肉', null, null),
  new PorkDish('粉蒸排骨', null, null),
  new PorkDish('照烧猪肉', null, null),
  new PorkDish('虎纠荔枝肉', null, null),
  new PorkDish('水煮肉片', null, null),
  new PorkDish('冬瓜酿肉', null, null),
  new PorkDish('猪皮冻', null, null),
  new PorkDish('咕噜肉', null, null),
  new PorkDish('山西过油肉', null, null),
  new PorkDish('蒜苔炒肉沫', null, null),
  new PorkDish('黄瓜炒肉', null, null),
  new BeefDish('孜然牛肉', null, null),
  new BeefDish('葱爆牛肉', null, null),
  new BeefDish('酸汤肥牛', null, null),
  new BeefDish('肥牛金针菇卷', null, null),
  new BeefDish('煎牛排', null, null),
  new BeefDish('烤牛排', null, null),
  new BeefDish('烤牛肉串', null, null),
  new BeefDish('红烧牛腩', null, null),
  new BeefDish('番茄牛腩', null, null),
  new BeefDish('土豆烧牛腩', null, null),
  new BeefDish('咖喱牛肉', null, null),
  new BeefDish('黑椒牛仔骨', null, null),
  new BeefDish('杭椒牛柳', null, null),
  new BeefDish('香菜炒牛百叶', null, null),
  new BeefDish('黑椒牛肉粒', null, null),
  new BeefDish('香菜拌牛肉', null, null),
  new BeefDish('柱候牛腩', null, null),
  new LambDish('孜然羊肉', null, null),
  new LambDish('葱爆羊肉', null, null),
  new LambDish('麻酱拌肥羊', null, null),
  new LambDish('羊蝎子', null, null),
  new LambDish('烤羊肉串', null, null),
  new LambDish('鱼羊鲜', null, null),
  new LambDish('法式香煎小羊排', null, null),
  new ChickenDish('大盘鸡', null, null),
  new ChickenDish('口水鸡', null, null),
  new ChickenDish('炸鸡', null, null),
  new ChickenDish('盐酥鸡', null, null),
  new ChickenDish('鸡米花', null, null),
  new ChickenDish('可乐鸡翅', null, null),
  new ChickenDish('红烧鸡翅', null, null),
  new ChickenDish('蒜香鸡翅', null, null),
  new ChickenDish('橙香鸡翅', null, null),
  new ChickenDish('奥尔良鸡翅', null, null),
  new ChickenDish('小鸡炖蘑菇', null, null),
  new ChickenDish('地锅鸡', null, null),
  new ChickenDish('避风塘鸡翅', null, null),
  new ChickenDish('蜂蜜烤鸡翅', null, null),
  new ChickenDish('烤鸡', null, null),
  new ChickenDish('照烧鸡', null, null),
  new ChickenDish('杏鲍菇炒鸡丁', null, null),
  new ChickenDish('辣子鸡', null, null),
  new ChickenDish('宫保鸡丁', null, null),
  new ChickenDish('咖喱鸡', null, null),
  new ChickenDish('炸鸡排', null, null),
  new ChickenDish('爆浆鸡排', null, null),
  new ChickenDish('炸鸡柳', null, null),
  new ChickenDish('烤鸡胸', null, null),
  new ChickenDish('黄焖鸡', null, null),
  new ChickenDish('宫保鸡丁', null, null),
  new ChickenDish('凉拌鸡丝', null, null),
  new ChickenDish('姜葱捞鸡', null, null),
  new DuckDish('北京烤鸭', null, null),
  new RabbitDish('冷吃兔', null, null),
  new SeafoodDish('红烧带鱼', null, null),
  new SeafoodDish('炸带鱼', null, null),
  new SeafoodDish('红烧鱼', null, null),
  new SeafoodDish('松鼠桂鱼', null, null),
  new SeafoodDish('烤鱼', null, null),
  new SeafoodDish('地锅鱼', null, null),
  new SeafoodDish('蒜蓉大虾', null, null),
  new SeafoodDish('干烧大虾', null, null),
  new SeafoodDish('凤尾大虾', null, null),
  new SeafoodDish('油焖大虾', null, null),
  new SeafoodDish('葱烧海参', null, null),
  new SeafoodDish('肉沫海参', null, null),
  new SeafoodDish('麻辣小龙虾', null, null),
  new SeafoodDish('水煮海鲜', null, null),
  new SeafoodDish('香辣蟹', null, null),
  new SeafoodDish('辣炒蛤蜊', null, null),
  new SeafoodDish('凉拌八爪鱼', null, null),
  new SeafoodDish('铁板鱿鱼', null, null),
  new SeafoodDish('清蒸鲈鱼', null, null),
  new SeafoodDish('西兰花炒虾仁', null, null),
  new SeafoodDish('蒜蓉扇贝', null, null),
  new SeafoodDish('红酒香煎三文鱼', null, null),
  new SeafoodDish('珍珠丸子', null, null),
  new SeafoodDish('麻辣香锅', null, null),
  new SeafoodDish('鱼头泡饼', null, null),
  new SeafoodDish('黄油芝士虾', null, null),
  new SeafoodDish('炸虾天妇罗', null, null),
  new SeafoodDish('白灼虾', null, null),
  new SeafoodDish('糖醋鲤鱼', null, null),
  new SeafoodDish('蛏抱蛋', null, null),
  new SeafoodDish('咖喱炒蟹', null, null),
  new SeafoodDish('水煮鱼', null, null),
  new SeafoodDish('蒜蓉生蚝', null, null),
  new SeafoodDish('清蒸生蚝', null, null),
  new SeafoodDish('虾仁滑蛋', null, null),
  new VegetableDish('醋溜白菜', null, null),
  new VegetableDish('醋溜土豆丝', null, null),
  new VegetableDish('酸辣土豆丝', null, null),
  new VegetableDish('蒜蓉青菜', null, null),
  new VegetableDish('上汤娃娃菜', null, null),
  new VegetableDish('番茄炒鸡蛋', null, null),
  new VegetableDish('冬瓜虾仁', null, null),
  new VegetableDish('萝卜大虾', null, null),
  new VegetableDish('茄盒', null, null),
  new VegetableDish('藕盒', null, null),
  new VegetableDish('肉沫茄子', null, null),
  new VegetableDish('青椒玉米面', null, null),
  new VegetableDish('煮玉米', null, null),
  new VegetableDish('鱼香茄子', null, null),
  new VegetableDish('红烧茄子', null, null),
  new VegetableDish('拔丝地瓜', null, null),
  new VegetableDish('拔丝土豆', null, null),
  new VegetableDish('干煸豆角', null, null),
  new VegetableDish('干煸大头菜', null, null),
  new VegetableDish('蚝油生菜', null, null),
  new VegetableDish('豆豉鲮鱼油麦菜', null, null),
  new VegetableDish('干锅花菜', null, null),
  new VegetableDish('干锅豆角', null, null),
  new VegetableDish('干锅土豆片', null, null),
  new VegetableDish('干锅豆腐', null, null),
  new VegetableDish('包菜鱿鱼粉丝煲', null, null),
  new VegetableDish('蒜蓉西兰花', null, null),
  new VegetableDish('韭菜炒蛋', null, null),
  new VegetableDish('芹菜炒肉沫', null, null),
  new VegetableDish('炒合菜', null, null),
  new VegetableDish('洋葱炒蛋', null, null),
  new VegetableDish('皮蛋擂青椒', null, null),
  new VegetableDish('素三鲜', null, null),
  new VegetableDish('龙吟鸡腿', null, null),
  new VegetableDish('手撕包菜', null, null),
  new VegetableDish('椒盐玉米', null, null),
  new VegetableDish('榄菜肉沫四季豆', null, null),
  new VegetableDish('糖拌番茄', null, null),
  new VegetableDish('虎皮青椒', null, null),
  new VegetableDish('地三鲜', null, null),
  new SoupDish('绿豆汤', 'Mung Bean Soup', [MungBean]),
  new SoupDish('紫菜蛋花汤', null, null),
  new SoupDish('番茄鸡蛋汤', null, null),
  new SoupDish('排骨汤', null, null),
  new SoupDish('鸡汤', null, null),
  new SoupDish('清炖羊肉汤', null, null),
  new SoupDish('鱼汤', null, null),
  new SoupDish('番茄牛腩汤', null, null),
  new SoupDish('牛尾汤', null, null),
  new SoupDish('猪脚汤', null, null),
  new SoupDish('鸡蛋蘑菇汤', null, null),
  new SoupDish('平桥豆腐羹', null, null),
  new SoupDish('乌鸡汤', null, null),
  new SoupDish('玉米排骨汤', null, null),
  new SoupDish('西湖牛肉羹', null, null),
  new SoupDish('宋嫂鱼羹', null, null),
  new SoupDish('菠菜蛋汤', null, null),
  new SoupDish('菠菜蛋汤', null, null),
  new SoupDish('菠菜豆腐汤', null, null),
  new SoupDish('韩式大酱汤', null, null),
  new SoupDish('韩式辣海鲜汤', null, null),
  new SoupDish('韩式辣豆腐汤', null, null),
  new SoupDish('冬瓜排骨汤', null, null),
  new SoupDish('白菜丸子汤', null, null),
  new SoupDish('胡辣汤', null, null),
  new SoupDish('关东煮', null, null),
  new SoupDish('萝卜大骨汤', null, null),
  new SoupDish('萝卜炖牛腩', null, null),
  new SoupDish('肉沫蛋羹', null, null),
  new SoupDish('猪肚鸡', null, null),
  new SoupDish('蟹黄豆腐煲', null, null),
  new SoupDish('英式蛤蜊浓汤', null, null),
  new SoupDish('番茄虾滑汤', null, null),
  new SoupDish('文思豆腐', null, null),
  new SoupDish('白菜豆腐鱼汤', null, null),
  new SoupDish('罗宋汤', null, null),
  new SoupDish('卤煮火锅', null, null),
  new SoupDish('椰子鸡汤/火锅', null, null),
  new StreetFoodDish('豆腐脑', null, null),
  new StreetFoodDish('臭豆腐', null, null),
  new StreetFoodDish('卤煮', null, null),
  new StreetFoodDish('章鱼小丸子', null, null),
  new StreetFoodDish('大阪烧', null, null),
  new StreetFoodDish('麻辣香锅', null, null),
  new StreetFoodDish('麻辣烫', null, null),
  new StreetFoodDish('麻辣拌', null, null),
  new StreetFoodDish('铁板烧', null, null),
  new StreetFoodDish('烧烤', null, null),
  new StreetFoodDish('韩国烤肉', null, null),
  new StreetFoodDish('串串香', null, null),
  new StreetFoodDish('石锅拌饭', null, null),
  new StreetFoodDish('爆肚', null, null),
  new StreetFoodDish('鸭血粉丝汤', null, null),
  new StreetFoodDish('千层饼', null, null),
  new StreetFoodDish('寿司', null, null),
  new StreetFoodDish('千层蛋糕', null, null),
  new StreetFoodDish('半熟芝士条', null, null),
  new StreetFoodDish('鸭舌', null, null),
  new StreetFoodDish('鸭脖', null, null),
  new StreetFoodDish('炸串', null, null),
  new StreetFoodDish('肠粉', null, null),
  new StreetFoodDish('鸡汁土豆泥', null, null),
  new StreetFoodDish('铁板豆腐', null, null),
  new StreetFoodDish('手工凉皮', null, null),
  new DairyDish('温泉蛋', null, null),
  new DairyDish('溏心蛋', null, null),
  new DairyDish('茶叶蛋', null, null),
  new Drink('芝芝莓莓', null, null),
  new Drink('草莓牛乳茶', null, null),
  new Drink('满杯葡萄', null, null),
  new Drink('芒果冰沙', null, null),
  new Drink('杨枝甘露', null, null),
  new Drink('芝芝桃桃', null, null),
  new Drink('棒打鲜橙', null, null),
  new Drink('西瓜啵啵', null, null),
  new Drink('声声乌龙', null, null),
  new Drink('生椰拿铁', null, null),
  new Drink('薄荷拿铁', null, null),
  new Drink('茶冻撞奶', null, null),
  new Drink('草莓大福', null, null),
  new Drink('红茶玛奇朵', null, null),
  new Drink('芝芝椰椰', null, null),
  new Drink('芝芝芒芒', null, null),
  new Drink('芝芝西瓜', null, null),
  new Drink('桃桃优格', null, null),
  new Drink('葡萄多多', null, null),
  new Drink('菠萝多多', null, null),
  new Drink('西柚多多', null, null),
  new Drink('满杯西柚', null, null),
  new Drink('红豆冰沙', null, null),
  new Drink('豆浆', null, null),
  new Drink('豆奶', null, null),
  new Drink('百香果橙子特调', null, null),
  new Drink('酸梅汤', null, null),
  new Dessert('蛋挞', null, null),
  new Dessert('提拉米苏', null, null),
  new Dessert('千层系列', null, null),
  new DessertCake('巧克力蛋糕', null, null),
  new DessertCake('巧克力布朗尼', null, null),
  new DessertCake('熔岩冰山', null, null),
  new Dessert('芒果小丸子', null, null),
  new Dessert('泡芙', null, null),
  new Dessert('水果盒子', null, null),
  new Dessert('雪媚娘', null, null),
  new Dessert('蒜蓉面包', null, null),
  new Dessert('绿豆椰汁小丸子', null, null),
  new DessertCake('草莓雪山蛋糕', null, null),
  new DessertCake('抹茶慕斯蛋糕', null, null),
  new DessertCake('玫瑰荔枝蛋糕', null, null),
]
