export default function getStudentsByLocation(studentList, city) {
  if ((!Array.isArray(studentList)) || (typeof city !== 'string')) {
    return [];
  }
  return studentList.filter((i) => i.location === city);
}
