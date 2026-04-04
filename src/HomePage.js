import Star from './Star'

export default function HomePage() {
    return (
    <main>
        <section className="hero">
            <div className="welcomeinfo">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img src="restaurant-food.jpg" />
        </section>
        <section className="specials">
            <div className="specials-top">
            <h1>This week's specials!</h1>
            <button>Online Menu</button>
            </div>
            <div className="specials-grid">
                <div className="special-card">
                    <img src="greek-salad.jpg" />
                    <div>
                    <div className="special-header"><h4>Greek Salad</h4>
                    <span>$12.99</span></div>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div className="special-delivery"><span>Order a delivery</span>
                    <span className="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
                <div className="special-card">
                    <img src="bruchetta.jpg" />
                    <div>
                    <div className="special-header"><h4>Bruchetta</h4>
                    <span>$5.99</span></div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <div className="special-delivery"><span>Order a delivery</span>
                    <span className="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
                <div className="special-card">
                    <img src="lemon-dessert.jpg" />
                    <div>
                    <div className="special-header"><h4>Lemon Dessert</h4>
                    <span>$5.00</span></div>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div className="special-delivery"><span>Order a delivery</span>
                    <span className="material-symbols-outlined">moped_package</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-grid">
            <div className="testimonial-card">
                <div className="rating-bar">
                    <p className="rating">Rating</p><Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="rating-bar">
                    <img className="testimonial-photo" src="giorgio.jpg" /><p className="testimonial-name">Giorgio</p>
                </div>
                <p>“Love the salad. Can't get enough!”</p>
            </div>
            <div className="testimonial-card">
                <div className="rating-bar">
                    <p className="rating">Rating</p><Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="rating-bar">
                    <img className="testimonial-photo" src="michael.jpg" /><p className="testimonial-name">Michael</p>
                </div>
                <p>“My favorite spot to grab a bite with a date.”</p>
            </div>
            <div className="testimonial-card">
                <div className="rating-bar">
                    <p className="rating">Rating</p><Star /><Star /><Star /><Star /><Star half={true} />
                </div>
                <div className="rating-bar">
                    <img className="testimonial-photo" src="maryann.jpg" /><p className="testimonial-name">Mary Ann</p>
                </div>
                <p>“This place has the best appetizers!”</p>
            </div>
            <div className="testimonial-card">
                <div className="rating-bar">
                    <p className="rating">Rating</p><Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="rating-bar">
                    <img className="testimonial-photo" src="joannah.jpg" /><p className="testimonial-name">Joannah</p>
                </div>
                <p>“I’ve been going here 3 years and it almost feels like home.”</p>
            </div>
            </div>
        </section>
        <section className="bottom-hero">
            <div className="bottom-about">
                <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>The Little Lemon restaurant is committed to serving our patrons with the highest quality ingredients provided at affordable prices.
With our online ordering and easy table reservation system, it’s easier than ever to get a delicious meal in your neighborhood!
Come visit us and see what all  the praise is about. We’ll treat you like family.</p>
                </div>

            <div className="offset-image-container">
                <img src="chef1.jpg" />
                <div className="tinted-image-wrapper">
                <img src="chef2.jpg" />
                </div>
            </div>
            </div>
        </section>
    </main>
    )
}