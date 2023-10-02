import {  useState } from 'react'

const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const validate = (values) => {
        let validationErrors = {};
        if (!values.name) {
            validationErrors.name = "Name is required"
        }
        if (!values.email) {
            validationErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            validationErrors.email = 'Invalid email format';
        }
        if (!values.password) {
            validationErrors.password = "Password is required"
        }
        return validationErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            onSubmit(values);
        }

    }
    return ({
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    })

}
const MyForm = () => {
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
        {
            name: '',
            email: '',
            password: '',
        },
        (submittedData) => {
            console.log('Submitted data:', submittedData);
            // Perform any submission logic here
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

export default MyForm;