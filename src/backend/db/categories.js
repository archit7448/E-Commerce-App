import { v4 as uuid } from "uuid";
import { Images } from "../Images/images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BOOK",
    image: Images.book1,
  },
  {
    _id: uuid(),
    categoryName: "MOVIES",
    image: Images.movie1 ,
  },
  {
    _id: uuid(),
    categoryName: "FOOD",
    image :Images.food1 ,
  },
  {
    _id: uuid(),
    categoryName: "GYM EQUIPMENT",
    image: Images.gym1 ,
  },
];
