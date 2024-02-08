import { useTranslation } from "react-i18next";

function Select({label, value, onChange, options }) {
    const { t } = useTranslation();

    return (
        <div className="mt-5">
            <label>{label}</label>
            <select value={value} onChange={onChange} className="textField__input py-2 text-sm">
                <option value={[]}>{t('modal.chooseOption')}</option>
                {options.map((item) => (
                    <option key={item.name} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select