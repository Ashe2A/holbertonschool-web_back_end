export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.map(({ id }) => id);
}
