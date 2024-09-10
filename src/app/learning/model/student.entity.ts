export class Student {
  acmeStudentId: string;
  profileId: number;
  totalCompletedCourses: number;
  totalTutorials: number;

  constructor(acmeStudentId: string = '',
              profileId: number = 0,
              totalCompletedCourses: number = 0,
              totalTutorials: number = 0) {
    this.acmeStudentId = acmeStudentId;
    this.profileId = profileId;
    this.totalCompletedCourses = totalCompletedCourses;
    this.totalTutorials = totalTutorials;
  }
}
