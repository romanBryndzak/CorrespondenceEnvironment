export const increaseId = (length) => {
    return length++
}

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
            <div style={{color: "red"}}>
                {touched && (error && <span>{error}</span>)
                }</div>
        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <input {...input} {...props}/>
            <div style={{color: "red"}}>
                {touched && (error && <span>{error}</span>)
                }</div>

        </div>
    )
}