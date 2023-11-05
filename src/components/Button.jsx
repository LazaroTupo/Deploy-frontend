export default function Button({children, type, color, onClick}) {
    return (
        <button type={type} className={`btn btn-${color}`}
        onClick={onClick || (()=>{})}>
            {children}
        </button>
    );
}