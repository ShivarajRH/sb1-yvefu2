import { auth } from '../config/firebase';
import { User } from 'firebase/auth';

export const getAuthToken = async (): Promise<string | null> => {
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken();
};

export const refreshToken = async (user: User) => {
  return await user.getIdToken(true);
};