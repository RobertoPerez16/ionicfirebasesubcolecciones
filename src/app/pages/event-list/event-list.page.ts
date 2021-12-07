import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  listaEventos = [];

  constructor(private eventService: EventService) {}

  async ngOnInit() {
    const eventos = await this.eventService.obtenerEventos();
    eventos.forEach(doc => {
      this.listaEventos.push({
        id: doc.id,
        nombre: doc.data().nombre,
        fecha: doc.data().fecha,
        ingresos: doc.data().ingresos,
        precio: doc.data().precio,
        costo: doc.data().costo
      });
    });
  }
}
