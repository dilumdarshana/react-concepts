import { useContext, useEffect, useId } from 'react';
import useForm from '../hooks/useForm';
import { FormType } from '../@types/form';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const Form = () => {
  const randomId = useId();
  const { setPageTitle } = useContext(SiteDataContext) as SiteDataContextType; 
  const [values, handleChange] = useForm<FormType>({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    setPageTitle('Form');
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('values', values)
  };

  return (
    <div className="component-container">
      <form onSubmit={onSubmit}>
        <label htmlFor={randomId}>First Name</label>
        <input
          type="text"
          onChange={handleChange}
          value={values.firstName || ''}
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
