import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

    const availableTimes = ['17:00', '18:00'];
    const formData = {
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
    }
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const handleBack = jest.fn();
    const handleGuestCount = jest.fn();
    const dispatchDate = jest.fn();
    const handleDateChange = jest.fn();

test('Renders the select date label', () => {
    const step = 1;
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

test('All essential fields on page one have the required attribute', () => {
    const step = 1;
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
    // List the labels of all your required fields
    const requiredFields = [
        "Select date",
        "Select time"
    ];

    requiredFields.forEach((label) => {
        const input = screen.getByLabelText(new RegExp(label, "i"));
        expect(input).toBeRequired();
    });
});

test('All essential fields on page two have the required attribute', () => {
    const step = 2;
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
    // List the labels of all your required fields
    const requiredFields = [
        "Your Name",
        "Email",
        "Retype Email",
        "Phone Number"
    ];

    requiredFields.forEach((label) => {
        const input = screen.getByLabelText(label);
        expect(input).toBeRequired();
    });
});

test('does not display email error when emails match', () => {
    const step = 2;
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

    const emailInput = screen.getByLabelText("Email");
    const retypeInput = screen.getByLabelText("Retype Email");

    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(retypeInput, { target: { value: 'user@example.com' } });

    fireEvent.blur(retypeInput);

    const errorMessage = screen.queryByText(/ensure email is typed correctly/i);
    expect(errorMessage).not.toBeInTheDocument();
});

test('displays email error when emails do not match', () => {
    const mismatchedData = {
        ...formData,
        guestEmail: 'user@example.com',
        guestEmailRetype: 'WRONG@example.com'
    };

    render(
        <BookingForm
            availableTimes={availableTimes}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
            handleGuestCount={handleGuestCount}
            dispatchDate={dispatchDate}
            handleDateChange={handleDateChange}
            formData={mismatchedData}
            step={2}
        />
    );

    const retypeInput = screen.getByLabelText("Retype Email");
    fireEvent.blur(retypeInput);

    const errorMessage = screen.queryByText(/ensure email is typed correctly/i);
    expect(errorMessage).toBeInTheDocument();
});