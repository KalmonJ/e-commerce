export type User = {
  id: number;
  name: string;
  username: string;
  image: string | null;
  session: Session | null;
  email: string;
};

type Session = {
  accessToken: string;
  userId: number;
};
