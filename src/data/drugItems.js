const drugItems = [
  {
    id: 1,
    name: 'Ібупрофен',
    image: {
      small: 'analogs/ibuprofen-320.jpg',
      medium: 'ibuprofen-768.jpg',
      large: 'ibuprofen-992.jpg',
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'ПАО НПЦ "Борщаговский ХФЗ"',
      character: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      atx: {
        numbers: 'M01A E01',
        name: 'Ибупрофен',
      },
      substance: {
        en: 'Ibuprofen',
        ua: 'Ібупрофен',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'речовина, що діє: ібупрофен;',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'вспомогательные вещества: целлюлоза микрокристаллическая, натрия кроскармелоза, кремния диоксид коллоидный безводный, магния стеарат;',
          'пленочное покрытие: гипромелоза, коповедон, полиэтиленгликоли, каприлокапроилполиоксиглицериды, декстросодержащие вспомогательные вещества, титана диоксид (Е 171), специальный красный (Е 129).',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Ібупрофен – похідна фенілпропіонової кислоти, має протизапальну, аналгетичну та жарознижувальну дію. Механізм дії пов&apos;язаний з неселективним пригніченням активності циклооксигенази (ЦОГ-1 та ЦОГ-2) – основного ферменту метаболізму арахідонової кислоти, що є попередником простагландинів, які відіграють головну роль у патогенезі запалення, болю та лихоманки. Аналгезуючу дію обумовлено як периферичним (опосередковано, через пригнічення синтезу простагландинів), так і центральним механізмом, що реалізується за рахунок пригнічення синтезу простагландинів у центральній нервовій системі (ЦНС). Ібупрофен знижує агрегацію тромбоцитів.',
          'Фармакокінетика',
          'При застосуванні внутрішньо ібупрофен практично повністю всмоктується із травної системи. Максимальна концентрація у крові досягається через 1-2 години. Одночасний прийом їжі уповільнює швидкість поглинання травної системи. Добре зв&apos;язується із білками крові – 90-95 %. Препарат повільно проникає у порожнину суглоба, але затримується у синовіальній рідині, створюючи у ній більшу концентрацію, ніж у плазмі крові. Метаболізм ібупрофену виробляється у печінці. Період напіввиведення становить 2-3 години. 80 % застосовуваної дози виводиться із сечею переважно у вигляді метаболітів (10 % – у незміненому вигляді); решта 20% виводяться кишечником у вигляді метаболітів.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/item-1.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Киевмедпрепарат',
      charact: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short:
        'таблетки, покриті плівковою оболонкою 200 мг блістер у пачці, № 10, 20',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Парацетамол',
    image: {
      small: 'analogs/paracetaml.webp',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Paracetamol'],

    characteristics: {
      id: 1,
      producer: 'Darnitsa',
      charact: 'таблетки',
      registration: 'UA/5207/01/01 от 04.01.2023',
      short: 'таблетки 500 мг, № 20',
      atx: {
        numbers: 'N02BE01',
        name: 'Paracetamol',
      },
      substance: {
        en: 'Paracetamol',
        ua: 'Парацетамол',
      },
      release: 'Без рецепта',
      dosage: '500 мг',
      quantity: '20 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water.',
          '1 таблетка містить 200 мг. Their eggs are such a delicacy that some say eating one will bring you happiness. ;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
          'Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.Thanks to its bouncy body and fine fur, this Pokémon is sought after. Holding one in your arms while you sleep feels great.Whether it’s due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don’t grow up quite right.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті the power of meditation.',
          'This Pokémon is known to meditate for a whole month without eating.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Парацетамол',
    image: {
      small: 'paracetaml.webp',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Paracetamol'],

    characteristics: {
      id: 1,
      producer: 'Darnitsa',
      charact: 'таблетки',
      registration: 'UA/5207/01/01 от 04.01.2023',
      short: 'таблетки 500 мг, № 20',
      atx: {
        numbers: 'N02BE01',
        name: 'Paracetamol',
      },
      substance: {
        en: 'Paracetamol',
        ua: 'Парацетамол',
      },
      release: 'Без рецепта',
      dosage: '500 мг',
      quantity: '20 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water.',
          '1 таблетка містить 200 мг. Their eggs are such a delicacy that some say eating one will bring you happiness. ;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
          'Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.Thanks to its bouncy body and fine fur, this Pokémon is sought after. Holding one in your arms while you sleep feels great.Whether it’s due to a lack of moisture or a lack of nutrients, in Alola the mushrooms on Paras don’t grow up quite right.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті the power of meditation.',
          'This Pokémon is known to meditate for a whole month without eating.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/item-2.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Юнифарма',
      charact: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'таблетки, вкриті оболонкою 0,1 г блістер № 30',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/item-3.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Киевмедпрепарат',
      charact: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short:
        'таблетки, покрытые пленочной оболочкой 200 мг блистер в пачке, № 10, 20',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/item-5.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Киевмедпрепарат',
      charact: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short:
        'суспензия оральная 220 мг/5 мл флакон полимерный 100 мл с дозирующей ложкой, в пачке, № 1',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/no_photo.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'ООО ДКП "Фармацевтиче...',
      release: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'капсулы 200 мг блистер, № 10, 20',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Ніфуроксазід Алкалоид',
    image: {
      small: 'analogs/item-6.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Alkaloid',
      charact: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short:
        'таблетки, покрытые пленочной оболочкой 200 мг блистер в пачке, № 10, 20',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Ніфуроксазід',
    image: {
      small: 'analogs/item-6.jpg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Ніфуроксазід'],

    characteristics: {
      id: 1,
      producer: 'Alkaloid',
      release: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'капсулы твердые 200 мг блистер, № 20',
      atx: {
        numbers: 'M01A E01',
        name: 'Ніфуроксазід',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Парацетамол Беби',
    image: {
      small: 'analogs/paracetamol-b.jpeg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Paracetamol'],

    characteristics: {
      id: 1,
      producer: 'Alkaloid',
      release: 'таблетки, вкриті плівковою оболонкою',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'Парацетамол Беби 120мг/5мл 10 мл N20 суспензия оральная саше',
      atx: {
        numbers: 'M01A E01',
        name: 'Paracetamol',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Парацетамол сироп',
    image: {
      small: 'analogs/paracetamol-3.webp',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Paracetamol'],

    characteristics: {
      id: 1,
      producer: 'ООО ДКП ФАРМАЦЕВТИЧЕСКАЯ ФАБРИКА',
      release: 'сироп',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'Парацетамол сироп, 120 мг / 5 мл, 90 мл',
      atx: {
        numbers: 'M01A E01',
        name: 'Paracetamol',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
  {
    id: 12,
    name: 'Парацетамол раствор',
    image: {
      small: 'analogs/paracetamol-4.jpeg',
      medium: null,
      large: null,
    },
    link: null,

    analogs: ['Paracetamol'],

    characteristics: {
      id: 1,
      producer: 'ООО ДКП ФАРМАЦЕВТИЧЕСКАЯ ФАБРИКА',
      release: 'сироп',
      registration: 'UA/3304/01/01 №84 от 14.01.2023',
      short: 'Парацетамол раствор 10 мг/мл 100 мл N10',
      atx: {
        numbers: 'M01A E01',
        name: 'Paracetamol',
      },
      substance: {
        en: 'Nifuroxazid',
        ua: 'Ніфуроксазід',
      },
      release: 'Без рецепта',
      dosage: '200 мг',
      quantity: '50 шт ',
    },

    instraction: [
      {
        id: 1,
        title: 'Склад',
        text: [
          'With threads from its mouth, it fashions sturdy webs',
          '1 таблетка містить 200 мг ібупрофену у перерахуванні на 100 % суху речовину;',
          'that won’t break even if you set a rock on them.It will never forgive opponents who have angered it. Even after it h',
          'It is vindictive and relentless by nature. Those who cross it even once will be cursed for a thousand years, along with their descendants.On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.',
        ],
      },
      {
        id: 2,
        title: 'Лікарська форма',
        text: [
          'Таблетки, вкриті плівковою оболонкою.',
          'Основные физико-химические свойства: таблетки круглой формы, покрытые пленочной оболочкой розового цвета, с выпуклой поверхностью. На поперечном разломе видно ядро, окруженное слоем пленочной оболочки.',
        ],
      },
      {
        id: 3,
        title: 'Фармакологічна група',
        text: [
          'Нестероїдні протизапальні та протиревматичні засоби. Похідні пропіонової кислоти. Код АТХ М01А Е01.',
        ],
      },
      {
        id: 4,
        title: 'Фармакологічні властивості',
        text: [
          'Фармакодинаміка',
          'Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.',
          'Фармакокінетика',
          'Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.In Alola, Komala is Hypno’s main target. It rarely harms people.This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.',
        ],
      },
      {
        id: 5,
        title: 'Противопоказания',
        text: [
          'Підвищена чутливість до ібупрофену (або до іншого компонента препарату) та інших нестероїдних протизапальних засобів (НПЗЗ).',
          'Реакції гіперчутливості (наприклад, бронхіальна астма, риніт, ангіоневротичний набряк або кропив&apos;янка), що спостерігалися раніше після застосування ібупрофену, ацетилсаліцилової кислоти (аспірину) або інших нестероїдних протизапальних засобів.',
          'Шлунково-кишкова кровотеча або перфорація, пов&apos;язана із застосуванням НПЗЗ, в анамнезі.',
          'Виразкова хвороба шлунка/кровотеча в активній формі або рецидиви в анамнезі (два і більше чіткі епізоди загострення виразкової хвороби або кровотечі).',
          'Цереброваскулярні чи інші кровотечі.',
          'Тяжке зневоднення (викликане блюванням, діареєю або недостатнім вживанням рідини).',
          'Активне запальне захворювання кишок.',
          'Останній триместр вагітності.',
        ],
      },
    ],
  },
];

export default drugItems;
