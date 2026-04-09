import BookingForm from "./BookingForm"

export default function BookingPage() {
    return (
    <main>
        <section className="hero">
                <h1>Reserve a Table</h1>
        </section>
        <section>
            <BookingForm />
        </section>
    </main>
    )
}