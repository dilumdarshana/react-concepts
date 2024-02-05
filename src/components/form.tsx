import { useId } from 'react';
import useForm from '../hooks/useForm';
import { FormType } from '../@types/form.td';

const Form = () => {
    const [values, handleChange] = useForm<FormType>({
        firstName: '',
        lastName: '',
        email: '',
    });
    const randomId = useId();

    const onSubmit = () => {

    };

    return (
        <div className="app-separator home-wrap">
            <form>
                <label htmlFor={randomId}>First Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                    id={randomId}
                    name="firstName"
                    placeholder="Your name..."
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    id="lname"
                    name="lastName"
                    placeholder="Your last name..."
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    id="email"
                    name="email"
                    placeholder="Your email..."
                />
                <input type="button" onClick={onSubmit} value="Submit" />
            </form>
        </div>
    )
}

export default Form;
