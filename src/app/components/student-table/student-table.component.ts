import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-table',
  standalone: true,
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class StudentTableComponent implements OnInit {
  students: any[] = [];
  displayedColumns: string[] = ['name', 'gender', 'grade', 'actions'];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    // Get the list of students from the shared service
    this.students = this.studentService.getStudents();
  }

  editStudent(student: any) {
    const updatedName = prompt('Enter the new name:', student.name);
    const updatedGrade = prompt('Enter the new grade:', student.grade);

    if (updatedName && updatedGrade) {
      this.studentService.updateStudent(student.id, {
        name: updatedName,
        grade: updatedGrade
      });
      this.students = [...this.students]; // Refresh the table by creating a new reference
    }
  }

  deleteStudent(student: any) {
    if (confirm(`Are you sure you want to delete ${student.name}?`)) {
      this.studentService.deleteStudent(student.id);
      this.students = [...this.students]; // Refresh the table by creating a new reference
    }
  }

    goToStudentForm() {
    // Navigate to the StudentFormComponent
    this.router.navigate(['/student-form']);
  }

}