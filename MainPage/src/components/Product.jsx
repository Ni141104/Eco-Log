import './Product.css'
import event from './event.png'
function Product(){
    return(
        <div>
 <div class="product">
        <div class="image">
            <img src={event} alt="Error" class="coffee" height="360px" width="300px"/>
        </div>
        <div class="section">
           <p class="head">COFFEE MUG</p>
           <br></br>
           <p class="type">Wooden Coffee Mug</p>
           <br></br>
           <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores alias in accusantium fugiat officiis vel!</p>
           <br></br>
           <p class="rate">
            <span class="original">149</span>
            <span class="cancel">230</span>
           </p>
           <br></br>
           <p class="cart">
            {/* <img src="shopcart2.jpg" alt="Error" class="shop" height="20px" width="20px"/> */}
            <span class="add">Add to cart</span>
           </p>
        </div>
    </div>
        </div>
    )
}

export default Product