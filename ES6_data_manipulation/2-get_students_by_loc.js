export default function getStudentsByLocation(studentList, city) {
  if (!(studentList instanceof Array) || (typeof city !== 'string')) {
    return [];
  }
  return studentList.filter((i) => i.location === city);
}
