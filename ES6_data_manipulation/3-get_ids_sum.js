export default function getStudentIdsSum(studentList) {
  let res = 0;
  if (Array.isArray(studentList)) {
    res = studentList.reduce((res, i) => res + i.id, res);
  }
  return res;
}
