/* eslint-disable no-undef */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!(studentList instanceof Array) || typeof city !== 'string') {
    return [];
  }
  return studentList.filter((i) => i.location === city).map((i) => {
    let newGrade = 'N/A';
    newGrades.forEach((j) => {
      if (j.studentId === i.id) {
        newGrade = j.grade;
      }
    });
    return { ...i, grade: newGrade };
  });
}
