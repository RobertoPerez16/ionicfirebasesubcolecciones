import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../services/event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  formEvento = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    costo: new FormControl('', [Validators.required])
  });

  constructor(private eventService: EventService, private router: Router ) { }

  ngOnInit() {
  }

  async submit() {
    const nombre = this.formEvento.value.nombre;
    const fecha = this.formEvento.value.fecha;
    const precio = this.formEvento.value.precio;
    const costo = this.formEvento.value.costo;

    await this.eventService.crearEvento(nombre, fecha, precio, costo);
    this.formEvento.reset();
    await this.router.navigateByUrl('/home');
  }
}
