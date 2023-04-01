import { IUser } from 'models/user-model';
import { Component } from 'react';
import './UserCard.css';

export default class UserCard extends Component<IUser> {
  constructor(props: IUser) {
    super(props);
  }

  render() {
    const { name, image, favoriteColor, birthdate, gender, isStudent } = this.props;
    return (
      <div className="userCard" data-testid="userCard">
        <h4>{name}</h4>
        {image && <img src={URL.createObjectURL(image)} alt={name}></img>}
        <p>
          Favorite color: <i>{favoriteColor}</i>
        </p>
        <p>
          Birth date: <i>{birthdate}</i>
        </p>
        <p>
          Gender: <i>{gender}</i>
        </p>
        <p>Student: {isStudent ? <i>YES</i> : <i>NO</i>}</p>
      </div>
    );
  }
}
