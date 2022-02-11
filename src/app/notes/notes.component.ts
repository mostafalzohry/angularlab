import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { notallowedName } from './username-valid';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  products =['product', 'product', 'product', 'product']
  ngOnInit(): void {
  }
  notesForm= this.fb.group({
    userName:['',[Validators.required,Validators.pattern,notallowedName]],
    discount:[0,],
    subscribe:[false],
  })
  get userName(){
    return this.notesForm.get('userName')
  }
  get discount(){
    return this.notesForm.get('discount')
  }

  Discount(){
    this.notesForm.get('subscribe')?.valueChanges.subscribe(checked=>{
      if(checked){
        this.discount?.setValidators(Validators.required)
      }else{
        this.discount?.clearValidators()
      }
      this.discount?.updateValueAndValidity()
    })
  }
}
