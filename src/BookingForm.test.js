import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the select date label', () => {
    const availableTimes = ['17:00', '18:00'];
    const step = 1;
    const formData = {
        resdate: '',
        restime: '',
        guests: 1,
        seatingType: '',
        occasion: 'None',
    }
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const handleBack = jest.fn();
    const handleGuestCount = jest.fn();
    const dispatchDate = jest.fn();
    const handleDateChange = jest.fn();
    render(
        <BookingForm
            availableTimes={availableTimes}
            step={step}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
            handleGuestCount={handleGuestCount}
            dispatchDate={dispatchDate}
            handleDateChange={handleDateChange}
        />
    );
    const headingElement = screen.getByText(/select date/i);
    expect(headingElement).toBeInTheDocument();
})