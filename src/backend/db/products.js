import { v4 as uuid } from "uuid";
import { Images } from "../Images/images";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Nike Air Max 90 SE",
    price: "9,517",
    category: "Nike",
    description:
      "Max Air changed the game in '87. Now, we honour its emerald anniversary (35 years!) with the Nike Air Max 90 SE. Emerald graphics and colours highlight this big landmark, while its classic Waffle outsole and exposed Air cushioning keep you living the legacy in comfort.",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660047674/air-max-90-se-mens-shoes-2C5LfX_v46nfv.jpg",
    ratings: 3,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas Ultraboast 5.0",
    price: "8,999",
    description: `ULTRABOOST DNA SHOES MADE IN PART WITH PARLEY OCEAN PLASTIC.
    Any time you're on your feet is a good time to wear these adidas Ultraboost shoes. Equipped with all the performance technology that runners love, they're updated with extra flair — just look at those metallic details. An energy-returning BOOST midsole and a foot-hugging adidas PRIMEKNIT upper make sure of it.`,
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660066545/Ultraboost_5.0_DNA_Shoes_Black_GV8729_06_standard_cpm707.jpg",
    ratings: 5,
    inStock: false,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike Air Max 95",
    price: "13,227",
    description:
      "The Nike Air Max 95 Sakura is a nod to the rich history of Japan's influence on American fashion and culture.The Sakura—or cherry blossom—pattern throughout the shoe adds Japanese-inspired elements to the design.This celebration of cultures also has the same Max Air unit cushioning you know and love, so you can embrace that familiar comfort.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660050426/air-max-95-shoes-FJRr6S_w8uu3x.jpg",
    ratings: 4,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike Air Max 270",
    price: "13,995",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660066298/air-max-270-shoes-2V5C4p_kgb0mx.jpg",
    ratings: 4.7,
    inStock: false,
    fastDelievery: true,
  },
  {
    _id: uuid(),
    title: "Nike Zoom Fly 5",
    price: "14,995",
    description:
      "Bridge the gap between your weekend training run and race day in a durable design that can be deployed not just at the starting line of your favourite race but in the days and months after your conquest. It offers comfort and reliability but with a propulsive sensation that'll help you feel fast and fresh. That kind of versatility is uncommon in the running arena. But who said you can't have it all?",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660057935/zoom-fly-5-road-running-shoes-lkx7Zp_rimud8.jpg",
    ratings: 4,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike ZoomX NEXT% 2",
    price: "19,695",
    description:
      "Continue the next evolution of speed with a racing shoe made to help you chase new goals and records. The Nike ZoomX Vaporfly NEXT% 2 builds on the model racers everywhere love. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, the 2 still has the responsive cushioning and secure support to help push you towards your personal best. This electric design is inspired by the soul and rebellious spirit of Eugene, Tracktown USA, where contenders from all over the world will descend to test themselves against the globe's greatest athletes.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660058753/zoomx-vaporfly-next-2-road-racing-shoes-zgvZjF_wwlez1.jpg",
    ratings: 3.7,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike Air Max 270 G",
    price: "13,495",
    description:
      "Look legendary in the Nike Air Max 270 G. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660066393/air-max-270-g-golf-shoe-Z6vCfs_iewcbl.jpg",
    ratings: 4.7,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike Air Max Impact 3",
    price: "8,195",
    description:
      "Influence the game at both ends of the court in the Nike Air Max Impact 3.Ideal for players who create separation with their vertical, it features pressure-tested Max Air cushioning to help absorb impact.Plus, rubber wraps up the sides for added durability and stability.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660059368/air-max-impact-3-basketball-shoe-J7Pjjx_puyomx.jpg",
    ratings: 5,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Nike Air Max Excee",
    price: "7,995",
    description:
      "Inspired by the Nike Air Max 90, the Nike Air Max Excee is a celebration of a classic through a new lens. Elongated lines and distorted proportions on the upper bring the '90s look you love into a new, modern space.",
    category: "Nike",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cceef956-48a3-49c7-adaa-1e8769c636eb/air-max-excee-shoe-lPbXqt.png",
    ratings: 3,
    inStock: true,
    fastDelievery: true,
  },
  {
    _id: uuid(),
    title: "Air Jordan 1 Zoom",
    price: "12,495",
    description:
      "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
    category: "Jordan",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660060386/air-jordan-1-zoom-cmft-shoes-mDxHSk_kxfgd2.jpg",
    ratings: 4,
    inStock: true,
    fastDelievery: true,
  },
  {
    _id: uuid(),
    title: "Nike Air Force 1 '07",
    price: "7,495",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    category: "Nike",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660060150/air-force-1-07-shoe-WrLlWX_m7soc7.jpg",
    ratings: 4,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Air Jordan 6 Retro",
    price: "15,995",
    description:
      "MJ's sixth signature shoe debuted during the 1990–1991 season as His Airness battled rivals in pursuit of an elusive first championship.Now, it's back in a variety of colour schemes.Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.",
    category: "Jordan",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660061257/air-jordan-6-retro-shoes-4m3b9d_mdv5zo.jpg",
    ratings: 3.7,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Jordan 1 KO",
    price: "12,495",
    description:
      "The Jordan 1 inspires admiration among collectors and next-gen fans alike.The Jordan 1 KO repackages the famous icon using a mix of synthetic leather and canvas, with a fit that's redesigned for comfort.",
    category: "Jordan",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660066175/jordan-1-ko-shoes-RLJcHC_l3cqs1.jpg",
    ratings: 3.3,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Air Jordan 1 Mid",
    price: "10,795",
    description:
      "It's easy being green. This summery AJ1 is decked out in refreshing shades of teal and mint, served in a classic mid-top silhouette. Premium leather and lightweight Air cushioning complete the package with street-ready comfort that lasts all day.",
    category: "Jordan",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660065928/air-jordan-1-mid-shoes-zxLK1G_sl4xum.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas NMD_R1",
    price: "8,399",
    description:
      "Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed '80s runner from the adidas archive, these modern trainers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort. Bold colour and signature midsole plugs make a statement, so wherever you're headed, you're sure to show up in style.",
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660069103/NMD_R1_Primeblue_Shoes_Black_GZ9256_06_standard_yggan7.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas SolarControl",
    price: "6,999",
    description:
      "From training runs to race day, go the distance with confidence. These running shoes provide extra stability with adidas LEP 2.0, designed to help guide each foot strike and propel you forward. The mesh upper offers targeted lockdown zones for added support while maintaining breathability. BOOST cushioning delivers energy return and comfort to keep you feeling fresh from start to finish.",
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660069416/Solarcontrol_Shoes_White_GV8265_06_standard_zpmuvq.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas Adi Chic",
    price: "1,349",
    description:
      "From training runs to race day, go the distance with confidence. These running shoes provide extra stability with adidas LEP 2.0, designed to help guide each foot strike and propel you forward. The mesh upper offers targeted lockdown zones for added support while maintaining breathability. BOOST cushioning delivers energy return and comfort to keep you feeling fresh from start to finish.",
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660069952/Adi_Chic_M_Black_EY2926_06_standard_gqoei7.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas Donovan",
    price: "5,999",
    description:
      "The D.O.N. Issue #3: Stars of Utah shoes from adidas Basketball draw inspiration from the magnificent skies of the place that Donovan Mitchell now calls home. A dark upper features neon highlights of purple and blue inspired by the beautiful nocturnal imagery of the Bonneville Salt Flats, one of the great state of Utah's most visited tourist attractions.",
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660070107/Donovan_Mitchell_D.O.N._Issue_3_Shoes_-_Stars_of_Utah_Black_GZ5526_06_standard_bdrlir.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Addidas Stan Smith",
    price: "8,999",
    description:
      "The adidas Stan Smith shoes are pretty unmistakable at this point. Clean. Minimalist. Versatile. It's their calling card, one that's continued to make an impact all over the cultural landscape. There's absolutely no disputing what these trainers are, especially since STAN SMITH flashes in gold from the side, the tongue label has the namesake's face quite boldly there and gold jewels dangle from the laces — STAN on one shoe, SMITH on the other.",
    category: "Addidas",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660070385/Stan_Smith_Shoes_White_GW0490_06_standard_jj1uwi.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma RBD Game",
    price: "7,499",
    description:
      "Drawing inspiration from basketball, classics and pop culture, these sneakers are here to shake up the status quo. Whether on the court or hanging out with friends, these game-changers are easy-to-wear, complete with an upper featuring soft tumble leather material and a hook and loop closure on top. Walk through life in style and comfort thanks to the superior cushioning of the SoftFoam+ sockliner and the striking duo colours on the retro bottom design.",
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660070970/RBD-Game-Men_s-Sneakers_klhzxm.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Slipstream",
    price: "9,999",
    description:
      "Winging its way to you in a bold mid-boot construction are the iconic Slipstream Trainers. From its release as a basketball shoe in 1987 to its reissue with crazy colourways in the 2000s, the Slipstream model has been present at all important moments of sneaker history. Today, we're releasing it again in its original look, staying true to its 1980s basketball heritage. The Slipstream Mid celebrates the classic and authentic look of the mid version, complete with plush leather textures. Debossed PUMA branding brings a glossy finish to the tongue.",
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660071212/Slipstream-Mid-Men_s-Sneakers_lwzmc6.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "one8 Virat Kohli",
    price: "6,999",
    description: `Introducing the lightweight and tech inspired shoes from the latest one8 collection. The one8 Virat Kohli Softride Premier walkingshoe is crafted to offer smooth sprints. The SOFTRIDE midsole offers plush comfort. The mesh upper and chunky outsole completed with the TPU clip sculptures the silhouette of the shoe.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660071864/one8-Virat-Kohli-Softride-Premier-Men_s-Walking-Shoes_m0kwgr.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Caven Rainbow",
    price: "5,499",
    description: `A colourful new addition to our Caven family. We've kept the classic 1980s basketball-inspired silhouette, but enhanced the look and feel with rich textures, rainbow-bright stitching and a stacked midsole to bring a fresh energy to this timeless street classic.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660072052/Puma-Caven-Rainbow-Hues-Men-Shoes_cv7shu.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "PUMA Skipper",
    price: "2,579",
    description: `Incorporated with beauty of classic running shoe, the Skipper sneakers is designed for versatile styling. The studded rubber outsole and improvised upper sleek offers comfortable forays. The bold PUMA branding and improvised lace closure is the style quotient of this shoes.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660072260/PUMA-Skipper-Men_s-Sneakers_qge9e4.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Coca-Cola",
    price: "9,999",
    description: `PUMA x COCA-COLA is the coming together of two iconic brands who share a profound history, a sense of positivity, and an ability to move culture forward. Collection pieces, like these Slipstream sneakers – a sweet revamp of our OG basketball shoe – incorporate both brands’ DNA with a future-retro design language, reminding us to be proud of our past while also reminding us always to look ahead with positivity.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660072449/PUMA-x-COCA-COLA-Slipstream-Sneakers_wf0aup.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Mercedez AMG",
    price: "4,799",
    description: `The technology that goes into the cars from the Mercedes-AMG Petronas Motorsport Formula 1 team is mind-boggling. Especially when it comes to aerodynamics. The Mercedes F1 A3ROCAT Unisex Sneakers pay homage to that, with their aerodynamic elements and modern take on the upper. Ideal for driving, or pretty much other activity you care to name.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660072580/Mercedes-AMG-Petronas-F1-A3ROCAT-Men_s-Sneakers_ignj0f.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Rebound Future",
    price: "4,219",
    description: `Inspired by a performance silhouette, the Rebound Future Cage brings progressive design, street culture elements and optimum comfort to the table. Dynamic and daring, the textile upper includes a caged construction with a see-through window detail, which works alongside the synthetic heel counter to add stability and durability to your ride. Feel cushioned with every step thanks to the plush sockliner and injected CMEVA midsole. You can walk securely due to the full rubber outsole. The oversized PUMA Cat Logo on the vamp pops with attitude to round off this brazen new shoe.`,
    category: "Puma",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660073082/Rebound-Future-Cage-Men-Shoes_izgzug.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
  {
    _id: uuid(),
    title: "Puma Rebound Future",
    price: "4,219",
    description: `Inspired by a performance silhouette, the Rebound Future Cage brings progressive design, street culture elements and optimum comfort to the table. Dynamic and daring, the textile upper includes a caged construction with a see-through window detail, which works alongside the synthetic heel counter to add stability and durability to your ride. Feel cushioned with every step thanks to the plush sockliner and injected CMEVA midsole. You can walk securely due to the full rubber outsole. The oversized PUMA Cat Logo on the vamp pops with attitude to round off this brazen new shoe.`,
    category: "FILA",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660073082/Rebound-Future-Cage-Men-Shoes_izgzug.jpg",
    ratings: 4.2,
    inStock: true,
    fastDelievery: false,
  },
];
