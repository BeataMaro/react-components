import { IUser } from 'models/user-model';
import './UserCard.css';

const UserCard = (props: { key: number; user: IUser }) => {
  const { user } = props;
  const file = new File([user.image], user.image[0]);
  const url = URL.createObjectURL(file);

  return (
    <div className="userCard" data-testid="userCard">
      <h4>{user.name}</h4>
      {user.image && <img src={url} alt={user.name}></img>}
      <p>
        Favorite color: <i>{user.favoriteColor}</i>
      </p>
      <p>
        Birth date: <i>{user.birthDate}</i>
      </p>
      <p>
        Gender: <i>{user.gender}</i>
      </p>
      <p>Student: {user.isStudent ? <i>YES</i> : <i>NO</i>}</p>
    </div>
  );
};

export default UserCard;
