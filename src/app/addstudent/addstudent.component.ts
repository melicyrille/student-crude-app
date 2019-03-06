import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
//import { from } from 'rxjs';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  this.getAllstudents();
  }
addStudent(form){
  const student : any = {
    name : form.fullName,
    age : form.age , 
    level : form.level,
    contact : form.contact

  }
  this.db.collection('students').add(student)
  .then(() => console.log('Successful created') )
  .catch( (error) => console.log('Error: ',error));

 
}
getAllstudents(){
  this.db.collection('students').doc('1').ref.get().then(function(doc) {
    
       
    } )
}
}
