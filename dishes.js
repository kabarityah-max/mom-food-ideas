const dishes = [
  {
    name: "Hummus bi Tahini", arabic: "حمص بالطحينة", emoji: "🫘", origin: "Palestine · Lebanon · Syria",
    description: "Silky chickpea purée blended with tahini, lemon, and garlic — the cornerstone of the Levantine table.",
    ingredients: ["Dried chickpeas", "Tahini", "Lemon", "Garlic", "Cumin", "Olive oil", "Ice water"],
    steps: ["Soak chickpeas overnight, boil with baking soda until very soft.", "Blend warm chickpeas with tahini, lemon, garlic, and ice water for 4+ minutes.", "Season with salt and cumin. Serve with olive oil and paprika."],
    tip: "<strong>Secret:</strong> peel the chickpeas after boiling for ultra-silky texture."
  },
  {
    name: "Falafel", arabic: "فلافل", emoji: "🟢", origin: "Palestine · Lebanon",
    description: "Crispy herb-flecked chickpea fritters with a vibrant green interior — street food royalty.",
    ingredients: ["Dried chickpeas (raw)", "Parsley", "Cilantro", "Onion", "Cumin", "Coriander", "Garlic", "Baking soda"],
    steps: ["Soak raw chickpeas 24 hours. Drain completely.", "Blend with herbs, onion, garlic, spices to a coarse green mixture. Rest 1 hour.", "Add baking soda, shape, fry at 175°C until deep golden."],
    tip: "<strong>Never canned chickpeas</strong> — they turn mushy and fall apart."
  },
  {
    name: "Tabbouleh", arabic: "تبولة", emoji: "🌿", origin: "Lebanon · Syria",
    description: "A celebration of fresh parsley — mountains of finely chopped herbs with bulgur, tomato, and bright lemon.",
    ingredients: ["Flat-leaf parsley", "Fine bulgur", "Tomatoes", "Green onion", "Mint", "Lemon juice", "Olive oil"],
    steps: ["Soak fine bulgur in lemon juice 20 minutes.", "Chop parsley very finely by hand. Dice and drain tomatoes.", "Combine, dress with lemon and olive oil, season with allspice."],
    tip: "<strong>Ratio:</strong> 4 parts parsley to 1 part bulgur. It's an herb salad, not a grain salad."
  },
  {
    name: "Fattoush", arabic: "فتوش", emoji: "🥗", origin: "Lebanon · Syria",
    description: "Vibrant peasant salad with crispy pita shards, seasonal vegetables, and sumac — tangy and textural.",
    ingredients: ["Pita bread", "Romaine", "Tomatoes", "Cucumber", "Radish", "Sumac", "Pomegranate molasses", "Lemon"],
    steps: ["Fry or bake pita until shatteringly crisp.", "Chop vegetables into large rustic pieces.", "Dress with lemon, olive oil, pomegranate molasses, sumac. Add pita last."],
    tip: "<strong>Sumac is non-negotiable</strong> — its fruity tartness defines the dish."
  },
  {
    name: "Mutabal", arabic: "متبل", emoji: "🍆", origin: "Syria · Lebanon",
    description: "Charred eggplant blended with tahini and lemon into a smoky, silky dip — the smoke is front and center.",
    ingredients: ["Large eggplants", "Tahini", "Lemon juice", "Garlic", "Pomegranate seeds", "Olive oil"],
    steps: ["Char eggplants directly over a gas flame 15–20 minutes until collapsed.", "Peel, drain, and roughly mash with garlic, tahini, and lemon.", "Spread, drizzle with olive oil, scatter pomegranate seeds."],
    tip: "<strong>The char is the point</strong> — oven-baked makes a fine dip, just not mutabal."
  },
  {
    name: "Labneh", arabic: "لبنة", emoji: "🧀", origin: "Lebanon · Palestine · Syria",
    description: "Strained yogurt — thick, creamy, tangy — the simplest thing on the meze table and somehow always the best.",
    ingredients: ["Full-fat yogurt", "Salt", "Olive oil", "Dried mint", "Zaatar", "Chili flakes"],
    steps: ["Mix yogurt with salt, strain in cheesecloth-lined colander overnight.", "Serve with olive oil well and dried mint.", "For balls: roll firm labneh, store in olive oil with thyme and garlic."],
    tip: "<strong>Full-fat only</strong> — low-fat versions turn grainy and sour."
  },
  {
    name: "Kibbeh Nayeh", arabic: "كبة نيئة", emoji: "🥩", origin: "Lebanon · Syria",
    description: "Raw lamb blended with bulgur and fragrant spices — the Levantine steak tartare, elegant and ancient.",
    ingredients: ["Lean lamb leg", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Black pepper", "Mint", "Olive oil"],
    steps: ["Use very fresh lean lamb, remove all sinew, keep cold.", "Soak and drain fine bulgur. Blend lamb to smooth paste, add bulgur and spices.", "Serve immediately drizzled with olive oil and dried mint."],
    tip: "<strong>Freshness is everything</strong> — same-day butchered lamb, kept cold throughout."
  },
  {
    name: "Baba Ghanoush", arabic: "بابا غنوج", emoji: "🍆", origin: "Lebanon · Palestine",
    description: "Roasted eggplant dip with tahini, pomegranate molasses, and walnuts — richer and sweeter than mutabal.",
    ingredients: ["Eggplant", "Walnuts", "Tahini", "Pomegranate molasses", "Garlic", "Lemon", "Olive oil"],
    steps: ["Roast eggplants over flame or in oven until charred and soft.", "Scoop flesh, drain excess liquid, chop roughly.", "Mix with crushed walnuts, tahini, pomegranate molasses, garlic, and lemon."],
    tip: "<strong>Walnuts add texture</strong> — don't blend smooth, keep a rustic chop."
  },
  {
    name: "Shanklish Salad", arabic: "شنكليش", emoji: "🧅", origin: "Syria · Lebanon",
    description: "Aged spiced cheese crumbled over diced tomato, onion, and olive oil — pungent, funky, and addictive.",
    ingredients: ["Shanklish cheese", "Tomatoes", "Onion", "Olive oil", "Dried thyme"],
    steps: ["Crumble shanklish over a plate.", "Surround with finely diced tomato and onion.", "Drizzle generously with olive oil and a pinch of thyme."],
    tip: "<strong>No substitutions</strong> — the aged, spiced rind is what makes shanklish shanklish."
  },
  {
    name: "Fatteh", arabic: "فتة", emoji: "🍲", origin: "Palestine · Lebanon · Syria",
    description: "Layered toasted pita, chickpeas, and garlicky yogurt-tahini sauce with crispy pine nuts and paprika butter.",
    ingredients: ["Pita", "Chickpeas", "Yogurt", "Tahini", "Garlic", "Lemon", "Pine nuts", "Butter", "Paprika"],
    steps: ["Toast pita pieces crisp; spread in serving dish.", "Pour warm chickpeas with garlic over pita.", "Top with yogurt-tahini sauce, then sizzling pine nut butter."],
    tip: "<strong>Assemble and serve immediately</strong> — it waits for no one."
  },
  {
    name: "Warak Dawali", arabic: "ورق دوالي", emoji: "🍃", origin: "Lebanon · Syria · Palestine",
    description: "Grape leaves stuffed with spiced rice and herbs — rolled with precision and steamed with lemon and olive oil.",
    ingredients: ["Grape leaves", "Short-grain rice", "Tomatoes", "Parsley", "Mint", "Lemon", "Allspice", "Olive oil"],
    steps: ["Mix rice with tomatoes, herbs, spices, olive oil, and lemon.", "Roll leaf around filling snugly into small cigars.", "Pack tightly in pot, steam 45 minutes weighted with a plate."],
    tip: "<strong>Pack tightly</strong> so they don't unravel during cooking."
  },
  {
    name: "Loubieh bi Zeit", arabic: "لوبية بالزيت", emoji: "🫛", origin: "Lebanon · Palestine",
    description: "Green beans braised in olive oil with tomato, onion, and garlic until meltingly tender.",
    ingredients: ["Green beans", "Tomatoes", "Onion", "Garlic", "Olive oil", "Allspice", "Cinnamon"],
    steps: ["Sauté sliced onion in generous olive oil until golden.", "Add garlic, tomatoes, allspice, and cinnamon.", "Add beans, cover and simmer 25–35 minutes. Cool to room temperature."],
    tip: "<strong>Levantine beans are braised, not blanched</strong> — fully yielding and slicked with oil."
  },
  {
    name: "Ful Medames", arabic: "فول مدمس", emoji: "🫘", origin: "Palestine · Lebanon · Syria",
    description: "Slow-cooked fava beans mashed with lemon, garlic, and olive oil — the breakfast of champions across the Levant.",
    ingredients: ["Dried fava beans", "Lemon juice", "Garlic", "Olive oil", "Cumin", "Parsley", "Tomato", "Chili"],
    steps: ["Soak favas overnight, simmer 1–2 hours until very soft.", "Mash roughly with garlic, lemon, cumin, and olive oil.", "Serve warm topped with tomato, parsley, and a drizzle of oil."],
    tip: "<strong>Don't mash completely</strong> — some whole beans give it the right texture."
  },
  {
    name: "Lentil Soup", arabic: "شوربة عدس", emoji: "🥣", origin: "Lebanon · Syria · Palestine",
    description: "Velvety red lentil soup perfumed with cumin and turmeric, finished with fried onion and lemon.",
    ingredients: ["Red lentils", "Onion", "Garlic", "Cumin", "Turmeric", "Lemon juice", "Olive oil"],
    steps: ["Sauté onion until soft, add garlic, cumin, turmeric.", "Add lentils and water, simmer 20 minutes until dissolved.", "Blend smooth, season, serve with crispy onion and lemon wedge."],
    tip: "<strong>The fried onion garnish is essential</strong> — caramelize until deep brown."
  },
  {
    name: "Freekeh Soup", arabic: "شوربة فريكة", emoji: "🍵", origin: "Syria · Lebanon · Palestine",
    description: "Smoky fire-roasted green wheat in rich chicken stock — earthy, warming, and deeply satisfying.",
    ingredients: ["Whole freekeh", "Chicken", "Onion", "Allspice", "Cinnamon", "Coriander", "Butter", "Pine nuts"],
    steps: ["Poach chicken in spiced water. Reserve stock.", "Simmer rinsed freekeh in chicken stock 35–40 minutes.", "Shred chicken back in. Top with pine nuts fried in butter."],
    tip: "<strong>Freekeh triples in size</strong> — use less than you think."
  },
  {
    name: "Adas bil Hamod", arabic: "عدس بالحامض", emoji: "🍋", origin: "Lebanon · Syria",
    description: "Brown lentil soup brightened with Swiss chard and loads of lemon juice — sour, hearty, and comforting.",
    ingredients: ["Brown lentils", "Swiss chard", "Onion", "Garlic", "Lemon juice", "Olive oil", "Cumin", "Flour"],
    steps: ["Cook lentils until soft. Fry onion and garlic until golden.", "Add chard and cumin to lentils, simmer 10 minutes.", "Stir in flour slurry to thicken, finish with generous lemon juice."],
    tip: "<strong>Be aggressive with lemon</strong> — the sourness is the whole point."
  },
  {
    name: "Maqluba", arabic: "مقلوبة", emoji: "🍚", origin: "Palestine · Jordan",
    description: "The theatrical 'upside-down' dish — layers of spiced rice, fried vegetables, and meat flipped onto a platter.",
    ingredients: ["Basmati rice", "Cauliflower", "Eggplant", "Chicken", "Allspice", "Turmeric", "Cinnamon", "Pine nuts"],
    steps: ["Fry eggplant and cauliflower until golden. Brown chicken in pot.", "Layer vegetables then rice; pour spiced stock to cover. Cook 30 min.", "Rest 10 minutes, place platter on pot, flip confidently."],
    tip: "<strong>Flip decisively</strong> — hesitation leads to collapse."
  },
  {
    name: "Mujaddara", arabic: "مجدرة", emoji: "🫙", origin: "Lebanon · Syria · Palestine",
    description: "Lentils and rice crowned with deeply caramelized onions — ancient, humble, and utterly delicious.",
    ingredients: ["Green lentils", "Basmati rice", "Onions", "Cumin", "Olive oil"],
    steps: ["Cook lentils until just tender.", "Caramelize onions in olive oil 30–40 minutes to deep mahogany.", "Cook rice with lentils and cumin; bury in caramelized onions."],
    tip: "<strong>Don't rush the onions</strong> — slow dark caramelization makes this extraordinary."
  },
  {
    name: "Mansaf", arabic: "منسف", emoji: "🐑", origin: "Jordan · Palestine",
    description: "Jordan's national dish — lamb slow-cooked in fermented dried yogurt (jameed) served over rice with flatbread.",
    ingredients: ["Lamb (bone-in)", "Jameed", "Basmati rice", "Turmeric", "Vermicelli", "Pine nuts", "Almonds", "Flatbread"],
    steps: ["Reconstitute jameed in hot water, strain into a smooth sauce.", "Brown lamb, simmer in jameed sauce 1.5 hours until tender.", "Serve lamb over rice over flatbread, ladle sauce over everything."],
    tip: "<strong>Jameed cannot be substituted</strong> — its funky fermented character defines the dish."
  },
  {
    name: "Musakhan", arabic: "مسخن", emoji: "🍗", origin: "Palestine",
    description: "Roasted chicken on taboon bread drenched in sumac-and-caramelized-onion — Palestine's most beloved dish.",
    ingredients: ["Whole chicken (jointed)", "Onions", "Sumac", "Taboon bread", "Olive oil", "Allspice", "Cinnamon", "Pine nuts"],
    steps: ["Caramelize sliced onions in heavy olive oil with sumac and allspice 40 minutes.", "Roast chicken separately until golden and cooked through.", "Layer bread, then onions, then chicken. Bake assembled 10 minutes to meld."],
    tip: "<strong>Use the best olive oil you have</strong> — it's a main flavor here, not background."
  },
  {
    name: "Kafta", arabic: "كفتة", emoji: "🥙", origin: "Lebanon · Syria · Palestine",
    description: "Spiced ground lamb shaped on skewers and grilled over charcoal — aromatic, charred, and irresistible.",
    ingredients: ["Ground lamb", "Onion", "Parsley", "Allspice", "Cinnamon", "Cumin", "Black pepper"],
    steps: ["Grate and squeeze onion completely dry.", "Mix meat with onion, parsley, and spices; knead firmly 2–3 minutes.", "Wrap on flat skewers, grill on high heat 10–12 minutes."],
    tip: "<strong>Squeeze the onion dry</strong> — wet onion is why kafta falls off the skewer."
  },
  {
    name: "Shish Tawook", arabic: "شيش طاووق", emoji: "🍢", origin: "Lebanon · Syria",
    description: "Yogurt-marinated chicken skewers with deep garlic-lemon flavor, served with toum and pita.",
    ingredients: ["Chicken thighs", "Yogurt", "Lemon juice", "Garlic", "Tomato paste", "Paprika", "Cumin", "Cinnamon"],
    steps: ["Marinate chicken thighs in yogurt, lemon, garlic, tomato paste, and spices overnight.", "Thread on skewers with onion and pepper.", "Grill high heat, turning every 2–3 minutes until charred."],
    tip: "<strong>Thighs not breast</strong> — they stay juicy on the grill."
  },
  {
    name: "Shawarma Dajaj", arabic: "شاورما دجاج", emoji: "🌯", origin: "Lebanon · Palestine · Syria",
    description: "Thin-shaved marinated chicken wrapped in flatbread with garlic sauce, pickles, and tomato.",
    ingredients: ["Chicken thighs", "Yogurt", "Vinegar", "Cumin", "Turmeric", "Cardamom", "Cinnamon", "Garlic", "Flatbread"],
    steps: ["Marinate chicken with yogurt, vinegar, and spice blend overnight.", "Roast stacked in oven at 200°C or grill, shaving off cooked layers.", "Wrap in flatbread with toum, pickled turnips, and tomato."],
    tip: "<strong>Shave thin layers</strong> — that crispy edge is everything in shawarma."
  },
  {
    name: "Shawarma Lahmeh", arabic: "شاورما لحمة", emoji: "🌮", origin: "Lebanon · Palestine · Syria",
    description: "Spiced beef or lamb shawarma with tahini sauce, parsley, and sumac onions.",
    ingredients: ["Beef or lamb (thinly sliced)", "Vinegar", "Allspice", "Cinnamon", "Nutmeg", "Cardamom", "Tahini sauce", "Sumac"],
    steps: ["Marinate meat in vinegar and warm spice blend overnight.", "Roast or grill, shaving thin layers off.", "Serve in flatbread with tahini, parsley, and sumac-marinated onions."],
    tip: "<strong>Marinate at least 12 hours</strong> — the spices need time to penetrate."
  },
  {
    name: "Shish Barak", arabic: "شيش برك", emoji: "🥟", origin: "Lebanon · Syria",
    description: "Tiny lamb-filled pasta dumplings poached in warm garlicky yogurt sauce — comforting and elegant.",
    ingredients: ["All-purpose flour", "Ground lamb", "Onion", "Allspice", "Cinnamon", "Yogurt", "Garlic", "Dried mint", "Butter"],
    steps: ["Make simple dough; roll thin and cut circles. Fill with spiced lamb, seal into half-moon dumplings.", "Toast dumplings in oven until golden. Meanwhile heat yogurt with garlic — do not boil.", "Drop dumplings into warm yogurt, simmer gently 10 minutes. Finish with mint butter."],
    tip: "<strong>Never boil the yogurt sauce</strong> — it will split. Keep at a gentle simmer."
  },
  {
    name: "Daoud Basha", arabic: "داود باشا", emoji: "🍖", origin: "Lebanon · Syria",
    description: "Spiced meatballs with pine nuts in a rich tamarind-tomato sauce — a classic Lebanese family dish.",
    ingredients: ["Ground beef or lamb", "Pine nuts", "Onion", "Tomato paste", "Tamarind paste", "Allspice", "Cinnamon", "Sugar"],
    steps: ["Form small meatballs with pine nut embedded in each, brown in butter.", "Build sauce: onion, tomato paste, tamarind, spices, sugar, water. Simmer 15 minutes.", "Drop meatballs into sauce and braise 20 minutes. Serve over rice."],
    tip: "<strong>Tamarind gives the sweet-sour edge</strong> — don't skip it or the sauce tastes flat."
  },
  {
    name: "Sheikh el Mahshi", arabic: "شيخ المحشي", emoji: "🫑", origin: "Lebanon · Syria",
    description: "Zucchini stuffed with spiced meat and pine nuts, braised in rich tomato sauce.",
    ingredients: ["Zucchini", "Ground lamb or beef", "Pine nuts", "Onion", "Allspice", "Cinnamon", "Tomatoes", "Tomato paste"],
    steps: ["Hollow zucchini with corer; salt and drain.", "Fill with browned spiced meat and pine nuts — three-quarters full.", "Stand upright in pan, pour tomato sauce around, simmer 30–35 minutes."],
    tip: "<strong>Don't overstuff</strong> — filling expands and splits the zucchini."
  },
  {
    name: "Kousa Mahshi", arabic: "كوسا محشي", emoji: "🥒", origin: "Lebanon · Syria · Palestine",
    description: "Zucchini stuffed with rice and meat mixture, cooked in tomato broth or yogurt.",
    ingredients: ["Small zucchini", "Short-grain rice", "Ground beef", "Onion", "Allspice", "Cinnamon", "Tomato juice", "Mint"],
    steps: ["Core zucchini leaving thin shell. Mix rice, raw meat, spices, and onion.", "Stuff loosely to allow rice to expand. Seal with a small cap of meat.", "Simmer covered in tomato broth or yogurt sauce 40 minutes."],
    tip: "<strong>Stuff loosely</strong> — the rice needs room to swell."
  },
  {
    name: "Felfel Mahshi", arabic: "فلفل محشي", emoji: "🫑", origin: "Palestine · Syria · Lebanon",
    description: "Bell peppers stuffed with spiced rice and meat, simmered in tomato sauce.",
    ingredients: ["Bell peppers", "Short-grain rice", "Ground beef", "Tomatoes", "Allspice", "Cinnamon", "Olive oil"],
    steps: ["Cut tops off peppers, remove seeds. Make hashweh filling.", "Stuff peppers three-quarters full. Replace top.", "Stand in deep pan with tomato sauce, cover and simmer 45 minutes."],
    tip: "<strong>Use a mix of colors</strong> — green for traditional, red and yellow for sweetness."
  },
  {
    name: "Batenjan Mahshi", arabic: "باذنجان محشي", emoji: "🍆", origin: "Syria · Lebanon · Palestine",
    description: "Small eggplants stuffed with spiced rice and meat, braised in tangy tomato sauce.",
    ingredients: ["Small eggplants", "Short-grain rice", "Ground lamb", "Pine nuts", "Allspice", "Tomatoes", "Lemon"],
    steps: ["Core eggplants from the stem end. Salt and rest.", "Fill with spiced rice-meat mixture, leaving expansion room.", "Arrange in pot, cover with tomato-lemon sauce, braise 45 minutes."],
    tip: "<strong>Small eggplants only</strong> — they cook evenly and hold their shape."
  },
  {
    name: "Kusa bil Laban", arabic: "كوسا باللبن", emoji: "🥒", origin: "Lebanon · Syria",
    description: "Stuffed zucchini poached directly in warm garlicky yogurt sauce — creamy and delicate.",
    ingredients: ["Small zucchini", "Ground beef", "Short-grain rice", "Yogurt", "Garlic", "Dried mint", "Cornstarch"],
    steps: ["Core and stuff zucchini with rice-meat mixture.", "Stabilize yogurt by whisking with cornstarch and heating gently.", "Poach stuffed zucchini in yogurt with garlic 30 minutes on low."],
    tip: "<strong>Stabilize the yogurt first</strong> with cornstarch or egg — raw yogurt curdles when heated."
  },
  {
    name: "Mlokhieh", arabic: "ملوخية", emoji: "🥬", origin: "Palestine · Lebanon",
    description: "Ancient jute leaf stew in rich chicken broth with garlic and coriander — silky, earthy, and beloved.",
    ingredients: ["Mlokhieh leaves", "Chicken", "Garlic", "Coriander", "Lemon juice", "Chicken stock", "Rice"],
    steps: ["Simmer chicken in spiced stock. Remove chicken, strain stock.", "Fry crushed garlic and ground coriander in butter until fragrant.", "Add mlokhieh to hot stock with garlic mixture, simmer 10 minutes."],
    tip: "<strong>Don't boil hard</strong> — gentle simmer preserves the silky texture and color."
  },
  {
    name: "Bamia", arabic: "بامية", emoji: "🌿", origin: "Lebanon · Palestine · Syria",
    description: "Okra braised with lamb and tomato — silky and flavorful when cooked right, with lemon to prevent sliminess.",
    ingredients: ["Okra", "Lamb or beef", "Tomatoes", "Garlic", "Coriander", "Lemon juice", "Tomato paste", "Olive oil"],
    steps: ["Trim okra tops without breaching the pod. Fry briefly until golden.", "Brown meat, build tomato-garlic-coriander sauce.", "Return okra, simmer gently 20–25 minutes. Finish with lemon."],
    tip: "<strong>Don't cut into the pod, add acid, don't overcrowd</strong> — the three rules against sliminess."
  },
  {
    name: "Sayadieh", arabic: "صيادية", emoji: "🐟", origin: "Lebanon · Palestine",
    description: "Caramelized onion rice topped with spiced baked fish and toasted pine nuts — the fisherman's dish.",
    ingredients: ["White fish fillets", "Basmati rice", "Onions", "Cumin", "Turmeric", "Coriander", "Pine nuts", "Lemon"],
    steps: ["Deeply caramelize sliced onions 40 minutes. Reserve half, blend half with water for stock.", "Cook rice in onion stock with spices.", "Season and bake fish, place over rice, garnish with crispy onions and pine nuts."],
    tip: "<strong>The caramelized onion stock</strong> is what gives the rice its brown color and deep flavor."
  },
  {
    name: "Samak Mashwi", arabic: "سمك مشوي", emoji: "🐠", origin: "Lebanon · Palestine · Syria",
    description: "Whole grilled fish marinated in garlic, lemon, and herbs — simple, smoky, and perfect.",
    ingredients: ["Whole sea bass or bream", "Garlic", "Lemon", "Parsley", "Cumin", "Olive oil", "Chili"],
    steps: ["Score fish deeply. Stuff cavity with lemon, garlic, and herbs.", "Marinate in olive oil, lemon, cumin, and chili 1 hour.", "Grill over high heat 5–7 min per side. Serve with tahini sauce."],
    tip: "<strong>Score deeply</strong> — the marinade can't penetrate un-scored fish."
  },
  {
    name: "Samak Harrah", arabic: "سمك حرة", emoji: "🌶️", origin: "Lebanon · Syria",
    description: "Whole fish baked in a bold spiced tomato-chili sauce with coriander, walnuts, and lemon.",
    ingredients: ["Whole fish", "Tomatoes", "Chili", "Garlic", "Coriander", "Walnuts", "Lemon juice", "Olive oil"],
    steps: ["Score fish, season, and pan-fry until golden on both sides.", "Build sauce: blend tomatoes, chili, garlic, coriander, and walnuts.", "Pour sauce over fish, bake at 190°C for 20–25 minutes."],
    tip: "<strong>Walnuts in the sauce</strong> give body and a pleasant bitterness that balances the chili."
  },
  {
    name: "Arayes", arabic: "عرايس", emoji: "🥪", origin: "Lebanon · Palestine",
    description: "Pita halves stuffed with spiced raw kafta mixture and grilled until the bread crisps and meat cooks inside.",
    ingredients: ["Pita bread", "Ground lamb or beef", "Onion", "Parsley", "Allspice", "Cinnamon", "Tomato", "Olive oil"],
    steps: ["Mix kafta with tomato and extra olive oil so it stays moist.", "Spread inside split pita generously, press halves together.", "Grill or press in pan over medium heat until bread is crisp and meat cooked."],
    tip: "<strong>Medium heat</strong> — too high burns the bread before the meat cooks."
  },
  {
    name: "Sfiha", arabic: "صفيحة", emoji: "🫓", origin: "Lebanon · Syria · Palestine",
    description: "Open-faced spiced lamb pies with pomegranate molasses and pine nuts — the Levantine meat pizza.",
    ingredients: ["Pizza dough", "Ground lamb", "Tomatoes", "Onion", "Pomegranate molasses", "Pine nuts", "Allspice"],
    steps: ["Roll dough into thin rounds.", "Mix raw lamb with squeezed tomatoes, onion, pomegranate molasses, and spices.", "Spread thinly on dough, bake at 250°C for 8–10 minutes."],
    tip: "<strong>Use raw meat</strong> — it cooks in the oven and keeps the topping juicy."
  },
  {
    name: "Samboosak Lahmeh", arabic: "سمبوسك لحمة", emoji: "🥟", origin: "Lebanon · Palestine · Syria",
    description: "Crescent pastries filled with spiced ground meat and pine nuts — flaky, golden, party food.",
    ingredients: ["Pastry dough", "Ground beef or lamb", "Pine nuts", "Onion", "Allspice", "Cinnamon", "Butter"],
    steps: ["Brown meat with onion, add pine nuts and spices. Cool completely.", "Roll dough thin, cut circles, fill, fold, and crimp edges firmly.", "Fry until golden or bake at 200°C for 20 minutes."],
    tip: "<strong>Cool filling completely</strong> — warm filling creates steam that tears the pastry."
  },
  {
    name: "Samboosak Jibneh", arabic: "سمبوسك جبنة", emoji: "🥐", origin: "Lebanon · Syria",
    description: "Flaky pastry crescents filled with melted akkawi cheese and nigella seeds.",
    ingredients: ["Pastry dough", "Akkawi cheese", "Nigella seeds", "Egg wash"],
    steps: ["Soak akkawi in water 1 hour to remove excess salt. Drain and crumble.", "Fill pastry circles with cheese and a pinch of nigella seeds.", "Seal, brush with egg, bake at 190°C until golden."],
    tip: "<strong>Soak the akkawi</strong> — unsalted it's perfect, straight from the packet it's far too salty."
  },
  {
    name: "Fattayer Sabanekh", arabic: "فطاير سبانخ", emoji: "🌿", origin: "Lebanon · Syria · Palestine",
    description: "Triangle spinach pies with sumac, onion, and lemon — tangy, bright, and endlessly snackable.",
    ingredients: ["Yeast dough", "Spinach", "Onion", "Sumac", "Lemon juice", "Olive oil", "Pomegranate molasses"],
    steps: ["Salt and squeeze spinach completely dry. Mix with onion, sumac, lemon, and olive oil.", "Roll dough, cut circles, place filling in center.", "Fold into triangles pinching all three seams shut. Bake at 200°C 15–20 minutes."],
    tip: "<strong>Squeeze every drop of water</strong> from the spinach — wet filling unseals the pies."
  },
  {
    name: "Manakish Zaatar", arabic: "مناقيش زعتر", emoji: "🫓", origin: "Lebanon · Palestine · Syria",
    description: "Soft flatbread spread thick with zaatar-olive oil paste and baked in a screaming hot oven.",
    ingredients: ["Flatbread dough", "Zaatar blend", "Sumac", "Sesame seeds", "Olive oil"],
    steps: ["Mix zaatar with enough olive oil to make a thick spreadable paste.", "Roll dough into thin rounds; spread zaatar to the edges.", "Bake at maximum heat (250°C+) for 6–8 minutes."],
    tip: "<strong>Preheat a baking steel or stone</strong> for that bakery-style puff."
  },
  {
    name: "Manakish Jibneh", arabic: "مناقيش جبنة", emoji: "🧀", origin: "Lebanon · Palestine",
    description: "Flatbread loaded with stretchy akkawi cheese and nigella seeds — the cheesy breakfast of Lebanon.",
    ingredients: ["Flatbread dough", "Akkawi cheese", "Mozzarella", "Nigella seeds", "Olive oil"],
    steps: ["Soak akkawi 1 hour, drain, mix with mozzarella for stretchiness.", "Roll dough thin, top with cheese mixture and nigella seeds.", "Bake at 250°C until cheese bubbles and edges are golden."],
    tip: "<strong>Mix akkawi with mozzarella</strong> — akkawi alone doesn't melt well."
  },
  {
    name: "Kafta bil Bandora", arabic: "كفتة بالبندورة", emoji: "🍅", origin: "Lebanon · Palestine · Syria",
    description: "Kafta meatballs baked in rich tomato sauce with potato slices — a hearty oven dish.",
    ingredients: ["Ground lamb or beef", "Onion", "Parsley", "Allspice", "Tomatoes", "Tomato paste", "Potatoes", "Olive oil"],
    steps: ["Form kafta into oval patties; brown in oil.", "Layer sliced potatoes in baking dish, top with kafta.", "Pour spiced tomato sauce over everything, bake at 180°C for 40 minutes."],
    tip: "<strong>Slice potatoes thin</strong> — thick slices won't cook through in time."
  },
  {
    name: "Hashweh Rice", arabic: "رز بالهاشوة", emoji: "🍚", origin: "Lebanon · Syria · Palestine",
    description: "Spiced rice with ground meat and pine nuts — the versatile Levantine stuffing served as a main platter.",
    ingredients: ["Basmati rice", "Ground beef or lamb", "Pine nuts", "Allspice", "Cinnamon", "Turmeric", "Butter"],
    steps: ["Brown pine nuts in butter, remove. Brown meat in same butter.", "Add soaked rice and spices, stir to coat.", "Add stock, bring to boil, reduce to low and steam 18 minutes."],
    tip: "<strong>Toast the pine nuts first</strong> — they lose their crunch if added raw."
  },
  {
    name: "Kibbeh bil Sanieh", arabic: "كبة بالصينية", emoji: "🥮", origin: "Lebanon · Syria · Palestine",
    description: "Baked layered kibbeh — spiced bulgur-lamb shell around a pine nut and meat filling, scored into diamonds.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Pine nuts", "Butter"],
    steps: ["Make kibbeh dough: blend lamb with soaked bulgur and spices.", "Press half into oiled pan; spread cooked filling of meat and pine nuts.", "Top with remaining kibbeh dough, score diamonds, dot with butter, bake at 190°C."],
    tip: "<strong>Wet your hands constantly</strong> when pressing the dough — it sticks otherwise."
  },
  {
    name: "Kibbeh Qraas", arabic: "كبة قراص", emoji: "⚽", origin: "Lebanon · Syria",
    description: "Torpedo-shaped fried kibbeh with a crispy bulgur-lamb shell hiding a spiced meat filling.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Pine nuts", "Oil for frying"],
    steps: ["Prepare kibbeh shell dough and filling as for baked version.", "Shape into football ovals with the filling enclosed inside.", "Fry in oil at 170°C until deep golden, about 4–5 minutes."],
    tip: "<strong>Keep the shell dough cold</strong> — warm dough cracks when shaping."
  },
  {
    name: "Kibbeh bil Laban", arabic: "كبة باللبن", emoji: "🍶", origin: "Lebanon · Syria",
    description: "Fried kibbeh balls simmered in a warm garlicky yogurt sauce — the most indulgent version of kibbeh.",
    ingredients: ["Kibbeh balls", "Full-fat yogurt", "Garlic", "Dried mint", "Cornstarch", "Butter"],
    steps: ["Prepare and fry kibbeh balls until golden.", "Stabilize yogurt with cornstarch and heat gently with garlic — never boil.", "Drop kibbeh into warm yogurt, simmer 10 minutes. Finish with mint butter."],
    tip: "<strong>Stabilize the yogurt</strong> or it breaks into a grainy mess."
  },
  {
    name: "Freekeh bi Dajaj", arabic: "فريكة بالدجاج", emoji: "🍗", origin: "Palestine · Lebanon · Syria",
    description: "Whole chicken on a bed of smoky freekeh grain, finished with caramelized onions and crispy almonds.",
    ingredients: ["Whole chicken", "Whole freekeh", "Onion", "Allspice", "Cinnamon", "Coriander", "Almonds", "Butter"],
    steps: ["Poach chicken in spiced stock. Reserve the stock.", "Cook freekeh in chicken stock with spices 35–40 minutes.", "Roast or broil chicken skin-side up until golden. Serve on freekeh with almonds."],
    tip: "<strong>Don't skip the second roast</strong> — it crisps the skin after the poaching makes it soggy."
  },
  {
    name: "Mnazaleh", arabic: "منزلة", emoji: "🍆", origin: "Lebanon · Syria · Palestine",
    description: "Eggplant and chickpea stew in tomato sauce with warm spices — hearty, vegan, and deeply satisfying.",
    ingredients: ["Eggplant", "Chickpeas", "Tomatoes", "Onion", "Garlic", "Allspice", "Cinnamon", "Olive oil"],
    steps: ["Fry eggplant chunks until golden, set aside.", "Sauté onion and garlic, add tomatoes and spices, simmer 10 minutes.", "Add chickpeas and eggplant, simmer 20 minutes. Serve over rice."],
    tip: "<strong>Salt and drain eggplant</strong> for 30 minutes before frying to reduce bitterness."
  },
  {
    name: "Fasoulia Khadra", arabic: "فاصوليا خضرا", emoji: "🫘", origin: "Lebanon · Syria · Palestine",
    description: "Green beans stewed with lamb in a rich tomato sauce — a weeknight staple across the Levant.",
    ingredients: ["Green beans", "Lamb cubes", "Tomatoes", "Onion", "Garlic", "Allspice", "Cinnamon", "Tomato paste"],
    steps: ["Brown lamb until caramelized. Add onion and garlic.", "Add tomatoes, tomato paste, and spices. Build a rich sauce.", "Add green beans, cover and braise 30 minutes until tender."],
    tip: "<strong>Let the lamb caramelize</strong> — don't rush the browning step, it's the flavor base."
  },
  {
    name: "Hindbeh", arabic: "هندبة", emoji: "🌿", origin: "Lebanon",
    description: "Wild chicory sautéed in olive oil with crispy caramelized onions — bitter, earthy, and addictively good.",
    ingredients: ["Dandelion greens or chicory", "Onions", "Olive oil", "Lemon juice"],
    steps: ["Blanch chicory briefly, squeeze out water.", "Deeply caramelize sliced onions in generous olive oil.", "Toss chicory with onions and their oil. Serve with lemon wedge."],
    tip: "<strong>The bitterness is a feature</strong> — embrace it, tame it with lemon."
  },
  {
    name: "Kawareh", arabic: "كوارع", emoji: "🦴", origin: "Lebanon · Syria · Palestine",
    description: "Slow-braised cow feet in a rich spiced broth — gelatinous, warming, and deeply nourishing.",
    ingredients: ["Cow feet", "Onion", "Garlic", "Allspice", "Cinnamon", "Bay leaves", "Lemon juice", "Parsley"],
    steps: ["Clean and blanch cow feet. Discard water.", "Cover with fresh water, add onion and spices, simmer 3–4 hours until very tender.", "Serve in broth with lemon and parsley, with bread on the side."],
    tip: "<strong>Skim frequently</strong> in the first hour to keep the broth clear."
  },
  {
    name: "Dawoud Pasha Variations", arabic: "كبة برص", emoji: "🫕", origin: "Lebanon · Syria",
    description: "Ivory-speckled kibbeh poached in butter and yogurt sauce — an elegant, delicate preparation.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Pine nuts", "Yogurt", "Butter"],
    steps: ["Shape small kibbeh balls, do not fry.", "Stabilize yogurt; bring gently to a simmer with garlic.", "Drop raw kibbeh into yogurt, poach gently 15–20 minutes."],
    tip: "<strong>Poach from raw</strong> — they cook inside the yogurt and stay exceptionally tender."
  },
  {
    name: "Riz bi Sha'riyeh", arabic: "رز بالشعيرية", emoji: "🍚", origin: "Lebanon · Palestine · Syria",
    description: "Rice cooked with toasted vermicelli — simple, fragrant, and the base for countless Levantine dishes.",
    ingredients: ["Basmati rice", "Vermicelli noodles", "Butter", "Salt", "Water or stock"],
    steps: ["Break vermicelli into short pieces, toast in butter until deep golden brown.", "Add washed rice, stir to coat in the butter.", "Add boiling water or stock, season, cover and steam 18 minutes."],
    tip: "<strong>Toast the vermicelli dark</strong> — pale means underdone, and the nuttiness won't be there."
  },
  {
    name: "Knafeh Nabulsieh", arabic: "كنافة نابلسية", emoji: "🍮", origin: "Palestine (Nablus)",
    description: "Shredded filo over molten akkawi cheese soaked in orange blossom syrup — Nablus is its spiritual home.",
    ingredients: ["Kataifi", "Akkawi cheese", "Butter", "Sugar syrup", "Orange blossom water", "Pistachios"],
    steps: ["Soak akkawi overnight to remove salt. Mix kataifi with melted butter.", "Press half into greased pan, layer cheese, top with remaining kataifi.", "Bake at 190°C until golden, immediately pour cold syrup over. Flip, garnish."],
    tip: "<strong>Hot knafeh, cold syrup</strong> — the contrast creates the right texture."
  },
  {
    name: "Baklava", arabic: "بقلاوة", emoji: "🍯", origin: "Lebanon · Syria · Palestine",
    description: "Layers of buttered phyllo packed with pistachios and drenched in rose water syrup — the king of sweets.",
    ingredients: ["Phyllo dough", "Pistachios", "Clarified butter", "Sugar", "Rose water", "Orange blossom water", "Lemon"],
    steps: ["Make cold syrup with sugar, water, lemon, and flower waters.", "Layer half the phyllo in buttered pan, each sheet brushed with butter.", "Add nut filling, layer remaining phyllo, score diamonds, bake at 170°C 40 min. Pour cold syrup on hot baklava."],
    tip: "<strong>Cold syrup on hot baklava</strong> always — never both the same temperature."
  },
  {
    name: "Qatayef", arabic: "قطايف", emoji: "🥞", origin: "Lebanon · Palestine · Jordan",
    description: "Ramadan pancakes cooked one side only, filled with cheese or walnuts, sealed and fried in syrup.",
    ingredients: ["Semolina", "Flour", "Yeast", "Akkawi cheese or walnuts", "Orange blossom water", "Cinnamon"],
    steps: ["Rest yeast batter 30 minutes until bubbly. Cook one side only on dry pan.", "While warm, fill and pinch edges firmly closed.", "Fry until golden, dip in warm orange blossom syrup."],
    tip: "<strong>Seal while warm and pliable</strong> — cooled qatayef cracks at the edges."
  },
  {
    name: "Maamoul Bil Tamer", arabic: "معمول بالتمر", emoji: "🍪", origin: "Lebanon · Syria · Palestine",
    description: "Semolina shortbread stuffed with spiced date paste and pressed into carved wooden moulds.",
    ingredients: ["Fine semolina", "Flour", "Clarified butter", "Rose water", "Dates", "Cinnamon", "Orange blossom water"],
    steps: ["Rub semolina with warm butter. Add flower waters, rest 1 hour.", "Blend dates with butter and cinnamon into smooth paste.", "Shape, fill, press into mould, bake at 170°C 15–18 minutes until pale."],
    tip: "<strong>Underbake</strong> — they should look pale and firm up as they cool."
  },
  {
    name: "Riz bil Haleeb", arabic: "رز بالحليب", emoji: "🍮", origin: "Lebanon · Syria · Palestine",
    description: "Rice pudding perfumed with rose water and orange blossom, served cold with crushed pistachio.",
    ingredients: ["Short-grain rice", "Whole milk", "Sugar", "Rose water", "Orange blossom water", "Cornstarch", "Pistachios"],
    steps: ["Simmer rice in water until soft, add milk and continue stirring.", "Stir in cornstarch mixed with cold milk to thicken.", "Add sugar and flower waters, pour into bowls, chill, garnish with pistachios."],
    tip: "<strong>Keep stirring</strong> — a heavy pan and patience prevent scorching."
  },
  {
    name: "Toum", arabic: "ثوم", emoji: "🧄", origin: "Lebanon",
    description: "Fluffy white garlic emulsion — egg-free, ethereally light, and so potent it could wake the dead.",
    ingredients: ["Garlic cloves", "Neutral oil", "Lemon juice", "Ice water", "Salt"],
    steps: ["Process a full head of peeled garlic until finely minced.", "With motor running, drizzle oil in drops; alternate with lemon juice and ice water.", "Continue until all oil is incorporated and toum is white and fluffy."],
    tip: "<strong>If it breaks</strong>, start fresh garlic and slowly blend in the broken batch."
  },
  {
    name: "Maamoul bil Joz", arabic: "معمول بالجوز", emoji: "🍪", origin: "Lebanon · Syria",
    description: "Semolina shortbread stuffed with spiced walnut filling — earthy and less sweet than the date version.",
    ingredients: ["Fine semolina", "Flour", "Clarified butter", "Rose water", "Walnuts", "Sugar", "Cinnamon"],
    steps: ["Prepare semolina dough, rest 1 hour.", "Chop walnuts with sugar and cinnamon — not too fine.", "Shape, fill, mould, bake at 170°C until barely colored."],
    tip: "<strong>Coarse walnut filling</strong> — too fine and it turns to paste inside."
  },
  {
    name: "Halawet el Jibn", arabic: "حلاوة الجبن", emoji: "🍡", origin: "Lebanon · Syria",
    description: "Semolina-cheese rolls filled with cream and drizzled with syrup — a Levantine dessert treasure.",
    ingredients: ["Akkawi cheese", "Fine semolina", "Sugar syrup", "Rose water", "Clotted cream", "Pistachios"],
    steps: ["Desalt akkawi, melt with semolina over heat into a smooth stretchy dough.", "Roll thin on syrup-greased surface. Spread clotted cream, roll into logs.", "Slice, arrange on plate, drizzle with syrup, scatter pistachios."],
    tip: "<strong>Work quickly</strong> — the dough hardens as it cools and becomes impossible to roll."
  },
  {
    name: "Aish el Saraya", arabic: "عيش السرايا", emoji: "🍰", origin: "Palestine · Lebanon",
    description: "Caramelized bread pudding topped with ashta cream and pistachios — indulgent, sweet, and aromatic.",
    ingredients: ["Stale bread", "Sugar", "Water", "Rose water", "Ashta (clotted cream)", "Pistachios"],
    steps: ["Make dark caramel with sugar, add boiling water carefully to make syrup.", "Soak bread in syrup, pack into pan, press flat.", "Top with thick layer of ashta. Chill, garnish with crushed pistachio before serving."],
    tip: "<strong>Let the caramel go dark</strong> — it should be amber, not pale gold."
  },
  {
    name: "Awameh", arabic: "عوامة", emoji: "🍩", origin: "Lebanon · Syria",
    description: "Lebanese doughnut holes — light, fried dough balls dunked in aromatic sugar syrup.",
    ingredients: ["Flour", "Yeast", "Sugar", "Yogurt", "Oil for frying", "Sugar syrup", "Rose water"],
    steps: ["Mix a loose batter with flour, yeast, yogurt, and water. Rest 1 hour.", "Drop spoonfuls into hot oil and fry until golden all over.", "Dunk immediately in warm rose water syrup."],
    tip: "<strong>The batter should be very loose</strong> — a thick batter makes dense, not fluffy, awameh."
  },
  {
    name: "Kaak bil Anise", arabic: "كعك باليانسون", emoji: "🍩", origin: "Palestine · Lebanon · Syria",
    description: "Ring-shaped anise and sesame cookies — dry, crumbly, and perfect with tea.",
    ingredients: ["Flour", "Semolina", "Butter", "Anise seeds", "Sesame seeds", "Sugar", "Yeast"],
    steps: ["Knead dough with butter, anise, and sesame. Rest 30 minutes.", "Shape into rings, dip in sesame seeds.", "Bake at 170°C 20–25 minutes until dry and barely golden."],
    tip: "<strong>Bake low and slow</strong> — they should dry out, not color deeply."
  },
  {
    name: "Sfouf", arabic: "صفوف", emoji: "🟡", origin: "Lebanon",
    description: "Turmeric and anise semolina cake — golden, dairy-free, and subtly fragrant.",
    ingredients: ["Semolina", "Flour", "Sugar", "Turmeric", "Anise", "Oil or tahini", "Baking powder", "Pine nuts"],
    steps: ["Mix dry ingredients. Add oil or tahini and enough liquid to make batter.", "Pour into oiled pan, press pine nuts on top.", "Bake at 175°C for 25–30 minutes until set and a skewer comes out clean."],
    tip: "<strong>Generous turmeric</strong> — the golden color should be vivid, not pale yellow."
  },
  {
    name: "Nammoura", arabic: "نمورة", emoji: "🍰", origin: "Lebanon · Syria",
    description: "Baked semolina cake soaked in syrup — dense, sweet, and studded with almonds.",
    ingredients: ["Semolina", "Sugar", "Yogurt", "Butter", "Baking soda", "Tahini", "Almonds", "Sugar syrup"],
    steps: ["Mix semolina with sugar, yogurt, melted butter, and baking soda.", "Spread in tahini-greased pan, press almonds on top, rest 30 minutes.", "Bake at 180°C until golden. Pour cold syrup over hot cake immediately."],
    tip: "<strong>Rest before baking</strong> — the semolina needs to absorb the liquid for the right texture."
  },
  {
    name: "Layali Lubnan", arabic: "ليالي لبنان", emoji: "🌙", origin: "Lebanon",
    description: "Lebanese nights — semolina pudding topped with ashta cream, rose water, and pistachios.",
    ingredients: ["Coarse semolina", "Milk", "Sugar", "Rose water", "Ashta cream", "Pistachios", "Orange blossom water"],
    steps: ["Whisk semolina into hot milk, stir constantly until thickened.", "Add sugar and flower waters. Pour into serving dish.", "Chill until set. Spread ashta on top, garnish with pistachios."],
    tip: "<strong>Stir constantly</strong> — semolina pudding catches and lumps the moment you stop."
  },
  {
    name: "Muhallabiyeh", arabic: "مهلبية", emoji: "🍮", origin: "Lebanon · Syria · Palestine",
    description: "Silky milk pudding set with cornstarch and perfumed with rose and orange blossom water.",
    ingredients: ["Whole milk", "Sugar", "Cornstarch", "Rose water", "Orange blossom water", "Pistachios", "Pomegranate seeds"],
    steps: ["Whisk cornstarch into cold milk until smooth.", "Heat, stirring constantly, until thick and glossy. Add sugar and flower waters.", "Pour into cups, chill until set. Garnish with pistachios and pomegranate."],
    tip: "<strong>Whisk into cold milk first</strong> — adding cornstarch to hot milk creates lumps."
  },
  {
    name: "Gharibeh", arabic: "غريبة", emoji: "🍪", origin: "Lebanon · Syria",
    description: "Melt-in-the-mouth shortbread cookies made with clarified butter — just three ingredients, perfect every time.",
    ingredients: ["Flour", "Powdered sugar", "Clarified butter (ghee)", "Rose water", "Pistachios or almonds"],
    steps: ["Beat ghee with sugar until very pale and fluffy.", "Fold in flour gently — don't overwork. Chill 30 minutes.", "Shape into rounds, press a nut on top, bake at 160°C 12–15 minutes until barely colored."],
    tip: "<strong>Don't overbake</strong> — they should look raw when you take them out. They firm as they cool."
  },
  {
    name: "Atayef bil Ashta", arabic: "قطايف بالقشطة", emoji: "🥞", origin: "Lebanon · Palestine",
    description: "Ramadan pancakes filled with clotted cream and topped with syrup and crushed pistachio — not fried.",
    ingredients: ["Qatayef batter", "Ashta (clotted cream)", "Sugar syrup", "Rose water", "Pistachios"],
    steps: ["Cook qatayef one side only. Cool slightly.", "Fill with generous spoonful of ashta, leave open-faced (not pinched).", "Arrange on platter, drizzle with syrup, scatter pistachios."],
    tip: "<strong>Open not closed</strong> — unfold qatayef showcases the cream filling beautifully."
  },
  {
    name: "Sfeeha Baalbakieh", arabic: "صفيحة بعلبكية", emoji: "🫓", origin: "Lebanon (Baalbek)",
    description: "Baalbek-style open meat pies — thicker, richer, and more generously spiced than the standard sfiha.",
    ingredients: ["Yeasted dough", "Ground lamb", "Onion", "Tomato", "Tahini", "Pomegranate molasses", "Allspice"],
    steps: ["Roll dough slightly thicker than standard sfiha.", "Mix meat with tahini, pomegranate molasses, and spices.", "Spread on dough rounds and bake at 250°C until meat is cooked and edges puff."],
    tip: "<strong>The tahini in the filling</strong> is what distinguishes Baalbek style — don't skip it."
  },
  {
    name: "Hummus bil Awarma", arabic: "حمص بالعوارمة", emoji: "🫘", origin: "Lebanon · Palestine",
    description: "Creamy hummus topped with awarma — spiced rendered lamb confit — and toasted pine nuts.",
    ingredients: ["Hummus", "Awarma (lamb confit)", "Pine nuts", "Butter", "Paprika"],
    steps: ["Prepare hummus as usual and spread in bowl.", "Heat awarma gently until fragrant and slightly crispy.", "Spoon hot awarma over hummus, add pine nuts fried in butter."],
    tip: "<strong>Awarma is best made in autumn</strong> after the slaughter season — store-bought works fine."
  },
  {
    name: "Batata Harra", arabic: "بطاطا حرة", emoji: "🌶️", origin: "Lebanon",
    description: "Crispy potatoes tossed with chili, garlic, coriander, and lemon — spicy, addictive, and simple.",
    ingredients: ["Potatoes", "Garlic", "Red chili", "Cilantro", "Lemon juice", "Olive oil", "Paprika"],
    steps: ["Cube and fry or roast potatoes until crispy.", "Fry garlic and chili in olive oil briefly until fragrant.", "Toss potatoes in garlic-chili oil with cilantro and lemon."],
    tip: "<strong>Potatoes must be very crispy</strong> first — the sauce softens them and they need the structural integrity."
  },
  {
    name: "Hummus Ful", arabic: "حمص فول", emoji: "🫘", origin: "Palestine · Lebanon",
    description: "Hummus topped with warm spiced fava beans — double legume, double satisfying.",
    ingredients: ["Hummus", "Fava beans (cooked)", "Garlic", "Cumin", "Lemon", "Olive oil", "Chili", "Parsley"],
    steps: ["Prepare smooth hummus and spread in shallow bowl.", "Warm favas with garlic, cumin, and a splash of their cooking liquid.", "Spoon favas into the center of hummus, drizzle oil, top with parsley."],
    tip: "<strong>Keep the favas whole</strong> — a mash on mash has no textural contrast."
  },
  {
    name: "Spiced Lamb Chops", arabic: "قصبات الضأن", emoji: "🍖", origin: "Lebanon · Jordan · Palestine",
    description: "Rack lamb chops marinated in baharat spice blend and grilled hot — charred outside, pink inside.",
    ingredients: ["Lamb rib chops", "Allspice", "Cinnamon", "Coriander", "Cumin", "Garlic", "Lemon", "Olive oil"],
    steps: ["Marinate chops in spice blend, garlic, lemon, and olive oil 2+ hours.", "Grill or sear over very high heat 2–3 minutes per side.", "Rest 5 minutes before serving with pita and fresh salad."],
    tip: "<strong>High heat, short time</strong> — lamb chops toughen badly if overcooked."
  },
  {
    name: "Kibbeh Arnabiyeh", arabic: "كبة أرنبية", emoji: "🍋", origin: "Syria · Lebanon",
    description: "Kibbeh balls in a sour tamarind and chickpea broth — bright, tangy, and unlike any other kibbeh.",
    ingredients: ["Kibbeh balls", "Chickpeas", "Tamarind paste", "Onion", "Coriander", "Sugar", "Pomegranate molasses"],
    steps: ["Prepare and lightly fry or poach kibbeh balls.", "Build sour broth: tamarind, pomegranate molasses, chickpeas, coriander, sugar.", "Simmer kibbeh in broth 15 minutes. Balance sweet-sour before serving."],
    tip: "<strong>Taste and balance constantly</strong> — sweet-sour ratio is everything in this dish."
  },
  {
    name: "Fasoulia Bayda", arabic: "فاصوليا بيضاء", emoji: "🫘", origin: "Lebanon · Palestine · Syria",
    description: "White beans stewed with lamb and tomato in a warming spiced sauce.",
    ingredients: ["White cannellini beans", "Lamb cubes", "Tomatoes", "Onion", "Garlic", "Cumin", "Allspice", "Olive oil"],
    steps: ["Soak beans overnight, boil until tender.", "Brown lamb, add onion, garlic, and spices.", "Add tomatoes and drained beans, simmer 30 minutes. Serve over rice."],
    tip: "<strong>Don't salt beans until they're soft</strong> — salt toughens the skins during cooking."
  },
  {
    name: "Riz bil Dajaj", arabic: "رز بالدجاج", emoji: "🍗", origin: "Lebanon · Palestine · Syria",
    description: "Whole chicken on spiced hashweh rice — the Levantine centerpiece for gatherings.",
    ingredients: ["Whole chicken", "Basmati rice", "Ground beef", "Pine nuts", "Allspice", "Cinnamon", "Turmeric", "Chicken stock"],
    steps: ["Poach spiced chicken until cooked through. Reserve stock.", "Make hashweh and layer in pot. Cook rice in stock on top.", "Roast or broil chicken skin-side up until golden. Serve over rice mound."],
    tip: "<strong>Two-stage cooking</strong> — poach for flavor and tenderness, roast for the golden skin."
  },
  {
    name: "Tepsi", arabic: "تبسي", emoji: "🫕", origin: "Palestine",
    description: "Layered oven tray of beef, eggplant, potato, and tomato — Palestinian comfort food at its best.",
    ingredients: ["Beef cubes", "Eggplant", "Potatoes", "Tomatoes", "Onion", "Allspice", "Cinnamon", "Olive oil"],
    steps: ["Fry eggplant and potato slices separately until golden.", "Layer: potatoes, meat, eggplant, tomatoes in a baking tray.", "Drizzle with spiced tomato sauce. Bake at 180°C for 45 minutes."],
    tip: "<strong>Pre-frying the vegetables</strong> prevents them from turning waterlogged in the oven."
  },
  {
    name: "Mulukhiyah bi Rnab", arabic: "ملوخية بالأرنب", emoji: "🐇", origin: "Palestine · Lebanon",
    description: "Rabbit braised in mlokhieh stew — richer and gamier than the chicken version, deeply traditional.",
    ingredients: ["Rabbit (jointed)", "Mlokhieh leaves", "Garlic", "Coriander", "Lemon", "Stock", "Rice"],
    steps: ["Brown rabbit pieces with onion, cover with water and spices, simmer 1 hour.", "Cook mlokhieh in rabbit stock with garlic-coriander as for standard version.", "Serve over rice with the rabbit pieces alongside."],
    tip: "<strong>Rabbit absorbs spices better than chicken</strong> — be bold with the coriander."
  },
  {
    name: "Kibbeh Sumaqieh", arabic: "كبة سماقية", emoji: "🫐", origin: "Palestine (Gaza)",
    description: "Gazan kibbeh in a rich sumac and Swiss chard sauce — earthy, sour, and utterly unique.",
    ingredients: ["Kibbeh balls", "Swiss chard", "Sumac", "Chickpeas", "Onion", "Dill", "Olive oil"],
    steps: ["Prepare small kibbeh balls.", "Build sauce: sauté onion, add sumac, chard, chickpeas, and enough water.", "Drop kibbeh into sauce and simmer 20 minutes. Finish with dill."],
    tip: "<strong>A Gazan specialty</strong> — sumac is not a garnish here but the entire flavoring base."
  },
  {
    name: "Macarona bil Furn", arabic: "معكرونة بالفرن", emoji: "🍝", origin: "Lebanon · Palestine",
    description: "Levantine baked pasta with spiced meat sauce and béchamel — the region's take on pasta bake.",
    ingredients: ["Penne pasta", "Ground beef", "Onion", "Tomato paste", "Allspice", "Cinnamon", "Béchamel sauce", "Kashkaval cheese"],
    steps: ["Cook pasta al dente. Brown spiced meat with onion and tomato paste.", "Layer pasta with meat sauce in baking dish.", "Top with béchamel and cheese, bake at 180°C until golden."],
    tip: "<strong>Undercook the pasta</strong> — it finishes in the oven and gets a second round of heat."
  },
  {
    name: "Djaj bil Furn", arabic: "دجاج بالفرن", emoji: "🍗", origin: "Lebanon · Palestine · Syria",
    description: "Oven-roasted chicken marinated in lemon, garlic, and seven spice — simple, golden, and magnificent.",
    ingredients: ["Whole chicken", "Lemon juice", "Garlic", "Seven spice", "Olive oil", "Onion", "Potatoes"],
    steps: ["Marinate chicken with lemon, garlic, seven spice, and olive oil overnight.", "Place on bed of sliced onion and potatoes.", "Roast at 200°C 1 to 1.5 hours, basting occasionally."],
    tip: "<strong>Start breast-side down</strong> for 30 minutes then flip — the breast stays moist."
  },
  {
    name: "Batata bi Kizbara", arabic: "بطاطا بالكزبرة", emoji: "🥔", origin: "Lebanon · Palestine",
    description: "Potatoes sautéed with garlic and cilantro in olive oil — one of the simplest and most satisfying sides.",
    ingredients: ["Potatoes", "Garlic", "Cilantro", "Olive oil", "Lemon juice", "Salt", "Chili"],
    steps: ["Boil or fry potato cubes until cooked.", "Fry garlic in olive oil until golden, add chili.", "Toss potatoes in garlic oil with cilantro and a squeeze of lemon."],
    tip: "<strong>Boil then pan-fry</strong> for the best texture — fully cooked inside, crispy outside."
  },
  {
    name: "Djaj bi Riz", arabic: "دجاج بالرز", emoji: "🍚", origin: "Palestine · Lebanon · Jordan",
    description: "One-pot chicken and rice with caramelized onions and warm spices — weeknight perfection.",
    ingredients: ["Chicken thighs", "Basmati rice", "Onion", "Allspice", "Cinnamon", "Turmeric", "Chicken stock", "Almonds"],
    steps: ["Brown chicken thighs, set aside. Caramelize onions in the same pot.", "Add spices and rice, toast briefly.", "Return chicken, add stock, simmer covered 20 minutes. Rest, garnish with almonds."],
    tip: "<strong>Brown the chicken properly</strong> — those fond bits on the pot bottom flavor the whole rice."
  },
  {
    name: "Mfarakeh", arabic: "مفركة", emoji: "🥔", origin: "Lebanon",
    description: "Potatoes and eggs scrambled together with onion and cumin — a simple Lebanese home breakfast.",
    ingredients: ["Potatoes", "Eggs", "Onion", "Cumin", "Olive oil", "Salt", "Parsley"],
    steps: ["Fry diced potatoes in olive oil until golden and cooked through.", "Add sliced onion, cumin, and cook until onion softens.", "Beat in eggs, scramble gently until just set. Garnish with parsley."],
    tip: "<strong>Don't overcook the eggs</strong> — soft scramble is the goal, not rubbery chunks."
  },
  {
    name: "Beid bi Awarma", arabic: "بيض بالعوارمة", emoji: "🍳", origin: "Lebanon",
    description: "Eggs fried in sizzling rendered lamb confit — a rich, savory breakfast that needs no introduction.",
    ingredients: ["Eggs", "Awarma (lamb confit)", "Butter", "Pita bread"],
    steps: ["Heat awarma in a pan until the fat renders and it sizzles.", "Crack eggs directly into the hot pan.", "Cook to desired doneness. Serve with warm pita for dipping."],
    tip: "<strong>The rendered awarma fat</strong> is the cooking medium — don't add extra butter."
  },
  {
    name: "Cha'rieh bil Halib", arabic: "شعيرية بالحليب", emoji: "🍜", origin: "Lebanon · Palestine · Syria",
    description: "Toasted vermicelli cooked in sweetened milk — the Levantine children's dessert turned adult comfort food.",
    ingredients: ["Vermicelli noodles", "Whole milk", "Sugar", "Rose water", "Cinnamon", "Butter"],
    steps: ["Toast broken vermicelli in butter until golden brown.", "Add milk and sugar, simmer until noodles are soft and milk thickens.", "Stir in rose water, serve warm with a dusting of cinnamon."],
    tip: "<strong>Toast deeply</strong> — pale vermicelli in milk is just noodle soup, not this dessert."
  },
  {
    name: "Samboosak Bil Jibneh w Zaatar", arabic: "سمبوسك جبنة وزعتر", emoji: "🥐", origin: "Lebanon · Palestine",
    description: "Flaky pastry filled with white cheese and zaatar — an aromatic herby twist on the classic.",
    ingredients: ["Puff or shortcrust pastry", "Akkawi or feta", "Zaatar blend", "Olive oil", "Egg wash"],
    steps: ["Mix crumbled cheese with zaatar and a drizzle of olive oil.", "Fill pastry circles, seal into crescents.", "Brush with egg wash, bake at 190°C until puffed and golden."],
    tip: "<strong>Puff pastry elevates this</strong> — the flaky layers against the salty cheese is exceptional."
  },
  {
    name: "Kofta Bil Tahini", arabic: "كفتة بالطحينة", emoji: "🥙", origin: "Palestine · Lebanon · Syria",
    description: "Spiced lamb patties baked under a blanket of tahini sauce and lemon — simple and extraordinary.",
    ingredients: ["Ground lamb or beef", "Onion", "Parsley", "Allspice", "Tahini", "Lemon juice", "Garlic", "Water", "Pine nuts"],
    steps: ["Press kafta mixture into a flat layer in a baking dish.", "Whisk tahini with lemon, garlic, and water until pourable.", "Pour tahini over meat, scatter pine nuts. Bake at 190°C 25–30 min."],
    tip: "<strong>The tahini separates then reconstitutes</strong> in the oven — it will look split halfway through; keep going."
  },
  {
    name: "Djaj Mishwi", arabic: "دجاج مشوي", emoji: "🔥", origin: "Lebanon · Palestine · Syria",
    description: "Whole spatchcocked chicken marinated in yogurt and garlic, grilled until charred and juicy.",
    ingredients: ["Whole chicken (spatchcocked)", "Yogurt", "Garlic", "Lemon", "Seven spice", "Cumin", "Olive oil"],
    steps: ["Spatchcock chicken by removing backbone. Marinate overnight in yogurt spice mixture.", "Grill or roast at 220°C, skin-side up, 35–40 minutes.", "Rest 10 minutes before carving. Serve with toum and fattoush."],
    tip: "<strong>Spatchcocking</strong> means even cooking — no raw breast while legs are overcooked."
  },
  {
    name: "Salata Arabieh", arabic: "سلطة عربية", emoji: "🥗", origin: "Palestine · Lebanon · Syria",
    description: "Simple diced tomato, cucumber, and parsley salad dressed with lemon and olive oil — the everyday table salad.",
    ingredients: ["Tomatoes", "Cucumber", "Parsley", "Green onion", "Lemon juice", "Olive oil", "Salt"],
    steps: ["Dice tomatoes and cucumber into small, uniform pieces.", "Add finely chopped parsley and green onion.", "Dress with lemon juice and olive oil just before serving."],
    tip: "<strong>Dice small and uniformly</strong> — big chunks turn this elegant simplicity into a chunky mess."
  },
  {
    name: "Moutabal Batata", arabic: "متبل بطاطا", emoji: "🥔", origin: "Lebanon · Syria",
    description: "Roasted sweet potato dip with tahini and lemon — a modern Levantine twist on mutabal.",
    ingredients: ["Sweet potatoes", "Tahini", "Lemon juice", "Garlic", "Cumin", "Olive oil", "Pomegranate seeds"],
    steps: ["Roast sweet potatoes whole at 200°C until collapsed and caramelized.", "Scoop flesh, mash with tahini, lemon, garlic, and cumin.", "Serve spread with olive oil and pomegranate seeds."],
    tip: "<strong>Roast until completely collapsed</strong> — the caramelization inside is the whole flavor."
  },
  {
    name: "Makloubeh Samak", arabic: "مقلوبة سمك", emoji: "🐟", origin: "Palestine · Lebanon",
    description: "The fish version of maqluba — cauliflower and spiced fish layered with rice and flipped.",
    ingredients: ["White fish fillets", "Basmati rice", "Cauliflower", "Onion", "Cumin", "Turmeric", "Coriander", "Fish stock"],
    steps: ["Fry cauliflower florets golden. Season and pan-fry fish.", "Layer pot: cauliflower, fish, rice. Pour spiced fish stock to cover.", "Cook 25–30 minutes. Rest, then flip onto platter."],
    tip: "<strong>Firm-fleshed fish only</strong> — delicate fish breaks apart when you flip the pot."
  },
  {
    name: "Djaj bil Limon wal Toum", arabic: "دجاج بالليمون والثوم", emoji: "🍋", origin: "Lebanon",
    description: "Chicken pieces roasted in a bath of lemon juice and raw garlic — punchy, bright, and aromatic.",
    ingredients: ["Chicken pieces", "Garlic (whole head)", "Lemon juice", "Olive oil", "Rosemary", "Thyme", "Salt"],
    steps: ["Place chicken in baking dish. Scatter whole peeled garlic cloves around.", "Pour over lemon juice and olive oil. Add herbs.", "Roast at 200°C for 45–55 minutes, basting every 15 minutes."],
    tip: "<strong>The garlic mellows as it roasts</strong> — it becomes sweet and spreadable, not harsh."
  },
  {
    name: "Makanek", arabic: "معانق", emoji: "🌭", origin: "Lebanon · Syria",
    description: "Tiny Lebanese sausages spiced with pine nuts and cinnamon, pan-fried with lemon juice.",
    ingredients: ["Ground lamb or beef", "Pine nuts", "Cinnamon", "Allspice", "Cumin", "Sausage casings", "Lemon juice"],
    steps: ["Mix meat with spices and whole pine nuts. Fill into thin casings, twist into small links.", "Pan-fry over medium heat until browned and cooked through.", "Squeeze lemon juice over at the end — it sizzles and caramelizes."],
    tip: "<strong>Keep links small</strong> — about the length of a finger, so they cook evenly."
  },
  {
    name: "Raheb", arabic: "راهب", emoji: "🍆", origin: "Lebanon",
    description: "Monk's salad — charred eggplant mixed with raw tomatoes, parsley, and dressed with pomegranate molasses.",
    ingredients: ["Eggplant", "Tomatoes", "Green onion", "Parsley", "Pomegranate molasses", "Lemon juice", "Garlic", "Olive oil"],
    steps: ["Char eggplant over flame. Peel, drain, and roughly chop.", "Mix with diced tomatoes, green onion, and parsley.", "Dress with pomegranate molasses, lemon, garlic, and olive oil."],
    tip: "<strong>Chop not blend</strong> — raheb should have rustic texture, not a smooth dip."
  },
  {
    name: "Bazella wa Riz", arabic: "بازيلا ورز", emoji: "🫛", origin: "Lebanon · Palestine · Syria",
    description: "Peas and carrots in tomato sauce with lamb, served over rice — the ultimate Levantine comfort food.",
    ingredients: ["Frozen peas", "Carrots", "Lamb cubes", "Onion", "Tomatoes", "Tomato paste", "Allspice", "Basmati rice"],
    steps: ["Brown lamb. Add onion, tomatoes, tomato paste, and spices.", "Add diced carrots, simmer 20 minutes. Add peas last 10 minutes.", "Serve over plain white rice with riz bi sha'riyeh."],
    tip: "<strong>Add peas last</strong> — they overcook fast and turn grey and mushy."
  },
  {
    name: "Spinach and Lentil Soup", arabic: "شوربة سبانخ وعدس", emoji: "🍵", origin: "Lebanon · Palestine",
    description: "Earthy red lentils with spinach, lemon, and cumin — thick, warming, and incredibly simple.",
    ingredients: ["Red lentils", "Spinach", "Onion", "Garlic", "Cumin", "Lemon juice", "Olive oil", "Chili"],
    steps: ["Sauté onion and garlic. Add lentils, water, and cumin.", "Simmer 20 minutes until lentils dissolve.", "Add spinach, cook 2 minutes. Finish with lemon and chili-olive oil drizzle."],
    tip: "<strong>Wilt the spinach at the end</strong> — long cooking turns it slimy and dull."
  },
  {
    name: "Jawaneh Dajaj", arabic: "جوانح دجاج", emoji: "🍗", origin: "Lebanon",
    description: "Chicken wings marinated in garlic, lemon, and spices, grilled until charred and sticky.",
    ingredients: ["Chicken wings", "Garlic", "Lemon juice", "Seven spice", "Olive oil", "Pomegranate molasses"],
    steps: ["Marinate wings in garlic, lemon, spices, and pomegranate molasses overnight.", "Grill or roast at 220°C, turning once, until charred and cooked through.", "Serve with toum and pickled vegetables."],
    tip: "<strong>Pomegranate molasses chars beautifully</strong> on the grill — watch closely so it doesn't burn."
  },
  {
    name: "Kishk Soup", arabic: "شوربة كشك", emoji: "🥣", origin: "Lebanon · Syria",
    description: "Fermented dried yogurt-wheat soup with crispy onions and butter — ancient, unique, and deeply warming.",
    ingredients: ["Kishk powder", "Onion", "Garlic", "Butter", "Water or stock", "Dried mint"],
    steps: ["Deeply caramelize sliced onion in butter until dark golden.", "Add garlic, then kishk powder dissolved in water.", "Simmer stirring frequently until thick and smooth. Top with extra caramelized onion."],
    tip: "<strong>Kishk thickens fast</strong> — keep stirring and add water if it becomes too thick."
  },
  {
    name: "Djaj bi Qawareh", arabic: "دجاج بالقوارع", emoji: "🍲", origin: "Lebanon · Palestine",
    description: "Chicken and artichoke hearts in a bright lemon and olive oil braise — spring on a plate.",
    ingredients: ["Chicken pieces", "Artichoke hearts", "Onion", "Garlic", "Lemon juice", "Olive oil", "Allspice", "Parsley"],
    steps: ["Brown chicken. Add onion and garlic.", "Add artichoke hearts, allspice, and enough water to braise.", "Simmer 35 minutes. Finish with lemon and parsley."],
    tip: "<strong>Frozen artichoke hearts work perfectly</strong> here — no need to prep fresh."
  },
  {
    name: "Saloona", arabic: "صالونة", emoji: "🍲", origin: "Palestine · Jordan",
    description: "A versatile Palestinian vegetable and meat stew with turmeric, allspice, and whatever vegetables are in season.",
    ingredients: ["Lamb or chicken", "Zucchini", "Potatoes", "Carrots", "Tomatoes", "Turmeric", "Allspice", "Cinnamon"],
    steps: ["Brown meat with onion. Add spices.", "Add diced root vegetables, cover with water and simmer 30 minutes.", "Add softer vegetables like zucchini last 15 minutes."],
    tip: "<strong>Add vegetables in stages</strong> by cooking time — root vegetables first, soft ones last."
  },
  {
    name: "Kibbeh Mishwiyeh", arabic: "كبة مشوية", emoji: "🔥", origin: "Lebanon · Syria",
    description: "Flat kibbeh patties grilled directly on charcoal — smoky, quick, and full of fragrant spice.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Black pepper", "Mint"],
    steps: ["Make kibbeh mixture — well seasoned and smooth.", "Shape into flat oval patties about 1.5cm thick.", "Grill over charcoal 3–4 minutes per side. Serve with yogurt and flatbread."],
    tip: "<strong>Charcoal only</strong> — gas grill doesn't give the smoke that defines this dish."
  },
  {
    name: "Kabis Lift", arabic: "كبيس لفت", emoji: "💜", origin: "Lebanon · Palestine · Syria",
    description: "Pink pickled turnips — the vivid condiment that accompanies shawarma, falafel, and mezze across the Levant.",
    ingredients: ["Turnips", "Beets", "Garlic", "White vinegar", "Salt", "Water"],
    steps: ["Cut turnips into sticks or wedges. Add a slice of beet for color.", "Pack tightly into sterilized jars with garlic cloves.", "Pour brine of equal vinegar and water with salt. Seal, rest 5–7 days."],
    tip: "<strong>The beet is only for color</strong> — the vinegar brine does all the pickling work."
  },
  {
    name: "Kabis Khiar", arabic: "كبيس خيار", emoji: "🥒", origin: "Lebanon · Palestine · Syria",
    description: "Brined dill pickles — crunchy, garlicky, and essential on the Levantine table.",
    ingredients: ["Small cucumbers", "Garlic", "Dill", "White vinegar", "Salt", "Water", "Bay leaves"],
    steps: ["Pack cucumbers tightly in sterilized jars with garlic and dill.", "Dissolve salt in boiling water, add vinegar, cool slightly.", "Pour brine over cucumbers. Seal, refrigerate 3–5 days."],
    tip: "<strong>Use smallest cucumbers possible</strong> — they stay crispier and have fewer seeds."
  },
  {
    name: "Maqadem", arabic: "مقادم", emoji: "🦶", origin: "Lebanon · Palestine",
    description: "Braised lamb trotters with garlic and chickpeas — gelatinous, rich, and deeply traditional.",
    ingredients: ["Lamb trotters", "Chickpeas", "Garlic", "Allspice", "Cinnamon", "Bay leaves", "Lemon", "Parsley"],
    steps: ["Blanch trotters, discard water. Cover with fresh water and spices.", "Simmer 3 hours until meat is falling from the bone.", "Add chickpeas last 30 minutes. Serve in broth with lemon."],
    tip: "<strong>Long, patient cooking</strong> is the only way — there are no shortcuts with trotters."
  },
  {
    name: "Waraq al-Aish", arabic: "ورق العيش", emoji: "🌿", origin: "Palestine",
    description: "Stuffed vine leaves with a Palestinian twist — more lemony and olive-oily than other versions.",
    ingredients: ["Vine leaves", "Short-grain rice", "Tomatoes", "Parsley", "Lemon juice", "Olive oil", "Allspice"],
    steps: ["Mix rice with tomatoes, parsley, lemon, olive oil, and allspice.", "Roll vine leaves snugly around filling.", "Pack tight, weight down, steam in lemon-water 45 minutes."],
    tip: "<strong>Palestinian style uses more lemon</strong> — be generous, it brightens everything."
  },
  {
    name: "Dawali Abyad", arabic: "دوالي أبيض", emoji: "🍃", origin: "Lebanon",
    description: "White grape leaf rolls — rice-only stuffing with olive oil and lemon, cooked without tomato.",
    ingredients: ["Grape leaves", "Short-grain rice", "Onion", "Mint", "Parsley", "Lemon juice", "Olive oil", "Allspice"],
    steps: ["Mix rice with herbs, onion, oil, and lemon — no meat or tomato.", "Roll tightly, pack into pot on a bed of tomato slices.", "Steam in olive oil and water 40 minutes until rice is cooked."],
    tip: "<strong>A generous pour of olive oil</strong> into the pot is what makes these rich, not bland."
  },
  {
    name: "Yakhnet Batata", arabic: "يخنة بطاطا", emoji: "🥔", origin: "Lebanon · Palestine",
    description: "Potato stew with lamb in a light tomato broth — warming, simple, and universally loved.",
    ingredients: ["Potatoes", "Lamb", "Onion", "Tomatoes", "Tomato paste", "Allspice", "Cinnamon", "Olive oil"],
    steps: ["Brown lamb with onion. Build tomato sauce with spices.", "Add cubed potatoes, cover with water.", "Simmer 30–35 minutes until potatoes are very tender."],
    tip: "<strong>Don't stir too much</strong> — potatoes break apart and the stew turns starchy."
  },
  {
    name: "Kushary", arabic: "كشري", emoji: "🍱", origin: "Egypt · Palestine",
    description: "Lentils, rice, pasta, and crispy onions under a spiced tomato sauce — Egyptian street food beloved across the Levant.",
    ingredients: ["Brown lentils", "Rice", "Macaroni", "Onion", "Tomatoes", "Garlic", "Cumin", "Vinegar", "Chili"],
    steps: ["Cook lentils. Cook rice. Cook macaroni. Deeply fry onions until crispy.", "Make tomato-vinegar-cumin sauce separately.", "Layer: lentils, rice, pasta. Top with tomato sauce and crispy onions."],
    tip: "<strong>Deeply crispy onions are non-negotiable</strong> — they provide all the textural contrast."
  },
  {
    name: "Jibneh Meshwiyeh", arabic: "جبنة مشوية", emoji: "🧀", origin: "Lebanon · Syria",
    description: "Grilled halloumi or akkawi cheese, sizzling and golden — eaten with tomato, olives, and pita.",
    ingredients: ["Halloumi or akkawi cheese", "Olive oil", "Thyme", "Lemon", "Tomatoes"],
    steps: ["Slice cheese 1cm thick. Pat dry.", "Grill or pan-fry without oil (halloumi) until golden grill marks form on each side.", "Drizzle with olive oil and lemon, scatter thyme. Serve immediately."],
    tip: "<strong>Eat immediately</strong> — grilled cheese turns rubbery within minutes of cooling."
  },
  {
    name: "Salata Batata", arabic: "سلطة بطاطا", emoji: "🥗", origin: "Lebanon · Palestine",
    description: "Warm potato salad with olive oil, lemon, parsley, and green onion — simple and endlessly versatile.",
    ingredients: ["Potatoes", "Parsley", "Green onion", "Lemon juice", "Olive oil", "Salt", "Cumin"],
    steps: ["Boil potatoes in salted water until just tender. Drain.", "While warm, toss with lemon, olive oil, and cumin.", "Add parsley and green onion. Serve warm or at room temperature."],
    tip: "<strong>Dress while warm</strong> — hot potatoes absorb dressing; cold ones don't."
  },
  {
    name: "Zucchini Fritters", arabic: "عجة الكوسا", emoji: "🥒", origin: "Lebanon · Palestine",
    description: "Grated zucchini fritters with egg, flour, and mint — crispy outside, creamy within.",
    ingredients: ["Zucchini", "Eggs", "Flour", "Mint", "Green onion", "Salt", "Olive oil"],
    steps: ["Grate zucchini, salt heavily and squeeze completely dry.", "Mix with eggs, flour, mint, and green onion.", "Fry spoonfuls in olive oil until golden both sides."],
    tip: "<strong>Squeeze until bone dry</strong> — residual water makes the batter runny and the fritters soggy."
  },
  {
    name: "Ajja Bayd", arabic: "عجة بيض", emoji: "🍳", origin: "Lebanon · Palestine",
    description: "Herb omelette with parsley, green onion, and cumin — the quick Lebanese egg dish.",
    ingredients: ["Eggs", "Parsley", "Green onion", "Cumin", "Salt", "Olive oil"],
    steps: ["Beat eggs with chopped herbs, green onion, cumin, and salt.", "Heat olive oil in pan over medium heat.", "Pour in egg mixture, cook without stirring until set. Flip once."],
    tip: "<strong>Medium heat</strong> — too hot and the outside burns before the center sets."
  }
,
  {
    name: "Sfeeha bil Lahm wal Khdar", arabic: "صفيحة لحم وخضار", emoji: "🫓", origin: "Lebanon · Syria",
    description: "Open meat pies loaded with minced vegetables and lamb — a heartier, more rustic sfiha.",
    ingredients: ["Yeasted dough", "Ground lamb", "Onion", "Bell pepper", "Tomato", "Parsley", "Allspice", "Pomegranate molasses"],
    steps: ["Finely dice all vegetables and mix raw with the lamb and spices.", "Roll thin dough rounds and spread filling to the edges.", "Bake at 250°C for 8–10 minutes until meat is cooked and edges char."],
    tip: "<strong>Don't pre-cook the filling</strong> — raw meat and veg release juices as they bake, keeping the topping moist."
  },
  {
    name: "Djaj bil Sumac", arabic: "دجاج بالسماق", emoji: "🍗", origin: "Palestine · Lebanon",
    description: "Chicken braised with caramelized onions and sumac until deeply tangy and tender — musakhan in a pot.",
    ingredients: ["Chicken pieces", "Onions", "Sumac", "Allspice", "Olive oil", "Lemon juice", "Pine nuts"],
    steps: ["Caramelize sliced onions in generous olive oil 40 minutes.", "Add chicken, sumac, allspice — toss to coat.", "Add a splash of water, cover, braise 35 minutes. Finish with pine nuts."],
    tip: "<strong>Be generous with sumac</strong> — use 3–4 tablespoons; it's the whole flavor profile."
  },
  {
    name: "Beid Ghanam", arabic: "بيض غنم", emoji: "🥚", origin: "Lebanon · Palestine",
    description: "Lamb testicles pan-fried with garlic and lemon — an offal delicacy eaten as mezze in village Lebanon.",
    ingredients: ["Lamb testicles", "Garlic", "Lemon juice", "Butter", "Parsley", "Salt", "Black pepper"],
    steps: ["Blanch briefly, peel outer membrane, slice in half.", "Sauté in butter with garlic until golden brown on each side.", "Deglaze with lemon juice, scatter parsley. Serve immediately."],
    tip: "<strong>High heat and quick cooking</strong> — they toughen badly if overcooked."
  },
  {
    name: "Mfaraket Kousa", arabic: "مفركة كوسا", emoji: "🥒", origin: "Lebanon",
    description: "Zucchini scrambled with eggs and onion — a light, fresh summer one-pan meal.",
    ingredients: ["Zucchini", "Eggs", "Onion", "Garlic", "Mint", "Olive oil", "Salt"],
    steps: ["Slice zucchini thin, sauté in olive oil with onion until golden and softened.", "Add garlic, cook 1 minute more.", "Pour in beaten eggs, stir gently until just set. Finish with fresh mint."],
    tip: "<strong>Don't rush the zucchini</strong> — it needs to caramelize, not steam."
  },
  {
    name: "Laban Immo", arabic: "لبن إمه", emoji: "🍶", origin: "Lebanon · Syria",
    description: "Lamb in mother's yogurt — baby lamb pieces simmered in garlic-scented stabilized yogurt until silky.",
    ingredients: ["Baby lamb pieces", "Full-fat yogurt", "Garlic", "Cornstarch", "Dried mint", "Butter", "Rice"],
    steps: ["Brown lamb pieces with onion. Set aside.", "Stabilize yogurt with cornstarch, warm gently with garlic.", "Drop lamb into yogurt, simmer on very low 30 minutes. Finish with mint butter."],
    tip: "<strong>The lower the heat the better</strong> — this dish should barely tremble, never boil."
  },
  {
    name: "Maqloubeh Djaj", arabic: "مقلوبة دجاج", emoji: "🍚", origin: "Palestine · Jordan",
    description: "Chicken maqluba with cauliflower — the most popular version of the upside-down rice dish.",
    ingredients: ["Chicken pieces", "Basmati rice", "Cauliflower", "Allspice", "Turmeric", "Cinnamon", "Pine nuts", "Chicken stock"],
    steps: ["Fry cauliflower until golden. Brown chicken in pot.", "Layer cauliflower then soaked rice; pour spiced stock to barely cover.", "Cook covered 30 minutes on low. Rest, then flip with confidence."],
    tip: "<strong>Use a towel under the lid</strong> to absorb steam and stop water dripping back in."
  },
  {
    name: "Shorbat Adas Ahmar", arabic: "شوربة عدس أحمر", emoji: "🍵", origin: "Syria · Lebanon · Palestine",
    description: "Simple blended red lentil soup with onion, cumin, and turmeric — thick, warming, and almost no effort.",
    ingredients: ["Red lentils", "Onion", "Garlic", "Cumin", "Turmeric", "Lemon juice", "Olive oil", "Bread croutons"],
    steps: ["Sauté onion and garlic. Add lentils, turmeric, water, and cumin.", "Simmer 20 minutes until lentils fully dissolve.", "Blend smooth. Serve with lemon, crispy croutons, and a swirl of olive oil."],
    tip: "<strong>Red lentils dissolve on their own</strong> — no pre-soaking, no draining needed."
  },
  {
    name: "Khodra Mishwiyeh", arabic: "خضار مشوية", emoji: "🥦", origin: "Lebanon · Palestine · Syria",
    description: "Grilled seasonal vegetables with olive oil and lemon — the Levantine side that makes everything better.",
    ingredients: ["Eggplant", "Zucchini", "Bell peppers", "Red onion", "Olive oil", "Lemon juice", "Garlic", "Za'atar"],
    steps: ["Slice vegetables, toss in olive oil, garlic, and salt.", "Grill over high heat until charred lines appear and vegetables soften.", "Dress with lemon and scatter za'atar. Serve warm or at room temperature."],
    tip: "<strong>Don't move them</strong> once placed on the grill — let them char, then turn once."
  },
  {
    name: "Halloumi Mashwi ma Dibs al-Rumman", arabic: "حلوم مشوي مع دبس الرمان", emoji: "🧀", origin: "Lebanon · Palestine",
    description: "Grilled halloumi drizzled with pomegranate molasses and fresh mint — the sweet-salty balance is perfect.",
    ingredients: ["Halloumi", "Pomegranate molasses", "Mint", "Olive oil", "Pomegranate seeds"],
    steps: ["Slice halloumi, grill in dry pan until golden on both sides.", "Transfer to plate immediately.", "Drizzle pomegranate molasses, scatter mint and seeds, finish with olive oil."],
    tip: "<strong>Serve within 2 minutes</strong> of grilling — halloumi turns chewy and rubbery fast."
  },
  {
    name: "Salata Jimjim", arabic: "سلطة جمجم", emoji: "🥗", origin: "Palestine",
    description: "Raw cauliflower salad with parsley, lemon, and olive oil — bright, crunchy, and underrated.",
    ingredients: ["Raw cauliflower", "Parsley", "Lemon juice", "Olive oil", "Garlic", "Salt", "Cumin"],
    steps: ["Break cauliflower into tiny florets. Chop parsley finely.", "Mix with minced garlic, lemon juice, cumin, and olive oil.", "Season generously with salt. Rest 15 minutes before serving."],
    tip: "<strong>Let it rest</strong> — the lemon slightly softens the cauliflower and brightens the flavor."
  },
  {
    name: "Kibbeh Nabilsieh", arabic: "كبة نابلسية", emoji: "⚽", origin: "Palestine (Nablus)",
    description: "Large torpedo-shaped kibbeh specific to Nablus — fried until a deep mahogany crust forms.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Pine nuts", "Oil for frying"],
    steps: ["Prepare kibbeh shell and filling. Shape into large torpedo ovals.", "Refrigerate 30 minutes to firm up.", "Fry in deep oil at 165°C for 6–8 minutes until deep brown all over."],
    tip: "<strong>Lower temperature, longer time</strong> — the thick shape needs heat to penetrate to the center."
  },
  {
    name: "Sawda Dajaj", arabic: "صوادر دجاج", emoji: "🍗", origin: "Lebanon",
    description: "Chicken livers sautéed with pomegranate molasses and spices — sharp, rich, and unmistakably Lebanese.",
    ingredients: ["Chicken livers", "Onion", "Garlic", "Pomegranate molasses", "Allspice", "Lemon juice", "Olive oil", "Parsley"],
    steps: ["Trim livers, pat very dry. Season with allspice, salt, and pepper.", "Sear in very hot oil without moving until caramelized.", "Add garlic, pomegranate molasses, and lemon. Toss, cook 1 minute. Scatter parsley."],
    tip: "<strong>A screaming hot pan</strong> and totally dry livers — any moisture and they steam instead of sear."
  },
  {
    name: "Djaj Mahshi", arabic: "دجاج محشي", emoji: "🍗", origin: "Lebanon · Palestine · Syria",
    description: "Whole chicken stuffed with hashweh rice and roasted until golden — the celebration centerpiece.",
    ingredients: ["Whole chicken", "Hashweh (spiced rice and meat)", "Allspice", "Cinnamon", "Butter", "Pine nuts"],
    steps: ["Make hashweh and stuff inside cleaned chicken. Truss the opening.", "Rub chicken with butter and spices.", "Roast at 190°C 1.5 hours, basting occasionally until deep golden."],
    tip: "<strong>Don't overstuff</strong> — the rice expands inside as it cooks. Fill two-thirds."
  },
  {
    name: "Bamia bi Zayt", arabic: "بامية بالزيت", emoji: "🌿", origin: "Lebanon · Palestine",
    description: "Okra braised in olive oil and tomatoes without meat — a hearty, vegan version of the classic.",
    ingredients: ["Okra", "Tomatoes", "Garlic", "Coriander", "Lemon juice", "Olive oil", "Onion"],
    steps: ["Trim okra tips without breaching pod. Fry in olive oil until golden.", "Sauté onion and garlic. Add tomatoes and coriander.", "Combine okra with sauce, simmer 20 minutes. Finish with lemon."],
    tip: "<strong>Vegan but not bland</strong> — generous olive oil and garlic are what carry the flavor."
  },
  {
    name: "Shorbet Freekeh bil Khodra", arabic: "شوربة فريكة بالخضار", emoji: "🥣", origin: "Lebanon · Palestine",
    description: "Freekeh vegetable soup with root vegetables and warm spices — vegan and deeply nourishing.",
    ingredients: ["Cracked freekeh", "Carrots", "Zucchini", "Celery", "Onion", "Allspice", "Cumin", "Olive oil"],
    steps: ["Sauté onion and celery in olive oil. Add root vegetables.", "Add freekeh, spices, and water. Simmer 25 minutes.", "Add zucchini last 10 minutes. Adjust seasoning, serve with lemon."],
    tip: "<strong>Use cracked freekeh</strong> for soup, whole for rice dishes — it cooks much faster."
  },
  {
    name: "Addas bil Jubn", arabic: "عدس بالجبن", emoji: "🫘", origin: "Lebanon",
    description: "Warm lentil salad with crumbled cheese, caramelized onion, and pomegranate seeds.",
    ingredients: ["Green or beluga lentils", "Feta or shanklish", "Onion", "Pomegranate seeds", "Pomegranate molasses", "Olive oil", "Mint"],
    steps: ["Cook lentils until tender but not mushy. Drain.", "Caramelize onion until deep golden.", "Toss lentils with onion, dress with pomegranate molasses and oil. Top with cheese and seeds."],
    tip: "<strong>Dress while warm</strong> — lentils absorb dressing better and the cheese softens pleasantly."
  },
  {
    name: "Macarona bil Dajaj", arabic: "معكرونة بالدجاج", emoji: "🍝", origin: "Lebanon · Palestine",
    description: "Pasta with shredded chicken in a spiced tomato sauce — Levantine weeknight comfort.",
    ingredients: ["Penne or spaghetti", "Chicken breast", "Onion", "Tomatoes", "Tomato paste", "Allspice", "Cinnamon", "Parsley"],
    steps: ["Poach chicken in spiced water. Shred. Reserve the stock.", "Make tomato sauce using the chicken stock as the liquid.", "Cook pasta in salted water, toss with sauce and chicken."],
    tip: "<strong>Use the poaching stock</strong> in the sauce — it adds deep chicken flavor throughout."
  },
  {
    name: "Foul Akhdar", arabic: "فول أخضر", emoji: "🫘", origin: "Lebanon · Palestine · Syria",
    description: "Fresh green fava beans sautéed with garlic and olive oil — a fleeting spring treat.",
    ingredients: ["Fresh green favas (double-peeled)", "Garlic", "Olive oil", "Lemon juice", "Mint", "Salt"],
    steps: ["Double-peel fresh favas: remove pod, then peel the grey inner skin.", "Sauté garlic in olive oil briefly, add favas.", "Cook 3–5 minutes, squeeze lemon over, scatter mint. Serve immediately."],
    tip: "<strong>Double-peel young favas</strong> — the inner grey skin turns bitter and tough if left on."
  },
  {
    name: "Samak bil Furn", arabic: "سمك بالفرن", emoji: "🐟", origin: "Lebanon · Palestine",
    description: "Whole fish baked in lemon, garlic, and olive oil with tomatoes and herbs.",
    ingredients: ["Whole sea bass or red mullet", "Tomatoes", "Garlic", "Lemon", "Parsley", "Olive oil", "Cumin"],
    steps: ["Score fish deeply on both sides. Rub with cumin, garlic, salt, and olive oil.", "Lay on bed of sliced tomatoes and lemon.", "Bake at 200°C for 25–30 minutes until flesh flakes easily."],
    tip: "<strong>The tomato bed</strong> steams the fish from below and creates a natural sauce."
  },
  {
    name: "Sambousek Batata", arabic: "سمبوسك بطاطا", emoji: "🥐", origin: "Lebanon · Palestine",
    description: "Pastry crescents filled with spiced mashed potato and herbs — a vegetarian crowd pleaser.",
    ingredients: ["Pastry dough", "Potatoes", "Onion", "Cumin", "Coriander", "Chili", "Parsley", "Lemon"],
    steps: ["Boil and mash potatoes. Fry onion until golden, add spices and herbs.", "Mix into mashed potato with lemon. Cool.", "Fill pastry, seal, bake or fry until golden."],
    tip: "<strong>Cool the filling</strong> completely — warm potato filling turns the pastry soggy before it seals."
  },
  {
    name: "Sfiha Jibneh", arabic: "صفيحة جبنة", emoji: "🫓", origin: "Lebanon · Palestine",
    description: "Open cheese flatbread with akkawi and nigella seeds — a quick, crowd-pleasing alternative to meat sfiha.",
    ingredients: ["Pizza dough", "Akkawi cheese", "Nigella seeds", "Olive oil", "Dried thyme"],
    steps: ["Soak akkawi, drain, and crumble.", "Top thin dough rounds with cheese, nigella, and a drizzle of olive oil.", "Bake at maximum oven heat until edges puff and cheese melts."],
    tip: "<strong>Soak akkawi first</strong> — straight from the packet it's overwhelmingly salty."
  },
  {
    name: "Shorbat Dajaj", arabic: "شوربة دجاج", emoji: "🍵", origin: "Lebanon · Palestine · Syria",
    description: "Levantine chicken soup with vermicelli and lemon — clear, restorative, and deeply comforting.",
    ingredients: ["Whole chicken", "Onion", "Celery", "Carrots", "Cinnamon", "Allspice", "Vermicelli", "Lemon juice"],
    steps: ["Simmer whole chicken with vegetables and spices 1 hour. Skim often.", "Remove chicken, shred meat, strain broth.", "Return shredded chicken, add vermicelli, cook 8 minutes. Finish with lemon."],
    tip: "<strong>A clear broth takes patience</strong> — skim the foam in the first 20 minutes constantly."
  },
  {
    name: "Kibbeh Samak", arabic: "كبة سمك", emoji: "🐟", origin: "Palestine (Gaza) · Lebanon",
    description: "Fish kibbeh — a bulgur-fish shell around a herb and nut filling, fried until golden.",
    ingredients: ["White fish fillet", "Fine bulgur", "Onion", "Cumin", "Coriander", "Pine nuts", "Parsley", "Oil"],
    steps: ["Blend raw fish with soaked bulgur, onion, cumin, and salt into a dough.", "Make filling of fried onion, pine nuts, and parsley.", "Shape and fill like standard kibbeh. Fry at 175°C until golden."],
    tip: "<strong>Use firm white fish</strong> like hake or cod — soft fish makes an unstable shell."
  },
  {
    name: "Qidreh", arabic: "قدرة", emoji: "🍖", origin: "Palestine (Hebron)",
    description: "Hebron's clay-pot dish — lamb and chickpeas slowly cooked with rice in allspice and turmeric.",
    ingredients: ["Bone-in lamb", "Chickpeas", "Basmati rice", "Onion", "Allspice", "Turmeric", "Cinnamon", "Cardamom"],
    steps: ["Traditionally cooked in a clay pot in a communal bakery oven overnight.", "Brown lamb, add chickpeas, onion, and spices with water.", "Add soaked rice, cover tightly and cook at 160°C for 2 hours."],
    tip: "<strong>The clay pot matters</strong> — the mineral earthiness of the pot is part of the flavor."
  },
  {
    name: "Fattah Khodra", arabic: "فتة خضار", emoji: "🥗", origin: "Palestine · Syria",
    description: "Vegetable fatteh with eggplant and chickpeas over toasted pita and yogurt — a rich vegan version.",
    ingredients: ["Pita", "Eggplant", "Chickpeas", "Yogurt", "Tahini", "Garlic", "Lemon", "Pine nuts", "Pomegranate seeds"],
    steps: ["Fry eggplant cubes until golden. Toast pita pieces.", "Spread pita in dish, top with eggplant and warmed chickpeas.", "Cover with tahini-yogurt sauce. Garnish with pine nuts and pomegranate."],
    tip: "<strong>Assemble in order</strong> — pita absorbs, eggplant sinks, sauce pools. Each layer matters."
  },
  {
    name: "Lahm bi Ajeen", arabic: "لحم بعجين", emoji: "🫓", origin: "Lebanon · Syria",
    description: "Wafer-thin meat flatbread — like sfiha but rolled ultra-thin so it crisps like a cracker.",
    ingredients: ["Pizza dough", "Ground lamb", "Onion", "Tomato", "Parsley", "Lemon juice", "Allspice", "Pomegranate molasses"],
    steps: ["Roll dough as thin as possible — almost translucent.", "Spread a very thin layer of spiced raw meat to the edges.", "Bake at 250°C for 5–7 minutes. Roll and eat immediately."],
    tip: "<strong>Ultra thin is the goal</strong> — if you can read text through it, you're on the right track."
  },
  {
    name: "Warak Einab bil Lahmeh", arabic: "ورق عنب باللحمة", emoji: "🍃", origin: "Lebanon · Syria",
    description: "Meat-stuffed grape leaves with rice and lamb filling, cooked on a bed of lamb chops.",
    ingredients: ["Grape leaves", "Ground lamb", "Short-grain rice", "Allspice", "Cinnamon", "Lamb chops", "Lemon", "Olive oil"],
    steps: ["Mix rice with raw ground lamb and spices.", "Roll leaves tightly around filling.", "Line pot with lamb chops, pack rolls on top, pour lemon-oil-water over. Steam 45 minutes."],
    tip: "<strong>Lamb chops on the bottom</strong> prevent burning and add incredible flavor to the rolls above."
  },
  {
    name: "Shish Barak bil Bandora", arabic: "شيش برك بالبندورة", emoji: "🥟", origin: "Syria · Lebanon",
    description: "Tiny lamb dumplings in a rich tomato sauce instead of yogurt — earthier and bolder than the yogurt version.",
    ingredients: ["Dumpling dough", "Ground lamb", "Onion", "Allspice", "Tomatoes", "Tomato paste", "Garlic", "Coriander"],
    steps: ["Fill and seal dumplings. Toast lightly in oven.", "Make rich tomato-coriander sauce.", "Simmer dumplings in tomato sauce 15 minutes until cooked through."],
    tip: "<strong>Toast the dumplings first</strong> — they hold their shape better in the sauce."
  },
  {
    name: "Batata Mashwiyeh", arabic: "بطاطا مشوية", emoji: "🥔", origin: "Lebanon · Palestine",
    description: "Grilled potato wedges with garlic, cumin, and lemon — the perfect mezze accompaniment.",
    ingredients: ["Potatoes", "Garlic", "Cumin", "Paprika", "Lemon juice", "Olive oil", "Parsley"],
    steps: ["Cut potatoes into wedges. Parboil 10 minutes, drain, pat dry.", "Toss with olive oil, garlic, cumin, and paprika.", "Grill or roast at 220°C until charred and crispy. Finish with lemon."],
    tip: "<strong>Parboil first</strong> — the exterior crisps up dramatically better on a pre-cooked potato."
  },
  {
    name: "Salata Khodra Mashkouleh", arabic: "سلطة خضار مشكولة", emoji: "🥗", origin: "Lebanon",
    description: "Mixed Lebanese green salad with cucumber, radish, mint, and a lemon-olive oil dressing.",
    ingredients: ["Romaine", "Cucumber", "Radish", "Mint", "Parsley", "Green onion", "Lemon", "Olive oil"],
    steps: ["Tear romaine into large pieces.", "Slice cucumber and radish thin.", "Dress with lemon, olive oil, and salt just before serving."],
    tip: "<strong>Dress at the very last moment</strong> — overdressed greens wilt within minutes."
  },
  {
    name: "Nkhalet Dajaj", arabic: "نخالة دجاج", emoji: "🍗", origin: "Palestine",
    description: "Palestinian slow-cooked chicken with onion, allspice, and tomato — eaten over flatbread.",
    ingredients: ["Chicken pieces", "Onion", "Allspice", "Cinnamon", "Tomatoes", "Olive oil", "Flatbread"],
    steps: ["Brown chicken pieces with onion in olive oil.", "Add tomatoes and spices. Add enough water to braise.", "Simmer covered 45 minutes. Serve over torn flatbread."],
    tip: "<strong>Generous onion</strong> — it melts into the sauce and provides the sweetness."
  },
  {
    name: "Maqluba Lahm", arabic: "مقلوبة لحم", emoji: "🍚", origin: "Palestine · Jordan",
    description: "Lamb maqluba with eggplant and cauliflower — the richest, most celebratory version of the dish.",
    ingredients: ["Bone-in lamb", "Basmati rice", "Eggplant", "Cauliflower", "Allspice", "Cinnamon", "Turmeric", "Lamb stock"],
    steps: ["Braise lamb until tender. Fry eggplant and cauliflower until golden.", "Layer lamb, vegetables, and soaked rice in pot. Pour lamb stock to cover.", "Cook 30 minutes. Rest 10 minutes. Flip confidently."],
    tip: "<strong>Lamb stock is richer than chicken</strong> — the maqluba will have a deeper, meatier flavor."
  },
  {
    name: "Sharhat al-Dajaj", arabic: "شرحات الدجاج", emoji: "🍗", origin: "Lebanon · Palestine",
    description: "Thinly pounded chicken breast, spiced and pan-fried until golden — quick and flavorful.",
    ingredients: ["Chicken breast", "Allspice", "Paprika", "Garlic powder", "Lemon", "Olive oil", "Parsley"],
    steps: ["Pound chicken breasts to even 1cm thickness.", "Season generously with spices and rest 30 minutes.", "Pan-fry in olive oil 3 minutes per side until golden. Squeeze lemon over."],
    tip: "<strong>Pound evenly</strong> — thick and thin parts cook at different rates, one will always be wrong."
  },
  {
    name: "Halawet Louz", arabic: "حلاوة لوز", emoji: "🍬", origin: "Syria · Lebanon",
    description: "Almond-based sweet paste made into bars or shapes — delicate, nutty, and subtly floral.",
    ingredients: ["Blanched almonds", "Sugar", "Rose water", "Orange blossom water", "Pistachios"],
    steps: ["Blend almonds to a fine powder. Cook with sugar syrup into a paste.", "Add flower waters and knead until smooth.", "Roll and cut into shapes. Press pistachios on top. Cool to firm."],
    tip: "<strong>Work quickly</strong> when shaping — the paste stiffens as it cools."
  },
  {
    name: "Znoud el Sit", arabic: "زنود الست", emoji: "🍥", origin: "Lebanon",
    description: "Lady's arms — phyllo rolls filled with ashta cream and fried, then dipped in syrup.",
    ingredients: ["Phyllo dough", "Ashta cream", "Butter", "Oil for frying", "Sugar syrup", "Rose water", "Pistachios"],
    steps: ["Cut phyllo into rectangles, brush with butter.", "Place a log of ashta at one end, roll tightly into cylinders.", "Fry until golden, drain, dip in cold syrup, scatter pistachios."],
    tip: "<strong>Ashta must be cold and firm</strong> before rolling — warm cream oozes out during frying."
  },
  {
    name: "Harissa", arabic: "هريسة", emoji: "🍮", origin: "Lebanon · Palestine · Syria",
    description: "Slow-cooked wheat berry and lamb pudding — ancient, nourishing, and deeply warming.",
    ingredients: ["Whole wheat berries", "Lamb (shank)", "Butter", "Cinnamon", "Allspice", "Salt"],
    steps: ["Soak wheat berries overnight. Boil lamb until meat falls off bone, shred.", "Combine wheat and shredded lamb in the cooking broth.", "Cook stirring constantly on very low heat 2–3 hours until porridge-like."],
    tip: "<strong>Constant stirring in the final hour</strong> — it catches the bottom as it thickens."
  },
  {
    name: "Ameh", arabic: "آمة", emoji: "🍲", origin: "Lebanon",
    description: "Tripe slow-cooked with chickpeas in a garlicky tomato broth — beloved village comfort food.",
    ingredients: ["Cleaned tripe", "Chickpeas", "Garlic", "Tomatoes", "Allspice", "Cinnamon", "Lemon", "Parsley"],
    steps: ["Blanch tripe twice and discard water each time.", "Cover with fresh water, add spices, simmer 2 hours until tender.", "Add chickpeas last 30 minutes. Finish with garlic and lemon."],
    tip: "<strong>Blanch twice minimum</strong> — it removes the strong smell without flavoring the broth."
  },
  {
    name: "Sfeeha Jnoubiyeh", arabic: "صفيحة جنوبية", emoji: "🫓", origin: "Lebanon (South)",
    description: "Southern Lebanese-style meat pies with a chili kick — spicier than the standard version.",
    ingredients: ["Dough", "Ground beef", "Onion", "Chili", "Tomato", "Pomegranate molasses", "Cumin", "Parsley"],
    steps: ["Mix raw beef with finely chopped onion, tomato, chili, and spices.", "Roll thin dough rounds. Spread meat thinly.", "Bake at 250°C until charred at edges, about 8 minutes."],
    tip: "<strong>South Lebanese style is spicier</strong> — don't hold back on the chili."
  },
  {
    name: "Khoubeizeh", arabic: "خبيزة", emoji: "🌿", origin: "Lebanon · Palestine · Syria",
    description: "Wild mallow greens sautéed with onion and lemon — a foraged, humble, and wonderfully earthy dish.",
    ingredients: ["Mallow greens (khoubeizeh)", "Onion", "Olive oil", "Lemon juice", "Garlic", "Salt"],
    steps: ["Blanch mallow leaves briefly to soften. Drain and squeeze.", "Sauté onion until golden. Add garlic, then the mallow.", "Cook together 10 minutes. Dress with lemon and extra olive oil."],
    tip: "<strong>Forage after rain</strong> — mallow grows in uncultivated fields and tastes best young."
  },
  {
    name: "Fattayer Jibneh", arabic: "فطاير جبنة", emoji: "🥐", origin: "Lebanon · Palestine · Syria",
    description: "Triangular cheese pies with akkawi and mint — simpler than spinach pies but just as addictive.",
    ingredients: ["Yeasted dough", "Akkawi cheese", "Mint", "Nigella seeds", "Olive oil"],
    steps: ["Soak and crumble akkawi. Mix with mint and a drizzle of olive oil.", "Roll dough, cut into circles, place filling in center.", "Fold and pinch into triangles. Bake at 200°C until golden."],
    tip: "<strong>Fold tightly</strong> — cheese filling is wetter than spinach and will escape if the seam is loose."
  },
  {
    name: "Djaj bil Roz bil Shaghour", arabic: "دجاج بالرز الشغور", emoji: "🍚", origin: "Lebanon (Bekaa)",
    description: "Bekaa-style rice with chicken and a mountain of caramelized onions cooked into the grain.",
    ingredients: ["Chicken", "Basmati rice", "Onions", "Allspice", "Cinnamon", "Turmeric", "Chicken stock", "Pine nuts", "Almonds"],
    steps: ["Deeply caramelize onions in butter 45 minutes. Add chicken pieces and brown.", "Add spices and rice, coat in onion-butter.", "Pour stock, bring to boil, cover and steam 20 minutes."],
    tip: "<strong>The onions cook into the rice</strong> and turn it a beautiful amber — don't skip any caramelizing time."
  },
  {
    name: "Kibbeh Qoursieh", arabic: "كبة قرصية", emoji: "🥙", origin: "Lebanon (North)",
    description: "Thin kibbeh discs grilled or pan-fried — a northern Lebanese preparation, eaten with yogurt.",
    ingredients: ["Lean lamb", "Fine bulgur", "Onion", "Allspice", "Cinnamon", "Dried mint"],
    steps: ["Mix kibbeh dough until very smooth.", "Shape into thin round patties, about 5mm thick.", "Pan-fry in butter or grill, 3 minutes each side. Serve with cold yogurt."],
    tip: "<strong>Thin is correct</strong> — thick discs cook unevenly and stay raw in the center."
  },
  {
    name: "Sharab al-Ward", arabic: "شراب الورد", emoji: "🌹", origin: "Lebanon · Syria",
    description: "Rose water drink — cold, sweetened rose syrup with water over ice, a classic Levantine refresher.",
    ingredients: ["Rose syrup", "Cold water", "Ice", "Rose petals (optional)"],
    steps: ["Mix rose syrup with cold water to taste — approximately 1 part syrup to 5 parts water.", "Serve over crushed ice.", "Garnish with dried or fresh rose petals."],
    tip: "<strong>Don't oversweeten</strong> — it should taste like drinking a flower garden, not sugar water."
  },
  {
    name: "Jallab", arabic: "جلاب", emoji: "🍇", origin: "Lebanon · Syria · Palestine",
    description: "Sweet grape and rose water drink topped with pine nuts and raisins — a Levantine classic.",
    ingredients: ["Jallab syrup (grape and rose)", "Cold water", "Ice", "Pine nuts", "Raisins"],
    steps: ["Dilute jallab syrup with cold water and stir well.", "Pour over crushed ice.", "Scatter pine nuts and raisins on top to float."],
    tip: "<strong>The pine nuts and raisins are eaten as you drink</strong> — they're a snack, not just garnish."
  },
  {
    name: "Limonada", arabic: "ليمونادة", emoji: "🍋", origin: "Lebanon",
    description: "Lebanese blended lemonade — whole lemons, ice, sugar, and sometimes orange blossom water, blended smooth.",
    ingredients: ["Lemons (whole)", "Ice", "Sugar", "Water", "Orange blossom water"],
    steps: ["Cut lemons and remove seeds but keep peel. Blend with ice, water, and sugar.", "Strain through fine sieve.", "Stir in orange blossom water. Serve immediately over ice."],
    tip: "<strong>Include some peel in the blend</strong> — it gives Lebanese lemonade its distinctive bitter-bright flavor."
  },
  {
    name: "Sahlab", arabic: "سحلب", emoji: "☕", origin: "Lebanon · Syria · Palestine",
    description: "Warm orchid-root milk drink thickened with sahlab powder and topped with cinnamon and coconut.",
    ingredients: ["Sahlab powder", "Whole milk", "Sugar", "Rose water", "Cinnamon", "Shredded coconut", "Pistachios"],
    steps: ["Whisk sahlab powder into cold milk until dissolved.", "Heat stirring constantly until thick and creamy.", "Add sugar and rose water. Pour into cups, top with cinnamon, coconut, and pistachios."],
    tip: "<strong>Stir from the start</strong> — added to already-hot milk, sahlab lumps instantly."
  },
  {
    name: "Ayran", arabic: "عيران", emoji: "🥛", origin: "Lebanon · Syria · Palestine",
    description: "Cold salted yogurt drink thinned with water — refreshing, cooling, and perfect with grilled meat.",
    ingredients: ["Full-fat yogurt", "Cold water", "Salt", "Dried mint"],
    steps: ["Blend yogurt with cold water until smooth and frothy.", "Season with salt.", "Pour over ice, top with a pinch of dried mint."],
    tip: "<strong>Blend well for froth</strong> — the airy foam is part of the experience."
  },
  {
    name: "Qahwa Arabiyeh", arabic: "قهوة عربية", emoji: "☕", origin: "Levant · Gulf",
    description: "Arabic coffee with cardamom — light, unsweetened, and served in tiny cups as a welcome gesture.",
    ingredients: ["Lightly roasted Arabic coffee", "Cardamom pods", "Water", "Saffron (optional)"],
    steps: ["Boil water with cracked cardamom pods 5 minutes.", "Add Arabic coffee, simmer 10 minutes without boiling.", "Rest 2 minutes, pour carefully without grounds into small cups."],
    tip: "<strong>Never boil after adding coffee</strong> — it turns bitter and the cardamom loses its freshness."
  },
  {
    name: "Jallab bi Toot", arabic: "جلاب بالتوت", emoji: "🫐", origin: "Lebanon · Syria",
    description: "Jallab drink variation with fresh mulberry or blackberry — seasonal, fragrant, and jewel-colored.",
    ingredients: ["Mulberries or blackberries", "Rose water", "Sugar", "Cold water", "Ice", "Pine nuts"],
    steps: ["Blend berries with a little water and strain for juice.", "Mix with rose water, sugar, and cold water.", "Pour over crushed ice, float pine nuts on top."],
    tip: "<strong>Use mulberries when in season</strong> — the flavor is incomparably more aromatic than blackberries."
  },
  {
    name: "Maamoul bil Fustuq", arabic: "معمول بالفستق", emoji: "🍪", origin: "Palestine · Syria · Lebanon",
    description: "Semolina shortbread stuffed with ground pistachio — the richest and most prized of the maamoul trio.",
    ingredients: ["Fine semolina", "Flour", "Clarified butter", "Rose water", "Pistachios", "Sugar", "Orange blossom water"],
    steps: ["Prepare semolina dough, rest 1 hour.", "Blend pistachios with sugar — leave slightly coarse.", "Shape, fill with pistachio mix, press into moulds, bake at 160°C."],
    tip: "<strong>Bake even lower</strong> for pistachio maamoul — pistachio burns faster than walnut or date."
  },
  {
    name: "Karabij Halab", arabic: "كرابيج حلب", emoji: "🍬", origin: "Syria (Aleppo)",
    description: "Aleppo's semolina cookies filled with pistachios, served with natef (whipped meringue dip).",
    ingredients: ["Semolina", "Butter", "Mahleb", "Anise", "Pistachios", "Sugar", "Egg whites (for natef)", "Rose water"],
    steps: ["Make spiced semolina dough with mahleb and anise. Fill with pistachios, roll into cylinders.", "Bake at 170°C until barely golden.", "Serve with natef: whipped egg whites with sugar syrup and rose water for dipping."],
    tip: "<strong>The natef dip is essential</strong> — karabij without natef is like dunking without the coffee."
  },
  {
    name: "Basbousa", arabic: "بسبوسة", emoji: "🍰", origin: "Palestine · Lebanon · Egypt",
    description: "Semolina cake soaked in syrup with yogurt and coconut — moist, dense, and intensely sweet.",
    ingredients: ["Semolina", "Coconut", "Yogurt", "Sugar", "Butter", "Baking powder", "Almonds", "Sugar syrup"],
    steps: ["Mix semolina, coconut, yogurt, sugar, butter, and baking powder.", "Spread in greased pan. Score into diamonds. Press almond on each.", "Bake at 180°C until golden. Immediately pour cold syrup over."],
    tip: "<strong>Score deeply before baking</strong> — the syrup travels through the cuts to reach the base."
  },
  {
    name: "Muhallabiyet al-Ward", arabic: "مهلبية الورد", emoji: "🌹", origin: "Lebanon · Syria",
    description: "Rose-scented milk pudding with a layer of strawberry or raspberry — elegant and deeply romantic.",
    ingredients: ["Whole milk", "Cornstarch", "Sugar", "Rose water", "Strawberry jam or coulis", "Pistachios"],
    steps: ["Make standard muhallabiyeh, add generous rose water.", "Pour into glasses, chill until set.", "Spoon a layer of strawberry coulis on top. Garnish with pistachios."],
    tip: "<strong>Chill the pudding fully before adding the fruit layer</strong> — on warm pudding the layers merge."
  },
  {
    name: "Tamriyeh", arabic: "تمرية", emoji: "🍡", origin: "Palestine",
    description: "Fried dough balls dipped in date syrup — simple, sweet, and deeply Palestinian.",
    ingredients: ["Flour", "Yeast", "Sugar", "Oil for frying", "Date syrup (dibs el rumman)"],
    steps: ["Mix loose yeast dough. Rest 1 hour until puffy.", "Drop spoonfuls into hot oil. Fry until golden all over.", "Drain briefly, dip in warm date syrup."],
    tip: "<strong>Date syrup is not the same as pomegranate molasses</strong> — it's sweeter and more caramel-like."
  },
  {
    name: "Halaweh bi Tahini", arabic: "حلاوة بالطحينة", emoji: "🍫", origin: "Palestine · Lebanon · Syria",
    description: "Sesame halvah — sugar and tahini pulled into a crumbly, sweet block. Often eaten for breakfast with bread.",
    ingredients: ["Tahini", "Sugar syrup", "Pistachios or walnuts"],
    steps: ["Cook sugar to hard crack stage (150°C).", "Quickly fold in tahini until combined — it will seize and become crumbly.", "Add nuts, press into mould. Cool completely before unmoulding."],
    tip: "<strong>Work with extreme speed</strong> once the syrup meets the tahini — it sets in under 2 minutes."
  },
  {
    name: "Tamr bil Joz", arabic: "تمر بالجوز", emoji: "🌰", origin: "Lebanon · Palestine · Syria",
    description: "Pitted dates stuffed with walnut halves — the simplest sweet on the Levantine table, and one of the finest.",
    ingredients: ["Medjool dates", "Walnut halves"],
    steps: ["Pit medjool dates carefully without tearing them open.", "Press a walnut half firmly inside.", "Serve on a platter with coffee."],
    tip: "<strong>Medjool only</strong> — cheaper dates don't have the caramel softness that makes this perfect."
  },
  {
    name: "Mafroukeh", arabic: "مفروكة", emoji: "🍮", origin: "Lebanon",
    description: "Crushed semolina and ashta cream dessert — nutty, crumbly, and soaked with syrup.",
    ingredients: ["Coarse semolina", "Butter", "Ashta cream", "Sugar syrup", "Pistachios"],
    steps: ["Roast semolina in butter until deeply golden and nutty, about 15 minutes.", "Pack into serving dish, pour syrup to soak.", "Spread thick layer of ashta on top. Garnish with crushed pistachio."],
    tip: "<strong>Roast the semolina dark</strong> — pale mafroukeh is just grainy, not nutty."
  },
  {
    name: "Warbat", arabic: "وربات", emoji: "🥐", origin: "Lebanon · Syria · Palestine",
    description: "Puff pastry fingers filled with ashta cream and drizzled in syrup — flaky, creamy, and indulgent.",
    ingredients: ["Puff pastry", "Ashta cream", "Sugar syrup", "Rose water", "Pistachios"],
    steps: ["Cut puff pastry into rectangles. Bake at 200°C until puffed and golden.", "When cool, split horizontally and fill generously with ashta.", "Drizzle with rose water syrup, scatter pistachios."],
    tip: "<strong>Fill only when completely cool</strong> — warm pastry melts the cream and makes it weep."
  },
  {
    name: "Kaak al-Eid", arabic: "كعك العيد", emoji: "🍩", origin: "Palestine · Lebanon · Syria",
    description: "Eid ring cookies with anise, sesame, and a hint of mahleb — given as gifts and eaten through the holiday.",
    ingredients: ["Flour", "Semolina", "Butter", "Sugar", "Anise", "Sesame seeds", "Mahleb", "Yeast"],
    steps: ["Make enriched dough with butter, anise, mahleb. Rest 1 hour.", "Shape into rings, roll in sesame seeds.", "Bake at 170°C for 20–25 minutes until dry and barely golden."],
    tip: "<strong>They improve over 2–3 days</strong> — make ahead and store, they dry to a perfect sandy crunch."
  },
  {
    name: "Ghraybeh Fustuq", arabic: "غريبة فستق", emoji: "🍪", origin: "Lebanon · Syria",
    description: "Pistachio-topped melt-in-the-mouth shortbread — a slight pistachio richness over the classic recipe.",
    ingredients: ["Flour", "Powdered sugar", "Ghee", "Rose water", "Chopped pistachios"],
    steps: ["Beat ghee and icing sugar until very pale.", "Fold in flour and rose water gently.", "Shape, top with pistachio pieces, bake at 160°C 12–14 minutes."],
    tip: "<strong>Still looks underdone when right</strong> — trust the clock, not the color."
  },
  {
    name: "Ballorieh", arabic: "بلورية", emoji: "🍩", origin: "Lebanon · Syria",
    description: "Shredded kataifi pastry layered with ashta and pistachios — a close cousin of knafeh, more delicate.",
    ingredients: ["Kataifi (shredded filo)", "Ashta cream", "Butter", "Sugar syrup", "Rose water", "Pistachios"],
    steps: ["Toss kataifi with melted butter. Spread half in pan.", "Layer generously with cold ashta.", "Cover with remaining kataifi, bake at 190°C until golden. Pour cold syrup over immediately."],
    tip: "<strong>Keep ashta very cold</strong> — it shouldn't melt fully in the oven, just warm through."
  },
  {
    name: "Baked Kibbeh with Yogurt Topping", arabic: "كبة مخبوزة بالزبادي", emoji: "🥮", origin: "Syria · Lebanon",
    description: "Baked kibbeh slab finished with a garlicky yogurt drizzle and toasted pine nuts — elegant.",
    ingredients: ["Kibbeh dough", "Filling", "Yogurt", "Garlic", "Dried mint", "Pine nuts", "Butter"],
    steps: ["Bake standard kibbeh bil sanieh until just done.", "Beat yogurt with garlic and salt. Pour over hot kibbeh.", "Return to oven 5 minutes. Top with pine nuts in butter."],
    tip: "<strong>The yogurt sets slightly on the hot kibbeh</strong> — don't pour on raw kibbeh or it won't set."
  },
  {
    name: "Djaj bil Batata", arabic: "دجاج بالبطاطا", emoji: "🍗", origin: "Lebanon · Palestine",
    description: "Chicken pieces roasted with potato wedges in one pan — weeknight simplicity done very well.",
    ingredients: ["Chicken thighs", "Potatoes", "Onion", "Garlic", "Seven spice", "Turmeric", "Olive oil", "Lemon"],
    steps: ["Marinate chicken with spices, garlic, lemon, and oil.", "Cut potatoes into wedges, toss in same marinade.", "Arrange together in pan. Roast at 200°C for 45–50 minutes."],
    tip: "<strong>Potatoes under the chicken</strong> absorb the drippings and become extraordinary."
  },
  {
    name: "Mhammara", arabic: "محمرة", emoji: "🌶️", origin: "Syria (Aleppo) · Lebanon",
    description: "Aleppo roasted red pepper and walnut dip with pomegranate molasses — smoky, sweet, and deeply complex.",
    ingredients: ["Roasted red peppers", "Walnuts", "Pomegranate molasses", "Aleppo chili", "Cumin", "Olive oil", "Bread crumbs"],
    steps: ["Roast red peppers until charred. Peel and seed.", "Blend with walnuts, Aleppo chili, pomegranate molasses, cumin, and breadcrumbs.", "Drizzle with olive oil. Serve at room temperature."],
    tip: "<strong>Breadcrumbs add body</strong> — without them mhammara is too liquid and loses its dip-ability."
  },
  {
    name: "Kebbeh Mishwiyeh Lahm Ghanam", arabic: "كبة مشوية لحم غنم", emoji: "🔥", origin: "Lebanon · Syria",
    description: "Grilled whole-lamb kibbeh patties over charcoal — the rustic, smoky version from mountain villages.",
    ingredients: ["Lamb shoulder (ground)", "Fine bulgur", "Onion", "Allspice", "Dried mint", "Fat tail fat"],
    steps: ["Add some sheep tail fat to the mixture for richness and to prevent drying.", "Shape into elongated patties.", "Grill over charcoal — the tail fat chars and bastes the meat as it melts."],
    tip: "<strong>Fat tail fat is the secret</strong> — it renders, keeps the kibbeh moist, and chars into something extraordinary."
  },
  {
    name: "Salata al-Khodra wal Rumman", arabic: "سلطة الخضار والرمان", emoji: "💎", origin: "Lebanon · Palestine",
    description: "Fresh herb salad with pomegranate seeds and sumac vinaigrette — jeweled, bright, and celebratory.",
    ingredients: ["Parsley", "Mint", "Arugula", "Pomegranate seeds", "Sumac", "Lemon juice", "Olive oil", "Walnuts"],
    steps: ["Pick parsley and mint leaves. Combine with arugula.", "Make dressing with sumac, lemon, olive oil, and salt.", "Toss with pomegranate seeds and broken walnuts. Dress just before serving."],
    tip: "<strong>Dress at the last second</strong> — the herbs wilt quickly and lose their color once dressed."
  },
  {
    name: "Mfaraket Batinjan", arabic: "مفركة باذنجان", emoji: "🍆", origin: "Lebanon",
    description: "Eggplant scrambled with eggs and caramelized onion — smoky, silky, and irresistible.",
    ingredients: ["Eggplant", "Eggs", "Onion", "Garlic", "Olive oil", "Allspice", "Parsley"],
    steps: ["Roast eggplant whole until collapsed, peel, chop flesh roughly.", "Caramelize onion in olive oil. Add garlic and eggplant.", "Pour in beaten eggs, scramble gently until set. Scatter parsley."],
    tip: "<strong>Roast don't boil the eggplant</strong> — roasting concentrates flavor and adds smoke."
  },
  {
    name: "Shorbat Khodra", arabic: "شوربة خضار", emoji: "🥦", origin: "Lebanon · Palestine · Syria",
    description: "Levantine vegetable soup with chickpeas and warm spices — simple, wholesome, and nourishing.",
    ingredients: ["Chickpeas", "Potatoes", "Carrots", "Zucchini", "Celery", "Tomatoes", "Allspice", "Cumin"],
    steps: ["Sauté onion and celery. Add root vegetables and spices.", "Cover with water, simmer 20 minutes.", "Add chickpeas and soft vegetables last 10 minutes. Finish with lemon."],
    tip: "<strong>Chickpeas last</strong> — already cooked, they only need warming; long cooking makes them mushy."
  },
  {
    name: "Djaj Maajoun", arabic: "دجاج معجون", emoji: "🍗", origin: "Palestine",
    description: "Palestinian slow-baked chicken thighs in a thick paste of onion, tomato, and spices.",
    ingredients: ["Chicken thighs", "Onion", "Tomato paste", "Garlic", "Allspice", "Cinnamon", "Cumin", "Olive oil"],
    steps: ["Blend onion and garlic to a paste. Mix with tomato paste, spices, and olive oil.", "Coat chicken thighs thoroughly in paste.", "Slow-bake at 160°C covered for 1 hour, then uncovered 30 minutes."],
    tip: "<strong>The paste protects the chicken</strong> from drying while building a thick, jammy sauce underneath."
  },
  {
    name: "Zaatar Manakish bil Jibneh wal Bayd", arabic: "مناقيش زعتر وجبنة وبيض", emoji: "🍳", origin: "Lebanon",
    description: "Zaatar flatbread topped with cheese and a cracked egg — the ultimate Lebanese breakfast combination.",
    ingredients: ["Flatbread dough", "Zaatar paste", "Akkawi cheese", "Egg", "Olive oil"],
    steps: ["Spread zaatar paste on rolled dough round.", "Scatter crumbled cheese over the zaatar.", "Crack an egg in the center. Bake at 230°C until egg is just set and edges puff."],
    tip: "<strong>Watch the egg carefully</strong> — you want the white set and the yolk still runny."
  },
  {
    name: "Fasoulia Khadra bil Zayt", arabic: "فاصوليا خضرا بالزيت", emoji: "🫛", origin: "Lebanon · Palestine",
    description: "Green beans braised vegan-style in olive oil with tomato — served at room temperature on the meze table.",
    ingredients: ["Green beans", "Tomatoes", "Onion", "Garlic", "Olive oil", "Allspice", "Cinnamon"],
    steps: ["Sauté sliced onion in generous olive oil until golden.", "Add garlic, tomatoes, and spices.", "Add beans, cover, simmer 30 minutes. Cool to room temperature."],
    tip: "<strong>Room temperature is correct</strong> — this dish tastes better cool than piping hot."
  },
  {
    name: "Mouloukhieh Yabseh", arabic: "ملوخية يابشة", emoji: "🌿", origin: "Palestine",
    description: "Dried mlokhieh leaves reconstituted and cooked into a dense, intensely flavored version of the stew.",
    ingredients: ["Dried mlokhieh leaves", "Chicken stock", "Garlic", "Coriander", "Lemon", "Olive oil"],
    steps: ["Rehydrate dried leaves in water for 20 minutes, drain.", "Fry garlic and coriander in olive oil.", "Add leaves to hot chicken stock with garlic mixture. Simmer 20 minutes."],
    tip: "<strong>Dried has more intense flavor</strong> than frozen — use less and adjust as you go."
  },
  {
    name: "Djaj bil Toom wal Zaytoun", arabic: "دجاج بالثوم والزيتون", emoji: "🫒", origin: "Lebanon · Palestine",
    description: "Chicken braised with whole garlic cloves and green olives in white wine and lemon.",
    ingredients: ["Chicken pieces", "Whole garlic cloves (1 head)", "Green olives", "Lemon", "Olive oil", "White wine", "Thyme"],
    steps: ["Brown chicken in olive oil. Remove, fry whole garlic cloves until golden.", "Return chicken, add olives, wine, lemon juice, and thyme.", "Cover and braise 35–40 minutes until tender."],
    tip: "<strong>Whole garlic cloves turn sweet and mellow</strong> when braised — don't slice them."
  },
  {
    name: "Fattayer Sabanekh bil Sumac", arabic: "فطاير سبانخ بالسماق", emoji: "🌿", origin: "Lebanon",
    description: "Spinach pies with extra sumac and pomegranate molasses — more sour and vibrant than the standard.",
    ingredients: ["Dough", "Spinach", "Onion", "Sumac (extra)", "Pomegranate molasses", "Walnuts", "Lemon"],
    steps: ["Squeeze spinach dry. Add extra sumac, pomegranate molasses, and walnuts.", "Fill dough circles and fold into triangles, seal tightly.", "Bake at 200°C until deep golden."],
    tip: "<strong>Extra sumac and walnuts</strong> are what elevate this version — be generous with both."
  },
  {
    name: "Sambousek Adas", arabic: "سمبوسك عدس", emoji: "🥐", origin: "Lebanon · Palestine",
    description: "Pastry crescents filled with spiced red lentil and caramelized onion — hearty and vegetarian.",
    ingredients: ["Pastry dough", "Red lentils", "Onion", "Cumin", "Coriander", "Lemon juice", "Olive oil"],
    steps: ["Cook lentils until completely soft. Caramelize onion.", "Mix lentils with onion, cumin, coriander, and lemon. Cool.", "Fill pastry, seal, bake or fry until golden."],
    tip: "<strong>Ensure the lentil filling is very dry</strong> — excess moisture makes the pastry soggy."
  },
  {
    name: "Djaj Meskoub", arabic: "دجاج مسكوب", emoji: "🍗", origin: "Palestine (Jerusalem)",
    description: "Jerusalem-style braised chicken with caramelized onions, warm spices, and sumac over crispy bread.",
    ingredients: ["Chicken pieces", "Onions", "Sumac", "Allspice", "Cinnamon", "Olive oil", "Flatbread", "Pine nuts"],
    steps: ["Caramelize onions deeply in olive oil with sumac and spices.", "Brown chicken, add to onions with a little water, braise 35 minutes.", "Serve over toasted flatbread, top with onions and pine nuts."],
    tip: "<strong>This is essentially musakhan cooked as a stew</strong> — the concept is the same, the form is different."
  },
  {
    name: "Loubieh bil Banadoura wal Lahm", arabic: "لوبية بالبندورة واللحمة", emoji: "🫘", origin: "Lebanon · Palestine · Syria",
    description: "Green beans with lamb in a richer, meatier tomato sauce — the full version of loubieh bi zeit.",
    ingredients: ["Green beans", "Lamb shoulder cubes", "Tomatoes", "Onion", "Garlic", "Allspice", "Cinnamon"],
    steps: ["Brown lamb until caramelized. Add onion and garlic.", "Add tomatoes and spices, build a rich sauce.", "Add beans, cover, simmer 35 minutes until very tender."],
    tip: "<strong>Don't trim the beans too short</strong> — longer pieces have better texture in the braise."
  },
  {
    name: "Fattat al-Hummus", arabic: "فتة الحمص", emoji: "🫘", origin: "Lebanon · Palestine",
    description: "Fatteh made entirely with chickpeas — no chicken or eggplant, just the pure chickpea-yogurt-pita combination.",
    ingredients: ["Pita", "Chickpeas", "Yogurt", "Tahini", "Garlic", "Lemon", "Paprika butter", "Pine nuts"],
    steps: ["Toast pita very crisp. Warm chickpeas in their liquid.", "Spread pita, spoon chickpeas with some liquid over.", "Top with thick yogurt-tahini-garlic sauce, paprika butter, and pine nuts."],
    tip: "<strong>The chickpea liquid softens the pita gently</strong> — too much and it drowns, too little and the pita stays hard."
  },
  {
    name: "Makdous", arabic: "مكدوس", emoji: "🍆", origin: "Syria · Lebanon",
    description: "Oil-cured baby eggplants stuffed with walnuts, garlic, and chili — a Levantine pantry treasure.",
    ingredients: ["Baby eggplants", "Walnuts", "Garlic", "Red chili", "Salt", "Olive oil"],
    steps: ["Blanch baby eggplants briefly, squeeze out water, salt, and drain overnight.", "Stuff with walnut-garlic-chili mixture.", "Pack into sterilized jars, cover completely with olive oil. Cure 3–5 days."],
    tip: "<strong>Completely submerge in oil</strong> — any exposed eggplant will mold."
  },
  {
    name: "Zaytoun Msakhan", arabic: "زيتون مسخن", emoji: "🫒", origin: "Palestine",
    description: "Marinated warm olives with onion and sumac — the simplest mezze with the deepest flavor.",
    ingredients: ["Green olives (cracked)", "Onion", "Sumac", "Olive oil", "Lemon juice", "Chili"],
    steps: ["Slice onion thin, sprinkle with sumac, and squeeze lemon over — let sit 10 minutes.", "Warm olive oil gently with chili. Add olives and toss.", "Combine with sumac onions. Serve warm."],
    tip: "<strong>Warm, not hot</strong> — heated olives release their oils and become silky; boiled olives turn bitter."
  },
  {
    name: "Djaj bil Hara", arabic: "دجاج بالحرة", emoji: "🌶️", origin: "Lebanon",
    description: "Spicy braised chicken with peppers and chili — for those who want heat in their Levantine food.",
    ingredients: ["Chicken pieces", "Red and green chili", "Bell pepper", "Garlic", "Tomatoes", "Cumin", "Olive oil", "Lemon"],
    steps: ["Brown chicken. Add sliced peppers, chili, and garlic.", "Add tomatoes and cumin. Braise 35 minutes.", "Finish with lemon juice. Serve with rice or flatbread."],
    tip: "<strong>Char the peppers slightly</strong> before adding — it adds a smokiness that amplifies the heat."
  },
  {
    name: "Kaak bil Simsim", arabic: "كعك بالسمسم", emoji: "🥯", origin: "Palestine · Lebanon · Syria",
    description: "Sesame-encrusted street bread rings — crunchy outside, slightly chewy inside, eaten with zaatar or cheese.",
    ingredients: ["Flour", "Yeast", "Salt", "Sugar", "Oil", "Sesame seeds (to coat)", "Egg wash"],
    steps: ["Make simple enriched dough, rest until doubled.", "Shape into long ropes, form rings, join the ends.", "Dip in egg wash then sesame, bake at 200°C 15–18 minutes."],
    tip: "<strong>Toast sesame slightly before coating</strong> for a nuttier flavor that survives the baking."
  },
  {
    name: "Tabikh Bamieh", arabic: "طبيخ بامية", emoji: "🫕", origin: "Palestine",
    description: "Palestinian okra stew with chicken and tomato — a beloved weekday lunch.",
    ingredients: ["Okra", "Chicken", "Tomatoes", "Garlic", "Coriander", "Lemon juice", "Olive oil", "Allspice"],
    steps: ["Fry okra lightly in oil. Brown chicken pieces.", "Build tomato sauce with garlic, coriander, and allspice.", "Combine everything, simmer 30 minutes. Finish with lemon."],
    tip: "<strong>Palestinian okra dishes use chicken</strong> while Lebanese often use lamb — both are outstanding."
  },
  {
    name: "Kashkaval Mashwi", arabic: "كشكافال مشوي", emoji: "🧀", origin: "Lebanon · Syria",
    description: "Grilled kashkaval cheese with honey and chili — caramelized, stretchy, and deeply satisfying.",
    ingredients: ["Kashkaval cheese", "Honey", "Chili flakes", "Thyme", "Olive oil"],
    steps: ["Slice kashkaval 1.5cm thick.", "Pan-fry in dry non-stick pan on high heat until golden both sides.", "Transfer to plate, drizzle honey and chili immediately."],
    tip: "<strong>Kashkaval melts more than halloumi</strong> — work fast to plate it before it loses its shape."
  },
  {
    name: "Mouajanat bil Jibeh", arabic: "مؤجنات بالجبن", emoji: "🥐", origin: "Lebanon",
    description: "Assorted cheese pastries — a platter of different filled shapes using one dough and one cheese filling.",
    ingredients: ["Pastry dough", "Akkawi cheese", "Feta", "Mozzarella", "Nigella seeds", "Zaatar", "Egg wash"],
    steps: ["Prepare a simple pastry or brioche dough.", "Fill half with akkawi-nigella, half with feta-zaatar.", "Shape into circles, triangles, and braids. Brush with egg, bake at 190°C."],
    tip: "<strong>Variety of shapes</strong> isn't just aesthetic — it helps guests know which filling is inside."
  },
  {
    name: "Baklava bil Joz", arabic: "بقلاوة بالجوز", emoji: "🍯", origin: "Lebanon · Syria",
    description: "Walnut baklava — nuttier and earthier than pistachio, the everyday version across inland Lebanon.",
    ingredients: ["Phyllo dough", "Walnuts", "Sugar", "Cinnamon", "Clarified butter", "Sugar syrup", "Rose water"],
    steps: ["Chop walnuts with sugar and cinnamon — not too fine.", "Layer buttered phyllo, add walnut filling, layer remaining phyllo.", "Score, bake at 170°C until golden, pour cold syrup over hot baklava."],
    tip: "<strong>Coarser chopped walnuts</strong> give better texture than blended — you want crunch, not paste."
  },
  {
    name: "Djaj bil Hashweh wal Loz", arabic: "دجاج بالهاشوة واللوز", emoji: "🍗", origin: "Lebanon · Palestine · Syria",
    description: "Roasted chicken on a bed of hashweh rice with toasted almonds and golden raisins.",
    ingredients: ["Whole chicken", "Basmati rice", "Ground beef", "Pine nuts", "Almonds", "Golden raisins", "Allspice", "Cinnamon", "Turmeric"],
    steps: ["Make hashweh with pine nuts. Separately toast almonds and raisins in butter.", "Cook rice in spiced chicken stock.", "Roast chicken. Serve on rice platter garnished with almonds and raisins."],
    tip: "<strong>Golden raisins add sweetness</strong> that balances the savory spiced meat — don't skip them."
  },
  {
    name: "Salata Summaq wal Basal", arabic: "سلطة السماق والبصل", emoji: "🧅", origin: "Palestine · Lebanon",
    description: "Raw onion salad macerated in sumac and lemon — sharp, sour, and the essential partner to grilled meats.",
    ingredients: ["Red onion", "Sumac", "Lemon juice", "Parsley", "Olive oil", "Salt"],
    steps: ["Slice onion very thin. Toss with salt and sumac.", "Squeeze firmly to soften the onion and release its liquid.", "Add lemon juice, parsley, and olive oil. Rest 15 minutes."],
    tip: "<strong>Squeeze with your hands</strong> — the physical pressing is what transforms raw sharp onion into something sweet and tangy."
  },
  {
    name: "Riz bil Hamam", arabic: "رز بالحمام", emoji: "🕊️", origin: "Lebanon · Palestine · Syria",
    description: "Squab or pigeon on spiced rice — a celebratory dish at festivals and family gatherings.",
    ingredients: ["Squab or pigeon", "Basmati rice", "Allspice", "Cinnamon", "Pine nuts", "Butter", "Chicken stock"],
    steps: ["Clean squabs, rub inside and out with spice blend.", "Brown in butter, then braise in stock 30 minutes.", "Cook spiced rice in the braising stock. Serve squab over rice."],
    tip: "<strong>Squab should be slightly pink inside</strong> — overcooked pigeon is dry and tough."
  },
  {
    name: "Yakhnet Khodra Mashkouleh", arabic: "يخنة خضار مشكولة", emoji: "🫕", origin: "Lebanon · Palestine",
    description: "Mixed vegetable stew with chickpeas and warm spices — the Levantine take on minestrone.",
    ingredients: ["Zucchini", "Potatoes", "Carrots", "Chickpeas", "Tomatoes", "Onion", "Allspice", "Cinnamon", "Celery"],
    steps: ["Sauté onion, celery, and carrots. Add spices.", "Add potatoes and tomatoes, cover with water, simmer 15 minutes.", "Add zucchini and chickpeas last 10 minutes."],
    tip: "<strong>Add by cooking time</strong> — root veg first, soft veg last, beans just to warm."
  },
  {
    name: "Khoubz Tannour", arabic: "خبز تنور", emoji: "🫓", origin: "Lebanon · Palestine · Syria",
    description: "Traditional flatbread baked on the inside wall of a clay tannour oven — charred, smoky, and incomparable.",
    ingredients: ["Bread flour", "Yeast", "Salt", "Water", "Olive oil"],
    steps: ["Make simple dough, rest until doubled.", "Shape into thin rounds.", "Slap onto the wall of a hot tannour or press onto a preheated cast iron griddle. Cook 2–3 minutes."],
    tip: "<strong>Eat immediately</strong> — tannour bread is perfect only for the first few minutes of its life."
  },
  {
    name: "Sitto's Lentil Kibbeh", arabic: "كبة العدس", emoji: "🫘", origin: "Lebanon (Lent)",
    description: "Vegan kibbeh — lentils and bulgur formed into kibbeh shapes, eaten during Lent or as everyday vegetarian food.",
    ingredients: ["Red lentils", "Fine bulgur", "Onion", "Cumin", "Allspice", "Olive oil", "Spring onion", "Mint"],
    steps: ["Cook red lentils until soft and dry. Soak bulgur 20 minutes, drain.", "Mix lentils and bulgur with spices and grated onion while warm.", "Shape into torpedo or flat patties. Drizzle with olive oil, top with spring onion and mint."],
    tip: "<strong>Shape while warm</strong> — the mixture hardens as it cools and won't stick together."
  }
];
