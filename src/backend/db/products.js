import { v4 as uuid } from "uuid";
import {Images} from "../Images/images"
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Subtle art of not giving a fu*k",
    produced: "By Mark Manson",
    price: "600",
    description:"Book written by Mark Manson to help people",
    category: "book",
    image:Images.book1,
    ratings:3,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Beautiful Mind",
    produced: "By Blueray",
    price: "900",
    description:"Based on scientest john nash",
    category: "movie",
    image:Images.movie1,
    ratings:5,
    inStock:false,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "everything is fu*ked a book about hope",
    produced: "By Mark Manson",
    price: "700",
    description:"Book written by Mark Manson to help people",
    category: "book",
    image:Images.book2,
    ratings:4,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Organic Apple Cider vinegar",
    produced: "By Bold fit",
    price: "800",
    description:"Made organic without any prservative",
    category: "food",
    image:Images.food3,
    ratings:2,
    inStock:false,
    fastDelievery:true
  },
  {
    _id: uuid(),
    title: "As a man thinketh",
    produced: "By James Allen",
    price: "500",
    description:"Book helps to understand thoughts",
    category: "book",
    image:Images.book3,
    ratings:4,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Dumbells and resistance band",
    produced: "By amazon basic",
    price: "900",
    description:"",
    category: "gym",
    image:Images.gym1,
    ratings:1,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Peanut Butter",
    produced: "By Pintola",
    price: "700",
    description:"Best peanut butter without harmful presevative",
    category: "food",
    image:Images.food2,
    ratings:3,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "The Shawshank Redemption",
    produced: "By blueray",
    price: "800",
    description:"Intresting and inspiring movie IMDB ratings:9.2",
    category: "movie",
    image:Images.movie2,
    ratings:5,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Resistance Band",
    produced: "By Cultfit",
    price: "90",
    description:"It creates more resistance during workout",
    category: "gym",
    image:Images.gym3,
    ratings:3,
    inStock:true,
    fastDelievery:true
  },
  {
    _id: uuid(),
    title: "Oats",
    produced: "By Saffola",
    price: "400",
    description:"Book helps to understand thoughts",
    category: "food",
    image:Images.food1,
    ratings:4,
    inStock:true,
    fastDelievery:true
  },
  {
    _id: uuid(),
    title: "Joker",
    produced: "By Bluray",
    price: "600",
    description:"Joker helps in understanding depression IMDB ratings:8.2",
    category: "movie",
    image:Images.movie3,
    ratings:4,
    inStock:true,
    fastDelievery:false
  },
  {
    _id: uuid(),
    title: "Dumbells",
    produced: "By amazon basic",
    price: "700",
    description:"Perfect in holding and grip is amazing",
    category: "gym",
    image:Images.gym2,
    ratings:3,
    inStock:true,
    fastDelievery:false
  },
];
