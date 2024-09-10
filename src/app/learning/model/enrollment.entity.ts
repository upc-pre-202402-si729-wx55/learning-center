export class Enrollment {
  enrollmentId: number;
  studentRecordId: string;
  courseId: number;
  status: string;

  constructor(enrollmentId: number = 0,
              studentRecordId: string = '',
              courseId: number = 0,
              status: string = '') {
    this.enrollmentId = enrollmentId;
    this.studentRecordId = studentRecordId;
    this.courseId = courseId;
    this.status = status;
  }
}
