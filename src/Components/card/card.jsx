import image from "../../assets/book.jpg"
import "./card.css"

export const Card = () => {
    
   return (
    <div class="card-wrapper  card-cart">
    <img src={image} alt="sweatshirt" />
    <div class="content-wrapper">
      <h1 class="card-heading-main">The Subtle Art of Not Giving a Fu*k</h1>
      <h2 class="card-heading-two">By Mark Manson</h2>
      <h2 class="card-price">₹ 300</h2>
      <p className="card-para">Book written by Mark Manson to help people </p>
      <div class="card-button-wrapper">
        <button class="button button-primary card-button">
          ADD TO CART
        </button>
        <button class="button button-secondary card-button">
          WISHLIST
        </button>
      </div>
    </div>
  </div>
   ) 
}