import { Routes } from '@angular/router';
import { StudentFormComponent } from '../app/components/student-form/student-form.component';
import { StudentTableComponent } from '../app/components/student-table/student-table.component';



export const routes: Routes = [
  { path: '', redirectTo: 'student-form', pathMatch: 'full' },
  { path: 'student-form', component: StudentFormComponent },
  { path: 'student-table', component: StudentTableComponent }
];