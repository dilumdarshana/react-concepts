import { useContext, useEffect, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { FormType } from '../@types/form';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

// create zod form schema
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
});

// create type using zod form schema
type FormType = z.infer<typeof formSchema>;

const ReactHookForm: React.FC = () => {
  const randomId = useId();
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType; 
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setPageTitle('React Hook Form');
    setPageDescription(`
      react-hook-form: easy way to handle forms and form submissions
      zod: schema validation rules
    `);
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('data', data)
  }

  return (
    <div className="component-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={randomId}>First Name</label>
        <input
          {
            ...register('firstName')
          }
          type="text"
          placeholder="Your first name..."
        />
        {errors.firstName && <div className="error">{errors.firstName.message}</div>}

        <label htmlFor="lname">Last Name</label>
        <input
         {
            ...register('lastName')
          }
          type="text"
          placeholder="Your last name..."
        />
        {errors.lastName && <div className="error">{errors.lastName.message}</div>}
        <label htmlFor="email">Email</label>
        <input
          {
            ...register('email')
          }
          type="text"
          placeholder="Your email..."
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
        <input type="submit" value={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting}  />
      </form>
    </div>
  );
};

export default ReactHookForm;
