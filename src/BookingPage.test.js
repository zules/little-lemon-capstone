import { timeSlotReducer, placeholderTimes } from './BookingPage';

test('initializeTimes returns the correct initial state', () => {
    const initialState = [];

    const action = { type: 'initializeTimes' };

    const result = timeSlotReducer(initialState, action);

    expect(result).toEqual(placeholderTimes);
});