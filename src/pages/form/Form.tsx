import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import './Form.css';
import { IUser } from 'models/user-model';

export const Form = (props: { addUserCard: (user: IUser) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IUser>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      birthDate: undefined,
      favoriteColor: 'blue',
      gender: undefined,
      image: '',
    },
  });

  const [confirmOpen, setConfirmOpen] = useState<boolean>(true);

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    setConfirmOpen(true);
    const { name, birthDate, favoriteColor, isStudent, gender, image } = data;
    const card: IUser = await {
      name,
      birthDate,
      favoriteColor,
      isStudent,
      gender,
      image: image[0],
    };
    props.addUserCard(card);
    confirmSending();
    reset();
  };

  const onError = () => console.log('wrong');

  const confirmSending = () => {
    setTimeout(() => {
      setConfirmOpen(false);
    }, 2500);
  };

  return (
    <div className="form-container">
      <form name="registerForm" action="POST" onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'Name should start with a capital letter',
            },
            minLength: { value: 4, message: 'The name needs to be min length of 4.' },
            maxLength: { value: 12, message: 'The name must not be longer than 12 letters.' },
          })}
        />
        <p className="errorMessage">{errors.name?.message}</p>
        <fieldset>
          <legend>Birth Date</legend>

          <input type="date" {...register('birthDate', { required: 'Birth date is required.' })} />
          <p className="errorMessage">{errors.birthDate?.message}</p>
        </fieldset>
        <fieldset>
          <legend>I am a student</legend>
          <input type="checkbox" {...register('isStudent')}></input>
        </fieldset>
        <fieldset>
          <legend>Your favorite color</legend>
          <select {...register('favoriteColor', { required: 'Choose your favorite color' })}>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
          </select>
          <p className="errorMessage">{errors.favoriteColor?.message}</p>
        </fieldset>

        <fieldset>
          <legend>Gender</legend>
          <p className="errorMessage">{errors.gender?.message}</p>

          <input
            type="radio"
            id="gender-woman"
            value="woman"
            {...register('gender', { required: 'Choose gender' })}
          />
          <label htmlFor="gender-woman">Woman</label>
          <br />

          <input
            type="radio"
            id="gender-man"
            value="man"
            {...register('gender', { required: 'Choose gender' })}
          />
          <label htmlFor="gender-man">Man</label>
          <br />
        </fieldset>
        <input type="file" {...register('image', { required: 'Image is required' })}></input>
        <p className="errorMessage">{errors.image?.message}</p>

        <input type="submit" value="Register" />
      </form>
      {isSubmitSuccessful ? (
        <div className={confirmOpen ? 'submit-confirmation-open' : 'submit-confirmation-close'}>
          Form has been sent successfully!
        </div>
      ) : null}
    </div>
  );
};
