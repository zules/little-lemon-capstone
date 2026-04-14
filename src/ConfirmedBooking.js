import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingMainSelections from './BookingMainSelections'

export default function ConfirmedBooking() {

    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state;

    useEffect(() => {
        if (!formData) {
            navigate("/booking");
        }
    }, [formData, navigate]);
    if (!formData) return null;

    return (
        <>
            <main>
        <section className="hero">
                <h1>Reserve a Table</h1>
        </section>
        <section>
        <div className="booking-page-info-container">
            <h2>Confirmation</h2>
            <p>Your reservation has been made. A confirmation has been sent to your email.</p>
        <BookingMainSelections
        formData={formData}
        />
            <dl className="summary-list">
            <div>
                <dt>Name:</dt>
                <dd>{formData.guestName}</dd>
            </div>
            <div>
                <dt>Email:</dt>
                <dd>{formData.guestEmail}</dd>
            </div>
            <div>
                <dt>Number:</dt>
                <dd>{formData.phoneNumber}</dd>
            </div>
            <div>
                <dt>Comments:</dt>
                <dd>{formData.comments ? formData.comments : <i>No comments</i>}</dd>
            </div>
            </dl>
            <p>Contact us to make any changes. Our number: 111-123-4567</p>
    </div></section></main>
</>
    )
}