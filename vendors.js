const vendor = (name, item, desc, nameEn, itemEn, descEn) => ({name,item,desc,nameEn,itemEn,descEn});

// Curated visitor shortlists. Night-market vendors and opening days can change;
// each card links to a live Google search so travelers can confirm before visiting.
const marketVendors = {
  0: [
    vendor("豪大大雞排","香酥大雞排","士林最有辨識度的超大片雞排，外皮酥脆、適合兩人分食。","Hot-Star Large Fried Chicken","Giant fried chicken","An iconic oversized cutlet with a crisp crust—easy to share."),
    vendor("忠誠號蚵仔煎","蚵仔煎","老字號台灣小吃，粉漿邊緣煎得焦香，搭配甜鹹醬汁。","Zhong Cheng Hao","Oyster omelet","A classic omelet with crisp edges, oysters and sweet-savory sauce."),
    vendor("家鄉碳烤香雞排","炭烤雞排","先炸後烤、刷上醬汁，炭香比一般雞排更有層次。","Ji Xiang Charcoal Chicken","Charcoal chicken cutlet","Fried, grilled and glazed for a deeper smoky flavor."),
    vendor("王子起司馬鈴薯","起司馬鈴薯","熱馬鈴薯淋上濃郁起司醬，可選火腿、玉米等配料。","Prince Cheese Potato","Cheese potato","Hot potato covered with rich cheese sauce and customizable toppings."),
    vendor("士林生煎包","生煎包","底部焦脆、內餡多汁，是邊走邊吃的實用選擇。","Shilin Pan-fried Buns","Pan-fried buns","Juicy buns with crisp bottoms, ideal for eating on the go.")
  ],
  1: [
    vendor("福州世祖胡椒餅","胡椒餅","炭爐現烤，外殼酥香，豬肉與胡椒香氣飽滿。","Fuzhou Ancestor Pepper Buns","Pepper bun","Charcoal-baked buns packed with pork, scallion and black pepper."),
    vendor("陳董藥燉排骨","藥燉排骨","溫潤藥膳湯配排骨，是天冷或逛累時的暖胃選擇。","Chen Dong Herbal Ribs","Herbal pork ribs","A warming herbal broth with tender pork ribs."),
    vendor("東發號","蚵仔麵線","百年老店風格的小吃，麵線滑順、蚵仔與大腸料多。","Dong Fa Hao","Oyster vermicelli","Silky vermicelli with oysters and pork intestine."),
    vendor("紅燒牛肉麵牛雜湯","牛雜湯","湯頭濃厚、份量實在，適合想吃一頓完整晚餐的旅客。","Raohe Beef Noodles","Beef offal soup","A hearty, full-meal option with a rich broth."),
    vendor("麻糬寶寶","冰火麻糬","柔軟麻糬搭配花生粉或冰品，適合當作收尾甜點。","Mochi Baby","Hot-and-cold mochi","Soft mochi with peanut powder or shaved ice for dessert.")
  ],
  2: [
    vendor("樂華三鮮羹","三鮮羹","羹湯濃而不膩，搭配魷魚、肉羹等配料，是在地經典。","Lehua Three-Delight Soup","Seafood thick soup","A local favorite with squid, pork and a savory thick broth."),
    vendor("官記純檸檬泰式涼拌木瓜","涼拌木瓜","酸辣清爽、現點現拌，適合穿插在炸物之間解膩。","Guan Ji Thai Papaya Salad","Papaya salad","Freshly tossed, tangy and spicy—a refreshing break from fried food."),
    vendor("永美雪花冰","雪花冰","冰體細緻、配料選擇多，是多人共享的熱門甜點。","Yong Mei Snow Ice","Snow ice","Fine, fluffy shaved ice with a wide choice of toppings."),
    vendor("阿國蝦仁羹","蝦仁羹","蝦仁彈牙，羹湯帶蒜香與台式甜味。","A-Guo Shrimp Soup","Shrimp thick soup","Springy shrimp in a garlicky, lightly sweet Taiwanese broth."),
    vendor("下港米糕排骨酥","米糕與排骨酥湯","一乾一湯的經典組合，適合當作逛夜市的主餐。","Xia Gang Rice Cake","Sticky rice and rib soup","A satisfying main-meal pairing of sticky rice and rib soup.")
  ],
  3: [
    vendor("王記好吃麻油雞","麻油雞","麻油與薑香濃郁，雞肉份量實在，冬天特別受歡迎。","Wang Ji Sesame Oil Chicken","Sesame chicken soup","Rich sesame oil and ginger aromas with generous chicken pieces."),
    vendor("蚵仔之家","鮮蚵料理","主打大顆鮮蚵，可選蚵仔煎、蚵仔湯等吃法。","Oyster House","Oyster dishes","Fresh plump oysters served as omelets, soup and more."),
    vendor("板橋小籠包","小籠包","現蒸上桌、皮薄多汁，適合多人點一籠分享。","Banqiao Xiaolongbao","Soup dumplings","Freshly steamed, thin-skinned and juicy dumplings."),
    vendor("懷念泡菜臭豆腐","臭豆腐","外酥內嫩，泡菜酸甜爽脆，是經典台灣味。","Huai Nian Stinky Tofu","Stinky tofu","Crisp tofu with tender centers and tangy pickled cabbage."),
    vendor("林員大粒肉圓","彰化肉圓","外皮Q彈、肉餡紮實，搭配蒜泥醬更有味道。","Lin Yuan Giant Ba-wan","Taiwanese meatball","Chewy rice skin, savory pork filling and garlic sauce.")
  ],
  4: [
    vendor("嘉義順蚵仔煎生炒花枝","蚵仔煎","用料大方、鍋氣明顯，是桃園夜市的代表性鹹食。","Chiayi Shun Oyster Omelet","Oyster omelet","A generous, wok-fresh version of the Taiwanese classic."),
    vendor("阿和潤餅","潤餅","薄餅包入蔬菜、花生粉與肉料，口感清爽有層次。","A-He Spring Rolls","Taiwanese spring roll","A thin wrap filled with vegetables, peanut powder and meat."),
    vendor("北港甜湯","燒麻糬甜湯","傳統甜湯搭配柔軟麻糬，適合逛完後暖胃。","Beigang Sweet Soup","Mochi sweet soup","A comforting traditional dessert with soft mochi."),
    vendor("正宗蒙古烤肉","蒙古烤肉","自選肉類蔬菜後大火快炒，份量與飽足感都高。","Taoyuan Mongolian BBQ","Mongolian barbecue","Choose your ingredients and watch them cooked over high heat."),
    vendor("桃園夜市脆皮地瓜球","地瓜球","現炸外脆內Q，輕巧好拿，是沿路散步的零嘴。","Taoyuan Sweet Potato Balls","Sweet potato balls","Freshly fried, crisp outside and chewy inside.")
  ],
  5: [
    vendor("阿城號米粉","新竹米粉","細米粉吸附肉燥香氣，搭配貢丸湯最有新竹味。","A-Cheng Rice Noodles","Hsinchu rice noodles","Fine rice noodles with pork sauce—the quintessential Hsinchu taste."),
    vendor("柳家肉燥飯","肉燥飯","肉燥鹹香、米飯粒粒分明，是城隍廟周邊老字號。","Liu Jia Braised Pork Rice","Braised pork rice","Savory minced pork over rice from a long-running local shop."),
    vendor("郭家元祖潤餅","潤餅","餡料豐富、花生粉香氣突出，口感濕潤不乾。","Guo Original Spring Rolls","Spring roll","A generously filled wrap with fragrant peanut powder."),
    vendor("周家燒麻糬","燒麻糬","熱麻糬裹花生或芝麻粉，簡單卻有古早味。","Zhou Hot Mochi","Hot mochi","Warm mochi coated in peanut or sesame powder."),
    vendor("西市汕頭館","沙茶火鍋","想坐下吃正餐可選沙茶火鍋，牛肉與自製沙茶是重點。","Xishi Shantou Hot Pot","Satay hot pot","A sit-down option known for beef and house-made satay sauce.")
  ],
  6: [
    vendor("英才夜市烤肉王","炭烤串燒","醬香明顯、品項多，適合多人各選幾串分享。","Yingcai BBQ King","Grilled skewers","A broad selection of smoky skewers for sharing."),
    vendor("苗栗水晶餃","水晶餃","Q彈外皮包豬肉餡，是苗栗代表性客家小吃。","Miaoli Crystal Dumplings","Crystal dumplings","Chewy translucent wrappers filled with seasoned pork."),
    vendor("客家鹹湯圓","鹹湯圓","湯頭有油蔥與香菇香，適合作為暖胃主食。","Hakka Savory Tangyuan","Savory rice balls","Rice balls in a warming broth with shallot and mushroom."),
    vendor("英才酥皮臭豆腐","臭豆腐","外層炸得酥脆，配上台式泡菜與辣醬更完整。","Yingcai Crispy Stinky Tofu","Stinky tofu","Extra-crisp tofu served with pickles and chili sauce."),
    vendor("銅鑼燒地瓜球","地瓜球","現炸蓬鬆、甜度不高，是親子容易接受的點心。","Yingcai Sweet Potato Balls","Sweet potato balls","Light, chewy and mildly sweet—an easy family snack.")
  ],
  7: [
    vendor("官芝霖大腸包小腸","大腸包小腸","糯米腸夾香腸並加入配料，是逢甲代表性吃法。","Guan Zhi Lin","Sausage in sticky rice","Taiwanese sausage wrapped in sticky-rice sausage with condiments."),
    vendor("明倫蛋餅","蛋餅","半熟蛋香搭配特製醬汁，口感柔軟、排隊速度快。","Ming Lun Egg Pancake","Egg pancake","A soft egg pancake with a signature sweet-savory sauce."),
    vendor("日船章魚小丸子","章魚小丸子","逢甲發跡的品牌，外層焦香、內部柔軟燙口。","Nisshin Takoyaki","Takoyaki","A Feng Chia-born favorite, crisp outside and molten inside."),
    vendor("一心素食臭豆腐","臭豆腐","酥脆豆腐搭配大量泡菜，素食旅客也能品嘗。","Yi Xin Vegetarian Stinky Tofu","Vegetarian stinky tofu","Crisp tofu with plentiful pickles, suitable for vegetarians."),
    vendor("溫家地瓜球","地瓜球","個頭飽滿、現炸Q彈，是逢甲最適合邊走邊吃的甜點。","Wen Sweet Potato Balls","Sweet potato balls","Large, freshly fried balls with a satisfyingly chewy texture.")
  ],
  8: [
    vendor("味泉米糕","筒仔米糕","米粒Q香、肉燥濃郁，搭配排骨酥湯是經典組合。","Wei Quan Rice Cake","Sticky rice cake","Chewy rice with rich pork sauce, ideal with rib soup."),
    vendor("正老牌麵線糊","麵線糊","台中式麵線糊口感滑順，可加入東泉甜辣醬。","Old Brand Vermicelli","Vermicelli soup","Silky Taichung-style vermicelli, often enjoyed with local chili sauce."),
    vendor("忠孝烤肉","炭烤肉串","醬汁偏甜、炭香明顯，是在地人的宵夜選擇。","Zhongxiao BBQ","Grilled skewers","Sweet-glazed, charcoal-scented skewers popular late at night."),
    vendor("夜夜見來蛋包飯","蛋包飯","份量充足、口味懷舊，適合想吃飽的旅客。","Ye Ye Jian Lai Omurice","Omelet rice","A generous, nostalgic plate for travelers wanting a full meal."),
    vendor("忠孝甘蔗牛奶","甘蔗牛奶","甘蔗清甜結合牛奶滑順，適合搭配重口味炸物。","Zhongxiao Sugarcane Milk","Sugarcane milk","Fresh sweetness and creamy milk balance salty snacks.")
  ],
  9: [
    vendor("精誠夜市牛排","鐵板牛排","滋滋作響的鐵板麵與肉排，是夜市最有飽足感的主餐。","Jingcheng Night-Market Steak","Sizzling steak","Steak and noodles served sizzling on a hot plate."),
    vendor("彰化肉圓伯","肉圓","Q皮包肉餡與筍丁，甜鹹醬汁帶出彰化風味。","Changhua Ba-wan Stall","Taiwanese meatball","Chewy skin, pork and bamboo shoots with sweet-savory sauce."),
    vendor("精誠東山鴨頭","東山鴨頭","滷後炸製、越嚼越香，適合買一袋多人分享。","Jingcheng Dongshan Duck","Caramelized fried duck","Braised then fried for a deeply savory, chewy snack."),
    vendor("古早味白糖粿","白糖粿","外酥內軟，裹上花生糖粉，是平價傳統甜點。","Traditional Sugar Rice Cake","Sugar rice cake","Crisp outside, soft inside and coated with peanut sugar."),
    vendor("精誠木瓜牛奶","木瓜牛奶","現打濃郁、冰涼解膩，可作為逛攤之間的飲品。","Jingcheng Papaya Milk","Papaya milk","Fresh, creamy and cooling between savory bites.")
  ],
  10: [
    vendor("草鞋墩烤肉","炭烤肉串","刷醬炭烤、選擇多，適合家庭共享。","Caoxiedun BBQ","Grilled skewers","A wide variety of glazed charcoal skewers for sharing."),
    vendor("草屯蚵嗲","蚵嗲","麵糊包入鮮蚵與韭菜油炸，外酥內鮮。","Caotun Oyster Fritter","Oyster fritter","Crisp batter filled with oysters and chives."),
    vendor("南投意麵","乾意麵","彈牙麵條拌肉燥與油蔥，是快速又有在地感的主食。","Nantou Yi Noodles","Dry noodles","Springy noodles tossed with pork sauce and shallots."),
    vendor("草鞋墩大腸包小腸","大腸包小腸","糯米腸與香腸炭烤後夾配料，香氣十足。","Caoxiedun Rice Sausage","Sausage in sticky rice","Grilled sausages layered with pickles and condiments."),
    vendor("埔里甘蔗汁","甘蔗汁","現榨清甜，適合搭配油炸食物與炎熱天氣。","Puli Sugarcane Juice","Sugarcane juice","Fresh-pressed and refreshing with fried foods.")
  ],
  11: [
    vendor("斗六炊仔飯","炊仔飯","雲林古早味米食，肉燥香濃、份量恰好。","Douliu Steamed Rice","Steamed rice bowl","A Yunlin-style rice bowl topped with fragrant pork sauce."),
    vendor("斗六魷魚羹","魷魚羹","魷魚脆口、羹湯帶沙茶香，是在地經典。","Douliu Squid Soup","Squid thick soup","Crunchy squid in a savory satay-flavored broth."),
    vendor("雲林烤玉米","醬烤玉米","慢烤後刷上厚醬，口感有嚼勁、香氣濃。","Yunlin Grilled Corn","Grilled corn","Slow-grilled corn brushed with a rich savory glaze."),
    vendor("斗六酥皮臭豆腐","臭豆腐","外皮酥脆、泡菜爽口，適合第一次嘗試的旅客。","Douliu Crispy Stinky Tofu","Stinky tofu","Crisp tofu balanced by tangy pickled cabbage."),
    vendor("古坑咖啡鮮奶","咖啡鮮奶","使用雲林古坑意象的咖啡飲品，香醇不過甜。","Gukeng Coffee Milk","Coffee milk","A smooth local-inspired coffee drink with gentle sweetness.")
  ],
  12: [
    vendor("林聰明沙鍋魚頭","沙鍋菜／魚頭","嘉義代表名店，濃郁沙茶湯底適合多人分食。","Smart Fish Head","Fish-head casserole","Chiayi's iconic rich satay casserole, best shared."),
    vendor("郭家雞肉飯","火雞肉飯","火雞肉絲與油蔥香平衡，是小份量掃街首選。","Guo Turkey Rice","Turkey rice","Tender turkey and fragrant shallot oil in a compact bowl."),
    vendor("阿娥豆花","豆漿豆花","以豆漿取代糖水，豆香濃郁、口感清爽。","A-E Soy Pudding","Soy-milk tofu pudding","Silky tofu pudding served in fragrant soy milk."),
    vendor("黃毛ㄚ頭東山鴨頭","東山鴨頭","甜香滷汁搭配酥炸口感，越嚼越有味道。","Huang Mao Duck","Dongshan duck","Sweet-braised then fried for a rich, chewy snack."),
    vendor("御香屋","葡萄柚綠茶","嘉義人氣飲品，果肉多、酸甜清爽，常需排隊。","Yuyupas Tea Shop","Grapefruit green tea","A refreshing tea packed with grapefruit pulp.")
  ],
  13: [
    vendor("朴子鴨肉儀","鴨肉飯","鴨肉嫩、油蔥香，是朴子常見的在地主食。","Puzi Duck Rice","Duck rice","Tender duck over rice with fragrant shallot oil."),
    vendor("朴子配天宮麻糬棟","花生麻糬","現做柔軟、花生粉香，是適合伴手的小甜點。","Peitian Temple Mochi","Peanut mochi","Fresh, soft mochi coated in fragrant peanut powder."),
    vendor("朴子生炒鴨肉羹","鴨肉羹","鍋氣與醋香明顯，口味濃郁、很有嘉義特色。","Puzi Duck Thick Soup","Duck soup","Wok aroma and vinegar brighten a rich duck broth."),
    vendor("古早味粉圓冰","粉圓冰","黑糖粉圓Q彈、冰涼消暑，是逛夜市的收尾。","Traditional Tapioca Ice","Tapioca shaved ice","Chewy brown-sugar pearls over cooling shaved ice."),
    vendor("朴子炭烤香腸","炭烤香腸","高粱蒜香搭配炭火氣味，簡單直接的台灣味。","Puzi Grilled Sausage","Grilled sausage","A smoky Taiwanese sausage served with fresh garlic.")
  ],
  14: [
    vendor("二師兄古早滷味","滷味","甜鹹滷汁入味，品項多、適合買一袋多人分享。","Er Shi Xiong Braised Snacks","Braised snacks","A broad selection of deeply braised snacks for sharing."),
    vendor("阿美芭樂","甘草芭樂","爽脆芭樂搭配甘草粉，清爽解膩。","A-Mei Guava","Licorice guava","Crisp guava seasoned with sweet licorice powder."),
    vendor("統大炭烤香雞排","炭烤雞排","先炸後烤並刷醬，帶有明顯炭香。","Tong Da Charcoal Chicken","Charcoal chicken cutlet","Fried, grilled and glazed for a smoky finish."),
    vendor("陳記麻辣鴨血","麻辣鴨血","鴨血滑嫩、湯頭香麻，適合喜歡重口味的旅客。","Chen Spicy Duck Blood","Spicy duck blood","Silky cubes in a fragrant, numbing chili broth."),
    vendor("花園夜市木瓜牛奶","木瓜牛奶","現打濃郁又冰涼，搭配鹹食最合適。","Garden Papaya Milk","Papaya milk","Fresh and creamy, perfect with salty street food.")
  ],
  15: [
    vendor("延記臭豆腐","臭豆腐","外酥內嫩、泡菜酸甜，是大東的經典排隊攤。","Yan Ji Stinky Tofu","Stinky tofu","Crisp tofu with tender centers and sweet-tangy pickles."),
    vendor("大東夜市旗魚黑輪","旗魚黑輪","魚漿香甜、現炸熱燙，適合邊走邊吃。","Dadong Marlin Oden","Marlin fish cake","Freshly fried marlin fish cakes served piping hot."),
    vendor("台南棺材板","棺材板","厚片吐司炸後裝入濃湯餡，是台南獨特小吃。","Tainan Coffin Bread","Coffin bread","Fried thick toast filled with creamy savory stew."),
    vendor("大東蚵仔煎","蚵仔煎","鮮蚵、青菜與粉漿煎出焦邊，甜鹹醬汁完整提味。","Dadong Oyster Omelet","Oyster omelet","Oysters and greens in a crisp-edged omelet with sauce."),
    vendor("古早味冬瓜茶","冬瓜茶","甜香清涼、價格親切，是台南夜市標準搭配。","Traditional Winter Melon Tea","Winter melon tea","A cool, sweet Tainan classic for balancing fried foods.")
  ],
  16: [
    vendor("鄭老牌木瓜牛奶","木瓜牛奶","六合代表性飲品，質地濃郁、果香明顯。","Zheng Old-Brand Papaya Milk","Papaya milk","Liuhe's signature rich and fruity drink."),
    vendor("莊記海產粥","海產粥","蝦、蚵與魚料豐富，湯頭鮮甜，適合當主餐。","Zhuang Seafood Congee","Seafood congee","A savory bowl loaded with shrimp, oysters and fish."),
    vendor("方記水餃","水餃","現包現煮、內餡多汁，是簡單可靠的在地人氣小吃。","Fang Ji Dumplings","Boiled dumplings","Freshly wrapped, juicy dumplings popular with locals."),
    vendor("烤肉之家","炭烤肉串","刷上特製醬汁炭烤，香氣遠遠就能聞到。","BBQ House","Grilled skewers","Charcoal-grilled skewers glazed with a signature sauce."),
    vendor("六合烤魷魚","烤魷魚","魷魚厚實有嚼勁，可依喜好調整辣度。","Liuhe Grilled Squid","Grilled squid","Thick, chewy squid grilled to order with adjustable spice.")
  ],
  17: [
    vendor("萬國牛排","夜市牛排","鐵板麵、蛋與肉排一次上桌，份量很有飽足感。","Wan Guo Steak","Night-market steak","Steak, noodles and egg served sizzling on one plate."),
    vendor("天使雞排","厚切雞排","雞排厚實多汁，外皮酥脆，是瑞豐醒目的排隊攤。","Angel Chicken","Thick fried chicken","An extra-thick, juicy cutlet with a crisp crust."),
    vendor("沖繩酥炸大魷魚","炸魷魚","大份量魷魚炸得酥香，適合多人分食。","Okinawa Giant Squid","Fried squid","A generous portion of crisp fried squid for sharing."),
    vendor("瑞豐蒙古烤肉","蒙古烤肉","自選肉菜後快炒，可依口味調整醬料與辣度。","Ruifeng Mongolian BBQ","Mongolian barbecue","Pick your ingredients and customize sauce and spice."),
    vendor("鮮奶麻糬","鮮奶麻糬","柔軟奶香、入口滑嫩，是適合收尾的輕甜點。","Milk Mochi","Milk mochi","Soft, milky and delicate—a gentle final dessert.")
  ],
  18: [
    vendor("進來涼冰果室","冷熱冰","多種配料與湯圓一次滿足，是屏東知名古早味冰品。","Jin Lai Liang Ice Shop","Hot-and-cold shaved ice","A famous Pingtung dessert loaded with traditional toppings."),
    vendor("屏東肉圓","蒸肉圓","外皮柔軟、肉餡鹹香，搭配蒜蓉醬最對味。","Pingtung Ba-wan","Steamed meatball","Soft rice skin and savory pork with garlic sauce."),
    vendor("夜市雞肉飯","雞肉飯","小碗份量方便掃街，油蔥與雞汁香氣平衡。","Pingtung Chicken Rice","Chicken rice","A compact rice bowl fragrant with chicken juices and shallots."),
    vendor("屏東旗魚黑輪","旗魚黑輪","魚漿裹蛋現炸，熱燙有彈性，是南部常見小吃。","Pingtung Marlin Oden","Marlin fish cake","Freshly fried, bouncy fish cake wrapped around egg."),
    vendor("萬丹紅豆餅","紅豆餅","使用屏東萬丹紅豆意象，內餡飽滿、甜度溫和。","Wandan Red Bean Cake","Red bean wheel cake","A warm cake generously filled with local-style red bean paste.")
  ],
  19: [
    vendor("阿灶伯當歸羊肉湯","當歸羊肉湯","當歸香氣溫潤、羊肉嫩，是羅東必吃排隊名店。","A-Zao-Bo Herbal Lamb","Herbal lamb soup","Tender lamb in a warming angelica-root broth."),
    vendor("義豐蔥油派","蔥油派","三星蔥香氣足，外酥內有層次，可加蛋。","Yi Feng Scallion Pancake","Scallion pancake","Crisp, layered pancake packed with Yilan scallions."),
    vendor("小春卜肉","卜肉","豬肉條裹粉酥炸，口感酥香、是宜蘭特色。","Xiao Chun Fried Pork","Fried pork strips","Yilan-style pork strips fried in a light crisp batter."),
    vendor("魏姐包心粉圓","包心粉圓","Q彈粉圓包餡，搭配冰品與豆花都很受歡迎。","Wei Sisters Stuffed Tapioca","Stuffed tapioca","Chewy filled pearls served with shaved ice or tofu pudding."),
    vendor("羅東糕渣","糕渣","外冷內燙、口感滑嫩，是宜蘭少見的傳統宴席小吃。","Luodong Gao Zha","Savory fried custard","A unique Yilan fritter that is crisp outside and molten within.")
  ],
  20: [
    vendor("林記燒番麥","烤玉米","炭烤後刷上濃郁醬汁，玉米Q甜有嚼勁。","Lin Grilled Corn","Grilled corn","Chewy corn charcoal-grilled with a rich glaze."),
    vendor("強蛋餅","炸蛋蔥油餅","酥脆餅皮包半熟蛋，搭配辣醬更有層次。","Qiang Fried Egg Pancake","Fried egg scallion pancake","A flaky pancake wrapped around a runny fried egg."),
    vendor("原住民一條街烤肉","馬告烤肉","使用馬告等香料，呈現花東原住民風味。","Indigenous Street BBQ","Makauy barbecue","Grilled meat seasoned with aromatic Indigenous spices."),
    vendor("公正包子夜市攤","小籠包／包子","小巧多汁、價格親切，方便多人分享。","Gongzheng Buns","Steamed buns","Small, juicy and affordable buns ideal for sharing."),
    vendor("花蓮薯冰淇淋","花蓮薯甜點","把地方伴手禮風味做成冰涼甜點，適合旅客嘗鮮。","Hualien Sweet-Potato Dessert","Sweet potato dessert","A cool dessert inspired by Hualien's famous sweet-potato treats.")
  ],
  21: [
    vendor("林家臭豆腐","臭豆腐","台東知名脆皮臭豆腐，搭配大量酸甜泡菜。","Lin Stinky Tofu","Stinky tofu","A Taitung favorite with crisp tofu and plentiful pickles."),
    vendor("老東台米苔目","米苔目","粗米麵口感Q滑，可選乾拌或湯食，是台東代表味。","Old Taitung Rice Noodles","Rice noodles","Thick, springy rice noodles served dry or in soup."),
    vendor("寶桑湯圓","甜湯圓","柔軟湯圓搭配清甜糖水，是在地老字號甜點。","Baosang Tangyuan","Sweet rice balls","Soft rice balls in a light traditional syrup."),
    vendor("台東釋迦冰","釋迦冰沙","以台東水果為主角，果香濃郁、清涼解暑。","Taitung Sugar-Apple Ice","Sugar-apple smoothie","A cooling drink showcasing Taitung's signature fruit."),
    vendor("正氣路烤肉","炭烤肉串","夜市開市時最有氣氛的選擇，可自由搭配肉與蔬菜。","Zhengqi Road BBQ","Grilled skewers","Mix meat and vegetable skewers for a lively night-market bite.")
  ],
  22: [
    vendor("阿華海鮮","現炒海鮮","依當日漁獲選擇，適合多人點幾道共享。","A-Hua Seafood","Stir-fried seafood","Choose from the day's catch and share several dishes."),
    vendor("澎湖花枝丸","花枝丸","花枝塊明顯、口感彈牙，是澎湖最直觀的海味。","Penghu Cuttlefish Balls","Cuttlefish balls","Bouncy fish balls packed with noticeable cuttlefish pieces."),
    vendor("玉冠嫩仙草","嫩仙草冰","仙草滑嫩、配料豐富，是馬公人氣消暑甜品。","Yu Guan Grass Jelly","Grass jelly ice","Silky grass jelly with assorted toppings."),
    vendor("郵局口蔥油餅","蔥油餅","外層酥脆、內層有嚼勁，加蛋與辣醬更完整。","Post Office Scallion Pancake","Scallion pancake","Crisp and chewy, especially good with egg and chili."),
    vendor("澎湖仙人掌冰","仙人掌冰","鮮豔酸甜，是最具海島辨識度的收尾甜點。","Penghu Cactus Ice","Cactus-fruit ice","A vividly colored, sweet-tart island dessert.")
  ],
  23: [
    vendor("蚵嗲之家","蚵嗲","金門海蚵與韭菜裹粉油炸，外酥內鮮。","Kinmen Oyster Fritter","Oyster fritter","Local oysters and chives fried in a crisp batter."),
    vendor("談天樓","酒釀湯圓","老街知名甜品，酒釀香氣溫和、湯圓柔軟。","Tan Tian Lou","Fermented-rice tangyuan","Soft rice balls in a gently aromatic fermented-rice soup."),
    vendor("金門廣東粥","廣東粥","米粒熬化、配料豐富，是金門經典早餐與宵夜。","Kinmen Congee","Cantonese congee","Silky rice porridge with generous savory toppings."),
    vendor("高粱香腸攤","高粱香腸","帶淡淡高粱酒香，搭配蒜片最有金門味。","Kaoliang Sausage Stall","Kaoliang sausage","Taiwanese sausage scented with Kinmen kaoliang liquor."),
    vendor("閩式燒餅舖","閩式燒餅","酥香餅皮可選甜鹹餡，是方便帶走的古城點心。","Fujian Pastry Shop","Fujian pastry","Flaky pastries with sweet or savory fillings.")
  ],
  24: [
    vendor("馬祖鼎邊糊","鼎邊糊","米漿沿鍋煮成薄片，搭配海鮮湯頭，口感獨特。","Matsu Dingbianhu","Rice-sheet soup","Hand-poured rice sheets in a savory seafood broth."),
    vendor("紅糟雞攤","紅糟炸雞","紅糟醃製後油炸，酒香與鹹甜味是馬祖特色。","Red Yeast Chicken Stall","Red yeast fried chicken","Chicken marinated in red yeast and fried until crisp."),
    vendor("繼光餅夾肉","繼光餅","紮實麵餅夾入肉餡，像馬祖版漢堡，飽足感高。","Jiguang Bun Stall","Matsu sandwich","A dense local bun filled with meat—Matsu's own sandwich."),
    vendor("老酒麵線","老酒麵線","馬祖老酒湯頭溫潤，搭配蛋與麵線非常暖胃。","Aged-Wine Vermicelli","Wine vermicelli","Fine noodles in a warming broth fragrant with aged rice wine."),
    vendor("海蠣煎小攤","海蠣煎","使用島嶼海味製作，外緣焦香、內部柔軟。","Matsu Oyster Omelet","Oyster omelet","Island oysters in a soft omelet with crisp edges.")
  ],
  25: [
    vendor("天一香肉羹順","滷肉飯","小碗滷肉飯油香不膩，是廟口掃街的經典起點。","Tian Yi Xiang","Braised pork rice","A small, fragrant bowl—an ideal start to Miaokou."),
    vendor("營養三明治","炸麵包三明治","炸麵包夾火腿、蛋、番茄與美乃滋，口感豐富。","Nutritious Sandwich","Fried-bread sandwich","Fried bread stuffed with ham, egg, tomato and mayonnaise."),
    vendor("吳記螃蟹羹","螃蟹羹／油飯","濃羹帶海味，搭配油飯是基隆廟口代表組合。","Wu Crab Soup","Crab soup and sticky rice","A harbor-flavored thick soup paired with sticky rice."),
    vendor("邢記鼎邊趖","鼎邊趖","米漿薄片與海鮮湯頭，最能代表基隆港都飲食。","Xing Ji Dingbiancuo","Rice-sheet soup","Rice sheets and seafood broth embody Keelung's harbor cuisine."),
    vendor("一口吃香腸","迷你香腸","一口大小、炭香十足，適合邊走邊吃與多人分享。","One-Bite Sausage","Mini sausages","Smoky bite-size sausages made for walking and sharing.")
  ],
  26: [
    vendor("竹北夜市牛排","鐵板牛排","肉排、麵與蛋一次上桌，是親子最容易選的主餐。","Zhubei Night-Market Steak","Sizzling steak","Steak, noodles and egg make an easy family meal."),
    vendor("新竹貢丸湯","貢丸湯","貢丸彈牙、湯頭清爽，展現新竹代表風味。","Hsinchu Meatball Soup","Pork meatball soup","Bouncy pork meatballs in a clear, savory broth."),
    vendor("竹北烤玉米","醬烤玉米","慢烤刷醬、口感有嚼勁，是耐吃的夜市零嘴。","Zhubei Grilled Corn","Grilled corn","Slow-grilled corn with a savory glaze and chewy bite."),
    vendor("脆皮臭豆腐","臭豆腐","外皮酥、內部嫩，搭配酸甜泡菜平衡味道。","Zhubei Crispy Stinky Tofu","Stinky tofu","Crisp tofu with tangy pickles to balance the flavor."),
    vendor("竹北鮮奶麻糬","鮮奶麻糬","奶香柔軟、甜度溫和，是親子共享的收尾甜點。","Zhubei Milk Mochi","Milk mochi","Soft, milky and mildly sweet for a family-friendly finish.")
  ]
};
