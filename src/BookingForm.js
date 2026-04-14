import BookingSlot from './BookingSlot'
import BookingMainSelections from './BookingMainSelections'


export default function BookingForm({ step, availableTimes, formData, handleChange, submitForm, handleGuestCount, handleBack, dispatchDate, handleDateChange }) {




if (step === 1) {
    return (
        <form className="resform" onSubmit={submitForm}>
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
    <>
    <div className="booking-page-info-container">
        <h3 className="booking-back" role="button" onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back</span>Back
        </h3>
        <BookingMainSelections
        formData={formData}
        />
    </div>

     <form className="resform" onSubmit={submitForm}>
        <div className="forminputpair">
            <label className="formlabel" htmlFor="guest-name">Your Name</label>
            <div className="input-wrapper">
                <input
                className="formlabel"
                type="text"
                id="guest-name"
                name="guestName"
                placeholder="Enter full name"
                value={formData.guestName}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className="forminputpair">
            <label className="formlabel" htmlFor="guest-email">Email</label>
            <div className="input-wrapper">
                <input
                className="formlabel"
                type="email"
                id="guest-email"
                name="guestEmail"
                placeholder="Enter email"
                value={formData.guestEmail}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className="forminputpair">
            <label className="formlabel" htmlFor="guest-email-retype">Retype Email</label>
            <div className="input-wrapper">
                <input
                className="formlabel"
                type="email"
                id="guest-email-retype"
                name="guestEmailRetype"
                placeholder="Enter email"
                value={formData.guestEmailRetype}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className="forminputpair">
            <label className="formlabel" htmlFor="phone-number">Phone Number</label>
            <div className="input-wrapper">
                <input
                className="formlabel"
                type="text"
                id="phone-number"
                name="phoneNumber"
                placeholder="(xxx) xxx-xxxx"
                value={formData.phoneNumber}
                onChange={handleChange}
                />
            </div>

        <fieldset className="formlabel">
        <label className="radio-option">
            <input
            type="radio"
            name="contactPreference"
            value="calls"
            checked={formData.contactPreference === "calls"}
            onChange={handleChange}
            />
            Prefer calls
        </label>
        <label className="radio-option">
            <input
            type="radio"
            name="contactPreference"
            value="texts"
            checked={formData.contactPreference === "texts"}
            onChange={handleChange}
            />
            Prefer texts
        </label>
        </fieldset>
        </div>
        <div className="forminputpair">
        <label htmlFor="comments">Additional Comments</label>
            <textarea
            id="comments"
            name="comments"
            rows="3"
            placeholder="Type comment"
            value={formData.comments}
            onChange={handleChange}
            ></textarea>
        </div>
    <input className="calltoaction" type="submit" value="Reserve Table" />
    </form>
    </>
    )
}


}