import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateUserMutation } from '@/services/userApi';
import { AppDispatch } from '@/store';
import { userUpdated } from './usersSlice';

interface UserFormPropTypes {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  open: boolean;
  action: 'add' | 'edit';
  onOpenChange: (open: boolean) => void;
}

// form schema
const formSchema = z.object({
  name: z.string().min(2, 'Name is required').max(50),
  email: z.string().email('Enter a valid email address'),
});

// form type
type FormType = z.infer<typeof formSchema>;

// user form component
const UserForm: React.FC<UserFormPropTypes> = ({ user, open, onOpenChange, action }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormType>({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(formSchema), // this is mandatory. Validation not working without this
  });
  const [ createUser, { isLoading: createUserLoading }] = useCreateUserMutation();
  const dispath: AppDispatch = useDispatch();

  useEffect(() => {
    if (open) {
      dispath(userUpdated(false));
    }
  }, [open]);

  // control dialog modal
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      console.log('model closing');
    }
    onOpenChange(newOpen);
  };

  // submit form
  const handleOnSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      await createUser(data);
      dispath(userUpdated(true));
      reset();
      handleOpenChange(false); // close the dialog after successful submission
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">User Form</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="max-w-md mt-2 bt-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium" htmlFor="name">Name</label>
              <input
                {...register('name')}
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring focus:ring-blue-300"
              />
              { errors.name && <div className="text-red-500 font-sm">{errors.name.message}</div>}
            </div>
            <div>
              <label className="block font-medium" htmlFor="email">Email</label>
              <input
                {...register('email')}
                type="text"
                placeholder="Your email address"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring focus:ring-blue-300"
              />
                { errors.email && <div className="text-red-500 font-sm">{errors.email.message}</div>}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={isSubmitting}
              value={isSubmitting || createUserLoading ? 'Submitting...' : 'Submit'}
            >
              Submit
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UserForm;
