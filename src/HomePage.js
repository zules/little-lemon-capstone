export default function HomePage() {
    return (
    <main>
        <section class="hero">
            <div class="welcomeinfo">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img src="restaurant-food.jpg" />
        </section>
        <section class="specials">
            <div class="specials-top">
            <h1>This week's specials!</h1>
            <button>Online Menu</button>
            </div>
            <div class="specials-grid">
                <div class="special-card">
                    <img src="greek-salad.jpg" />
                    <div>
                    <div class="special-header"><h4>Greek Salad</h4>
                    <span>$12.99</span></div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div class="special-delivery"><span>Order a delivery</span>
                    <span class="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
                <div class="special-card">
                    <img src="bruchetta.jpg" />
                    <div>
                    <div class="special-header"><h4>Bruchetta</h4>
                    <span>$5.99</span></div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <div class="special-delivery"><span>Order a delivery</span>
                    <span class="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
                <div class="special-card">
                    <img src="lemon-dessert.jpg" />
                    <div>
                    <div class="special-header"><h4>Lemon Dessert</h4>
                    <span>$5.00</span></div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div class="special-delivery"><span>Order a delivery</span>
                    <span class="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}