import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { refreshToken } from '../services/auth';

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        const token = await user.getIdToken();
        setToken(token);

        // Refresh token every 30 minutes
        const refreshInterval = setInterval(async () => {
          const newToken = await refreshToken(user);
          setToken(newToken);
        }, 30 * 60 * 1000);

        return () => clearInterval(refreshInterval);
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { token };
}