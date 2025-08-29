/* eslint-disable import/extensions */
import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser()

  return Promise.all([photoPromise, userPromise]).then(() => {
    console.log(`${photoPromise.body} ${userPromise.firstName} ${userPromise.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
