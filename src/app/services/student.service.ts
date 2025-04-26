import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: any[] = [];

  constructor() { }

  // Add student to the list
  addStudent(student: any) {
    this.students.push(student);
  }

  // Get the list of students
  getStudents() {
    return this.students;
  }

  deleteStudent(studentId: number): boolean {
    const index = this.students.findIndex(student => student.id === studentId);

    if (index !== -1) {
      this.students.splice(index, 1); // Remove the student from the array
      return true; // Return true if the student was successfully deleted
    }

    return false; // Return false if no student was found with the given ID
  }

  updateStudent(studentId: number, updatedData: Partial<any>): boolean {
    const student = this.students.find(student => student.id === studentId);

    if (student) {
      Object.assign(student, updatedData); // Update the student with new data
      return true; // Update successful
    }
    return false; // Student not found
  }

  
}
