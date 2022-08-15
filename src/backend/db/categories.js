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
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1659519324/daria-nepriakhina-xY55bL5mZAM-unsplash_s7bm7n.jpg",
  },
  {
    _id: uuid(),
    categoryName: "MOVIE",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1659519316/samuel-regan-asante-wMkaMXTJjlQ-unsplash_jjapy1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "FOOD",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1659519653/growth_in_the_packaged_food_industry_1536x1536_original_ko9nee.jpg",
  },
  {
    _id: uuid(),
    categoryName: "GYM",
    image:
      "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1659519309/alexandra-tran-fS3tGOkp0xY-unsplash_f34058.jpg",
  },
];
