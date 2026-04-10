import BookingSlot from './BookingSlot'

export default function BookingForm({ step, availableTimes, formData, handleChange, handleSubmit, handleGuestCount, handleBack, dispatchDate, handleDateChange }) {

if (step === 1) {
    return (
        <form className="resform" onSubmit={handleSubmit}>
            <div className="forminputpair">
            <label className="formlabel" htmlFor="resdate">Select date</label>
            <div className="input-wrapper"><input className="date-input" type="date" id="resdate" name="resdate" value={formData.resdate} onChange={handleDateChange} /></div>
            </div>
            <div className="forminputpair">
            <label className="formlabel" htmlFor="restime">Select time</label>
            <select
            id="restime"
            name="restime"
            value={formData.restime}
            onChange={handleChange}
            >
                {availableTimes.map((time) => (
                    <BookingSlot key={time} time={time} />
                ))}
            </select>
            </div>
                <fieldset className="guest-stepper">
                <div className="forminputpair">
                <legend className="formlabel">Number of Diners</legend>
                <div className="stepper-controls">
                    <button
                    className="stepper-toggle"
                    type="button"
                    onClick={() => handleGuestCount(-1)}
                    aria-label="Decrease guests"
                    >
                    -
                    </button>
                    <span className="input-wrapper" aria-live="polite">{formData.guests}</span>
                    <button
                    className="stepper-toggle"
                    type="button"
                    onClick={() => handleGuestCount(1)}
                    aria-label="Increase guests"
                    >
                    +
                    </button>
                </div>
                </div>
                </fieldset>

                <fieldset className="seating-selector">
                <div className="forminputpair">
                <legend className="formlabel">Seating Type</legend>
                <div className="radio-group">
                    <label
                    className={`seating-card ${formData.seatingType === 'indoors' ? 'active' : ''}`}
                    >
                    <input
                        type="radio"
                        name="seatingType"
                        value="indoors"
                        checked={formData.seatingType === 'indoors'}
                        onChange={handleChange}
                        className="sr-only"
                    />
                        <span class="material-symbols-outlined">house</span>
                        <p>Indoors</p>
                    </label>
                    <label
                    className={`seating-card ${formData.seatingType === 'outdoors' ? 'active' : ''}`}
                    >
                    <input
                        type="radio"
                        name="seatingType"
                        value="outdoors"
                        checked={formData.seatingType === 'outdoors'}
                        onChange={handleChange}
                        className="sr-only"
                    />
                        <span class="material-symbols-outlined">chair_umbrella</span>
                        <p>Outdoors</p>
                    </label>
                </div>
                </div>
                </fieldset>

            <div className="forminputpair">
            <label className="formlabel" htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            </div>
            <input className="calltoaction" type="submit" value="Next" />
        </form>
    )
}

if (step === 2) {
    return (
    <p>Page 2</p>
    )
}

}