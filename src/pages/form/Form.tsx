import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Form.css';
// import UserCard from '../../components/UserCard/UserCard';
import { IUser } from 'models/user-model';

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const [users, setUsers] = useState<IUser[]>([]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setUsers((prev) => [...prev, data]);
    console.log(users);
    reset();
  });

  return (
    <div className="form-container">
      <form name="registerForm" action="POST" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'Name is required',
            // /^[A-Z]/
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
      {/* <div className="users-container">
        {users.map(({ name, image, favoriteColor, isStudent, birthDate, gender }, idx) => (
          <UserCard
            key={idx}
            name={name}
            image={image}
            favoriteColor={favoriteColor}
            isStudent={isStudent}
            birthDate={birthDate}
            gender={gender}
          />
        ))}
      </div> */}
    </div>
  );
};
