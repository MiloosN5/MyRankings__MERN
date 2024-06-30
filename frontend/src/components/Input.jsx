const Input = (
    {
        label,
        type,
        name,
        value,
        handleChange,
        disabled,
        placeholder = null
    }
) => {

    const disabledDefault = false;
    const disabledValue = disabled || disabledDefault;

    return (
        <div className='input'>
            {
                label === 'search'
                    ?
                    (
                        <label className='hidden' id='input-label'>{label}</label>
                    )
                    :
                    (
                        <label>{label}</label>
                    )
            }
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                disabled={disabledValue}
                placeholder={placeholder}
                aria-labelledby='input-label'
            />
        </div>
    )
}

export default Input