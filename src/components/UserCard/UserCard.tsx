import { IUser } from 'models/user-model';
import './UserCard.css';

const UserCard = (props: { key: number; user: IUser }) => {
  // const { name, image, favoriteColor, birthDate, gender, isStudent } = props;
  const { user } = props;

  return (
    <div className="userCard" data-testid="userCard">
      <h4>{user.name}</h4>
      {/* {image && <img src={URL.createObjectURL(image)} alt={name}></img>} */}
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
