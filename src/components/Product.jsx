export default function Product({icon, title, className}){
    return (
        <div className={`product ${className}`}>
                <h2>{title}</h2>
            </div>
    )
}