type gender = 'Woman' | 'Man';

export interface IUser {
  name: string;
  birthdate: Date;
  favoriteColor: string;
  isStudent: boolean;
  gender: gender;
  image: File | null;
}
