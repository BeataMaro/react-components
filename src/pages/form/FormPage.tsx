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
      <div className="users-container">
        {users.usersCards.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
