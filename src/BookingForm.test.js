import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the select date label', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/select date/i);
    expect(headingElement).toBeInTheDocument();
})