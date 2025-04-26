import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class StudentFormComponent {
  studentForm: FormGroup;
  displayError: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService
  ) {
    // Initialize the form with validation rules
    this.studentForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email validation
      gender: ['', Validators.required], // Gender is required
      grade: ['', Validators.required], // Grade is required
      isEnrolled: [false], // Checkbox doesn't need validation
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      // If the form is valid, add the student and navigate to the table page
      this.studentService.addStudent(this.studentForm.value);
      this.router.navigate(['/student-table']);
    } else {
      // If the form is invalid, display an error message
      this.displayError = true;
      this.errorMessage = 'Please fill out all fields correctly before submitting the form.';
    }
  }
}