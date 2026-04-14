export default function BookingSelections ({formData}) {
    const formattedDate = new Date(formData.resdate).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC'
});
    return (
    <dl className="summary-list">
  <div>
    <dt>Selected Date:</dt>
    <dd>{formattedDate}</dd>
  </div>
  <div>
    <dt>Selected Time:</dt>
    <dd>{formData.restime}</dd>
  </div>
<div>
    <dt>Diners:</dt>
    <dd>{formData.guests}</dd>
  </div>
  <div>
    <dt>Seating Type:</dt>
    <dd>{formData.seatingType ? formData.seatingType : `No preference`}</dd>
  </div>
<div>
    <dt>Occasion:</dt>
    <dd>{formData.occasion}</dd>
  </div>
</dl>
    )
}