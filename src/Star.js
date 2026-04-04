export default function Star({ half = false }) {

    const starType = half ? "star_half" : "star";

    return (
        <span className="material-icons-outlined star">
{starType}
</span>
    )
}