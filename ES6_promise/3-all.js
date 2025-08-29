/* eslint-disable import/extensions */
import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser()

  Promise.all([photoPromise, userPromise]).then(([photo, user]) => {
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    return new Error('Signup system offline');
  });
}
