import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  form: FormGroup | null = null;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      fullName:{
        name: ['', [Validators.required, Validators.maxLength(10)]],
        lastName:['', [Validators.required, Validators.maxLength(10)]]
      }
    })
  }

}
