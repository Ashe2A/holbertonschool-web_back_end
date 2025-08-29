/* eslint-disable import/extensions */
import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;

  try {
    user = await createUser();
  } catch {
  }

  try {
    photo = await uploadPhoto();
  } catch {
  }

  return { photo, user };
}
