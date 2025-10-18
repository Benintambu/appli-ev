export default function Button({ type = "button", placeholder, className }) {
    return (
        <button type={type} className={className}>{placeholder}</button>
    )
}