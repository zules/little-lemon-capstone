import { useState, useReducer } from 'react';
import BookingForm from "./BookingForm"

export const placeholderTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
const todaysTimes = window.fetchAPI(new Date());

export const timeSlotReducer = (state, action) => {
    const today = new Date();
    switch (action.type) {
        case 'updateTimes':
            console.log(`selected ${action.payload}`)
            return action.payload;
        case 'initializeTimes':
            return todaysTimes;
        default:
            return state;
    }
}

export default function BookingPage() {

    const [availableTimes, dispatchDate] = useReducer(timeSlotReducer, placeholderTimes)

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        resdate: '',
        restime: '',
        guests: 1,
        seatingType: null,
        occasion: 'None',
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




    const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
        setStep(prev => prev + 1);
    } else {
        console.log("Sending data to API:", formData);
        alert("Form submitted successfully!");
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
            handleSubmit={handleSubmit}
            handleBack={handleBack}
            handleGuestCount={handleGuestCount}
            dispatchDate={dispatchDate}
            handleDateChange={handleDateChange}
            />
        </section>
    </main>
    )
}