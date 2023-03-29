// type gender = 'Woman' | 'Man';

export interface IUser {
  name: string;
  birthdate: string;
  favoriteColor: string;
  isStudent: boolean;
  gender: string;
  image: File | null;
}
