function Select({label, value, onChange, options }) {
    return (
        <div className="mt-5">
            <label>{label}</label>
            <select value={value} onChange={onChange} className="textField__input py-2 text-sm">
                {options.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select