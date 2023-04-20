import { Form } from './Form';
import UserCard from '../../components/UserCard/UserCard';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const FormPage = () => {
  const formCards = useSelector((state: RootState) => state.formCards);

  return (
    <div>
      <Form />
      <div className="users-container">
        {formCards.usersCards.map((user, idx) => (
          <UserCard key={idx} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
