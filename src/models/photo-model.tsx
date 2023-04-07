export interface IPhoto {
  id: string;
  //   width: number;
  //   height: number;
  urls: { full: string; regular: string; raw: string; small: string };
  //   color: string | null;
  //   description: string;
  user: {
    username: string;
    name: string;
  };
  //   errors: string;
}
