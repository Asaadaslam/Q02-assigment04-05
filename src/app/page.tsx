"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation'
export default function Home() {
  const router = useRouter();
  return (

    <div className="parentContainer">
      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/burger.jfif)]"></div>
        <h1 className="title">Beef Burger</h1>
        <p className="description">
        A juicy beef burger made with a perfectly seasoned patty, grilled to perfection{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/burger")}>Order Now</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/shawarma.jfif)]"></div>
        <h1 className="title">Shawarma</h1>
        <p className="description">
        A flavorful Middle Eastern wrap filled with tender, spiced meat, fresh veggies, and creamy sauces{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/shawarma")}>Order Now</button>
     
            </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/sandwich.jfif)]"></div>
        <h1 className="title">Sandwich</h1>
        <p className="description">
        A delicious sandwich layered with fresh ingredients, including crisp vegetables{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/sandwich")}>Order Now</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/broast.jfif)]"></div>
        <h1 className="title">Chicken Broast</h1>
        <p className="description">
        A crispy, deep-fried chicken dish, marinated with flavorful spices, then pressure-fried to perfection{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/broast")}>Order Now</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/fries.jfif)]"></div>
        <h1 className="title">Regular Fries</h1>
        <p className="description">
        Crispy, golden potato fries, perfectly seasoned and fried to a delicious crunch .{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/fries")}>Order Now</button>
      </div>


      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/pasta.jfif)]"></div>
        <h1 className="title">Pasta</h1>
        <p className="description">
        A savory pasta dish with perfectly cooked noodles tossed in a rich, flavorful sauce.{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/pasta")}>Order Now</button>
      </div>

      
      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/cburger.jfif)]"></div>
        <h1 className="title">Chicken Burger</h1>
        <p className="description">
        A tender, juicy chicken patty, grilled or fried to perfection, topped with fresh lettuce.{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/cburger")}>Order Now</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer bg-[url(/wings.jfif)]"></div>
        <h1 className="title">Chicken Wings</h1>
        <p className="description">
Crispy, flavorful chicken wings, fried or baked to perfection, tossed in a savory or spicy sauce.{" "}
        </p>
        <button className='orderNow' onClick={()=>router.push("/wings")}>Order Now</button>
      </div>
     

          
    </div>


  );
}