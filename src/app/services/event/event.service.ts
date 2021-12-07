import { Injectable } from '@angular/core';
import { AuthService } from '../authservice/auth.service';
import {
  AngularFirestore
} from '@angular/fire/compat/firestore';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public listRefEvent: firebase.firestore.CollectionReference;
  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  crearEvento(nombre, fecha, precio, costo): Promise<DocumentReference> {
    const user: firebase.User = this.authService.getUser();
    this.listRefEvent = firebase.firestore().collection( `userProfile/${user.uid}/eventList`);
    return this.listRefEvent.add({
      nombre,
      fecha,
      precio,
      costo,
      ingresos: costo * -1,
    });
  }

  obtenerEventos(): Promise<firebase.firestore.QuerySnapshot>  {
    const user: firebase.User = this.authService.getUser();
    this.listRefEvent= firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.listRefEvent.get();
  }

  obtenerEvento(id: string): Promise<firebase.firestore.QueryDocumentSnapshot> {
    const user: firebase.User = this.authService.getUser();
    this.listRefEvent= firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.listRefEvent.doc(id).get();
  }
}
