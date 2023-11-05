
export default function InputField({type, placeholder, value}) {
    return (
        <input type={type} placeholder={placeholder===null?'':placeholder}
        className="input-field shadow-sm" value={value===null?'':value}/>
    );
}