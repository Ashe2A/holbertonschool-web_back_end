/* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName !== 'string') {
    throw new TypeError('First name should be a string.');
  }

  if (typeof lastName !== 'string') {
    throw new TypeError('Last name should be a string.');
  }

  if (typeof fileName !== 'string') {
    throw new TypeError('File name should be a string.');
  }

  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((res) => res.map((i) => {
    if (i.status === 'fulfilled') {
      return {
        status: i.status,
        value: i.value,
      };
    }
    return {
      status: i.status,
      value: i.reason.toString(),
    };
  }));
}
