/* eslint-disable import/extensions */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;

  try {
    photo = await uploadPhoto();
  } catch {
  }

  try {
    user = await signUpUser();
  } catch {
  }

  return { photo, user };
}
