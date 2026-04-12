import { timeSlotReducer, placeholderTimes } from './BookingPage';

test('initializeTimes returns the correct initial state', () => {
    const initialState = [];

    const action = { type: 'initializeTimes' };

    const result = timeSlotReducer(initialState, action);

    expect(result).toEqual(placeholderTimes);
});

test('update times returns the current state', () => {

    const mockState = ["12:00", "13:00"];

    const action = { type: 'updateTimes' };

    const result = timeSlotReducer(mockState, action);

    expect(result).toEqual(mockState);
});