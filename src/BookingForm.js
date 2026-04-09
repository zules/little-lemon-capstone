import { useState } from 'react';

export default function BookingForm() {

const [formData, setFormData] = useState({
    resdate: '',
    restime: '',
    guests: 1,
    seatingType: '',
    occasion: 'None',
  });

const [step, setStep] = useState(1);

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

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

if (step === 1) {
    return (
        <form className="resform" onSubmit={handleSubmit}>
            <div className="forminputpair">
            <label className="formlabel" htmlFor="resdate">Select date</label>
            <div className="input-wrapper"><input className="date-input" type="date" id="resdate" name="resdate" value={formData.resdate} onChange={handleChange} /></div>
            </div>
            <div className="forminputpair">
            <label className="formlabel" htmlFor="restime">Select time</label>
            <select
            id="restime"
            name="restime"
            value={formData.restime}
            onChange={handleChange}
            >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
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