function Select({label, value, onChange, options }) {
    return (
        <div className="mt-5">
            <label>{label}</label>
            <select value={value} onChange={onChange} className="textField__input py-2 text-sm">
                <option value={[]}>گزینه مورد نظر خود را انتخاب کنید</option>
                {options.map((item) => (
                    <option key={item.name} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select