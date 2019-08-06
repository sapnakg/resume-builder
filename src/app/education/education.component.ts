import { Component  , ViewChild} from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'] 
        
})
export class EducationComponent  {
@ViewChild('f', { static: false} ) eduDetailsForm: NgForm;

  // schoolname = new FormControl('');
  // fromYear = new FormControl('');
  // toYear = new FormControl('');
  // percentage = new FormControl('');
  // colname = new FormControl('');
  // fromYear2 = new FormControl('');
  // toYear2 = new FormControl('');
  // percentage2 = new FormControl('');


// onSubmit(form:NgForm){
//     console.log(form);

// }
onSubmit(){
    console.log(this.eduDetailsForm);

}
}
