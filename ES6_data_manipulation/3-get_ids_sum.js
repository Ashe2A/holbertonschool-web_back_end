export default function getStudentIdsSum(studentList) {
  let res = 0;
  if (!(studentList instanceof Array)) {
    res = studentList.reduce((res, i) => res + i.id, res);
  }
  return res;
}
