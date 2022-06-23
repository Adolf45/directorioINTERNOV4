import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }

  getEmployee(){

    return this.firestore.collection("employees",ref => ref.orderBy('nombre', 'asc')).snapshotChanges();
   }
   getProyect(){
    return this.firestore.collection("proyectos").snapshotChanges();
  }

  getResponsable(){
    return this.firestore.collection("responsables").snapshotChanges();
  }
   
   getEmployeeId(id:number){
     
   }
   
   createEmployee(employee:any){
   return this.firestore.collection("employees").add(employee);
   }

   createResponsable(responsable_directo:any){
    return this.firestore.collection("responsables").add(responsable_directo);
   }

   createProyecto(proyect:any){
    return this.firestore.collection("proyectos").add(proyect);
   }
   updateEmployee(id:any, employee:any){
     return this.firestore.collection("employees").doc(id).update(employee)
   }
   
   deleteEmployee(id:any){
     return this.firestore.collection("employees").doc(id).delete();
   }
   
}
