// type gender = 'Woman' | 'Man';

export interface IUser {
  name: string;
  birthDate: string;
  favoriteColor: string;
  isStudent: boolean;
  gender: string;
  image: File | null;
}
