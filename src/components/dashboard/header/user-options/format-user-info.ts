import { AuthRes } from 'src/components/common/@types/auth-res.interface';

const initialData = { name: 'unknown', email: 'user@domain.com' };

export const formatUserInfo = (user: AuthRes | undefined) => {
  const { name, email } = user || initialData;

  if (name && name !== 'unknown') {
    const secondLetter = /\s[a-z]/i.exec(name);
    const firstLetter = name[0];
    const letter = secondLetter ? `${firstLetter}${secondLetter[0][1]}` : firstLetter;
    return { name, letter };
  } else {
    const name = email.split('@')[0];
    const letter = name[0].toUpperCase();

    return { name, letter };
  }
};
