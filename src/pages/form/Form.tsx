import { ChangeEvent, useState } from 'react';
import './Form.css';
import UserCard from '../../components/UserCard/UserCard';
import { FormData } from 'models/form-data-model';
import { IUser } from 'models/user-model';

export const FormPage = () => {
  const initialData: FormData = {
    name: '',
    birthdate: '',
    favoriteColor: '',
    isStudent: '',
    gender: 'Woman',
    image: null,
  };

  const [formData, setFormData] = useState<FormData>(initialData);
  const [users, setUsers] = useState([] as IUser[]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setUsers([...users]);
    console.log(formData);
  };

  return (
    <div>
      <form className="register-form" action="POST" name="register-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        ></input>
        <label htmlFor="favColor">Favorite color</label>
        <select
          name="favoriteColor"
          id="favColor"
          value={formData.favoriteColor}
          onChange={handleChange}
        >
          <option>---</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
        </select>
        <label htmlFor="student">I am a student.</label>
        <input type="checkbox" name="student" id="student" onChange={handleChange}></input>

        <fieldset>
          <legend>Gender</legend>

          <input
            type="radio"
            id="gender-woman"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <label htmlFor="gender-woman">Woman</label>
          <br />

          <input
            type="radio"
            id="gender-man"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <label htmlFor="gender-man">Man</label>
          <br />
        </fieldset>
        <input type="file" name="image" onChange={handleChange}></input>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <div className="users-container">
        {users.map(({ name, image, favoriteColor, isStudent, birthdate, gender }, idx) => (
          <UserCard
            key={idx}
            name={name}
            image={image}
            favoriteColor={favoriteColor}
            isStudent={isStudent}
            birthdate={birthdate}
            gender={gender}
          />
        ))}
      </div>
    </div>
  );
};

// type Inputs = {
//   name: string;
//   birthDate: string;
//   favoriteColor: string;
//   gender: string;
//   image: File | null;
//   exampleRequired: string;
// };

// export const FormPage = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
// const formData: FormData = {
//   name: data,
//   birthdate: this.birthdateInput.current!.value,
//   favoriteColor: this.favoriteColorInput.current!.value,
//   isStudent: this.isStudentInput.current!.checked,
//   gender: this.genderInput.current!.value,
//   image: this.imageInput.current!.files?.[0] || null,
// };
// // Add form data to state
// const updatedFormData = [...this.state.formData, formData];

//   console.log(watch('name')); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register('name')} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register('exampleRequired', { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span className="errorMessage">This field is required</span>}

//       <fieldset>
//         <legend>Choose your gender</legend>

//         <input type="radio" id="gender-woman" name="gender" value="Woman" />
//         <label htmlFor="gender-woman">Woman</label>
//         <br />

//         <input type="radio" id="gender-man" name="gender" value="Man" />
//         <label htmlFor="gender-man">Man</label>
//         <br />
//       </fieldset>

//       <input type="submit" value="Register" />
//     </form>
//   );
// };

// export const Form = () => {
//   return (
//     <>
//       <form
//         className="register-form"
//         action="POST"
//         name="register-form"
//         ref={this.registerForm}
//         onSubmit={(e) => this.handleSubmit(e)}
//       >
//         <input type="text" name="name" ref={this.nameInput} required></input>
//         <input type="date" name="birthdate" ref={this.birthdateInput} required></input>
//         <label htmlFor="favColor">Favorite color</label>
//         <select name="favColor" ref={this.favoriteColorInput} id="favColor" required>
//           <option>---</option>
//           <option value="blue">blue</option>
//           <option value="green">green</option>
//           <option value="yellow">yellow</option>
//         </select>
//         <label htmlFor="student">I am a student.</label>
//         <input type="checkbox" name="student" ref={this.isStudentInput} id="student"></input>
//         <label htmlFor="woman">Woman</label>
//         <input
//           id="woman"
//           type="radio"
//           name="gender"
//           ref={this.genderInput}
//           value="Woman"
//           defaultChecked
//         ></input>
//         <label htmlFor="man">Man</label>
//         <input id="man" type="radio" name="gender" ref={this.genderInput} value="Man"></input>
//         <input type="file" ref={this.imageInput} onChange={this.handleFileChange}></input>
//         <button type="submit" value="submit"></button>
//       </form>
//       <div className="users-container">
//         {this.state.users.map(
//           ({ name, image, favoriteColor, isStudent, birthdate, gender }, idx) => (
//             <UserCard
//               key={idx}
//               name={name}
//               image={image}
//               favoriteColor={favoriteColor}
//               isStudent={isStudent}
//               birthdate={birthdate}
//               gender={gender}
//             />
//           )
//         )}
//       </div>
//     </>
//   );
// };
