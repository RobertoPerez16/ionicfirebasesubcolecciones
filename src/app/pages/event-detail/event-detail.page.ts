import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  id = '';
  evento: any = {};
  constructor(private eventService: EventService, private activateRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    const evento = await this.eventService.obtenerEvento(this.id);
    this.evento = { ...evento.data(), id: evento.id };
  }

}
