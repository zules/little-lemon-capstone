import { timeSlotReducer, todaysTimes} from './timeSlotReducer';

test('initializeTimes returns the correct initial state', () => {
    const initialState = [];

    const action = { type: 'initializeTimes' };

    const result = timeSlotReducer(initialState, action);

    expect(result).toEqual(todaysTimes);
});

test('update times returns provided time data from date', () => {

    const mockState = ["12:00", "13:00"];

    const action = { type: 'updateTimes', payload: mockState };

    const result = timeSlotReducer(mockState, action);

    expect(result).toEqual(mockState);
});