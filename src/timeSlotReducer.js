import { fetchAPI } from './api';

export const todaysTimes = fetchAPI(new Date());

export const timeSlotReducer = (state, action) => {
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