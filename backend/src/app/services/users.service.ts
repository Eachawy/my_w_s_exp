import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// modals -- for interfaces obj
import { user } from '../models/user'

@Injectable()
export class UsersService {

  userscollection: AngularFirestoreCollection<user>;
  users: Observable<user[]>;
  userDoc: AngularFirestoreDocument<user>;


  constructor(public asf: AngularFirestore) { 
    this.userscollection = this.asf.collection('users');
    //this.userscollection = this.asf.collection('users', ref => ref.orderBy('name','asc')); // asc
    //this.users = this.asf.collection('users').valueChanges();
    this.users = this.asf.collection('users').snapshotChanges().map(change => {
      return change.map(a => {
        const data = a.payload.doc.data() as user;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getUsers(){
    return this.users;
  }
  addUser(userobj: user){
    this.userscollection.add(userobj);
  }
  deleteuser(userobj: user){
    this.userDoc = this.asf.doc(`users/${userobj.id}`);
    this.userDoc.delete();
  }
  edituser(userobj: user){
    this.userDoc = this.asf.doc(`users/${userobj.id}`);
    this.userDoc.update(userobj);
  }
}

