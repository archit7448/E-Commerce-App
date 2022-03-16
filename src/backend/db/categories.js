import { v4 as uuid } from "uuid";
import Book from "../assets/book1.jpg" 
import gym from "../assets/gym1.jpg" 
import oats from "../assets/food1.jpg" 
import movies from "../assets/movies1.jpg" 
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BOOK",
    image: Book,
  },
  {
    _id: uuid(),
    categoryName: "MOVIES",
    image: movies ,
  },
  {
    _id: uuid(),
    categoryName: "FOOD",
    image :oats ,
  },
  {
    _id: uuid(),
    categoryName: "GYM EQUIPMENT",
    image: gym ,
  },
];
