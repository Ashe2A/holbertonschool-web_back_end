/* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName !== 'string') {
    throw new Error('First name should be a string.');
  }

  if (typeof lastName !== 'string') {
    throw new Error('Last name should be a string.');
  }

  if (typeof fileName !== 'string') {
    throw new Error('File name should be a string.');
  }

  const photoPromise = uploadPhoto(fileName);
  const userPromise = signUpUser(firstName, lastName);

  return Promise.allSettled([photoPromise, userPromise]).then((res) => res.map((i) => {
    if (i.status === 'fulfilled') {
      return ({
        status: i.status,
        value: i.value,
      });
    }
    return ({
      status: i.status,
      value: i.reason.toString(),
    });
  }));
}
