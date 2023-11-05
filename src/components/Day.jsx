

export default function Day({children, active}) {
    return (
        <div className={`day ${!active || active===null ? '' : 'active'}`} >
            <p>
                {children}
            </p>
        </div>
    );
}