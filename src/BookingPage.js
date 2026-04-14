import { useState, useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm"
import { timeSlotReducer } from './timeSlotReducer';

export const placeholderTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
const todaysTimes = window.fetchAPI(new Date());



export default function BookingPage() {

    const [availableTimes, dispatchDate] = useReducer(timeSlotReducer, placeholderTimes)

    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        resdate: '',
        restime: '',
        guests: 1,
        seatingType: null,
        occasion: 'None',
        guestName: '',
        guestEmail: '',
        guestEmailRetype: '',
        phoneNumber: '',
        contactPreference: 'calls',
        comments: '',
    });


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleDateChange = (e) => {

    const selectedDate = e.target.value;
    setFormData({ ...formData, [e.target.name]: selectedDate });

    const fetchedTimes = window.fetchAPI(new Date(selectedDate));

    dispatchDate({ type: 'updateTimes', payload: fetchedTimes });
    }




    const submitForm = (e) => {
    e.preventDefault();
    if (step < 2) {
        setStep(prev => prev + 1);
    } else {
    e.preventDefault();
    const success = window.submitAPI(formData);
    if (success) {
        navigate("/confirmation", { state: formData });
    }

    }
    };

    const handleBack = () => {
    if (step > 1) {
        setStep(prev => prev - 1);
    }
    };

    const handleGuestCount = (amount) => {
    setFormData(prev => ({
        ...prev,
        guests: Math.max(1, prev.guests + amount)
    }));
    };

    return (
    <main>
        <section className="hero">
                <h1>Reserve a Table</h1>
        </section>
        <section>
            <BookingForm
            availableTimes={todaysTimes}
            step={step}
            formData={formData}
            handleChange={handleChange}
            submitForm={submitForm}
            handleBack={handleBack}
            handleGuestCount={handleGuestCount}
            dispatchDate={dispatchDate}
            handleDateChange={handleDateChange}
            />
        </section>
    </main>
    )
}