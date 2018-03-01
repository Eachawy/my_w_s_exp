import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
// modals -- for interfaces obj
import { user } from '../models/user'

@Injectable()
export class UsersService {

  userscollection: AngularFirestoreCollection<user>;
  users: Observable<user[]>;

  userDoc: AngularFirestoreDocument<user>;
  AnthUser : any;

  startAt = new Subject();
  endAt = new Subject();

  obj;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();


  constructor(public asf: AngularFirestore) { 
    this.userscollection = this.asf.collection('users');
    //this.userscollection = this.asf.collection('users', ref => ref.orderBy('name','asc')); // asc - desc
    // this.userscollection = this.asf.collection('users', ref => {
    //   return ref.where('usarname', '==', 'Eachawy').where('password', '==', '123')
    // });

    //this.users = this.asf.collection('users').valueChanges();



    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((n) =>{
        this.obj = n;
      })
    })

    this.users = this.asf.collection('users').snapshotChanges().map(change => {
      return change.map(a => {
        const data = a.payload.doc.data() as user;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  firequery (start, end){
    return this.asf.collection('users', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  }


  userObser (){
    this.users.subscribe((users) => {
      debugger;
      this.AnthUser = users;
    });
  }
  getUsers(){
    this.userObser();
    return this.users;
  }
  addUser(userobj: user){
    this.userObser();
    this.userscollection.add(userobj);
  }
  deleteuser(userobj: user){
    this.userObser();
    this.userDoc = this.asf.doc(`users/${userobj.id}`);
    this.userDoc.delete();
  }
  edituser(userobj: user){
    this.userObser();
    this.userDoc = this.asf.doc(`users/${userobj.id}`);
    this.userDoc.update(userobj);
  }
}

