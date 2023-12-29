function Input({ label, type = "text", name, register, validationSchema, errors }) {
    return <div className="flex flex-col w-full">
        <label htmlFor={name} className="text-secondary-0 mb-2">{label}</label>
        <input
            {...register(name, validationSchema)}
            id={name}
            className="input"
            type={type}
            name={name}
            autoComplete="off"
        />
        {
            errors && errors[name] && <span className="text-error block text-sm mt-3">{errors[name]?.message}</span>
        }
    </div>
}

export default Input