import { useState } from 'react';
import { IUser } from 'models/user-model';
import { Form } from './Form';
import UserCard from '../../components/UserCard/UserCard';

type UsersCards = {
  usersCards: IUser[];
};

const FormPage = () => {
  const [users, setUsers] = useState<UsersCards>({
    usersCards: [],
  });

  const addUserCard = (newUser: IUser) => {
    setUsers((prevState) => ({ usersCards: [...prevState!.usersCards, newUser] }));
  };

  return (
    <div>
      <Form addUserCard={addUserCard} />
      {users.usersCards.map((user, idx) => (
        <UserCard key={idx} user={user} />
      ))}
    </div>
  );
};

export default FormPage;

//   handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0] || null;
//     this.setState({ selectedFile: file });
//   };

//   handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formData: FormData = {
//       name: this.nameInput.current!.value,
//       birthDate: this.birthdateInput.current!.value,
//       favoriteColor: this.favoriteColorInput.current!.value,
//       isStudent: this.isStudentInput.current!.checked,
//       gender: this.genderInput.current!.value,
//       image: this.imageInput.current!.files?.[0] || null,
//     };
