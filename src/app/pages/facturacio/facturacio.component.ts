import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { Pressupost } from '../../models/pressupost.model';
import { PressupostService, PersonaService } from '../../services/service.index';
import swal from 'sweetalert2';



@Component({
  selector: 'app-facturacio',
  templateUrl: './facturacio.component.html'
})
export class FacturacioComponent implements OnInit {


  clients: Persona[] = [];
  pressupostos: Pressupost[] = [];
  constructor(
    public _pressupostosService: PressupostService,
    public _personesService: PersonaService
  ) { }

  ngOnInit() {
    this.carregarPressupostos();
  }

  carregarClients() {
    this._personesService.cargarPersones()
        .subscribe( persones => this.clients = persones);
  }

  carregarPressupostos() {
    this._pressupostosService.carregarPressupostos()
        .subscribe( pressupostos => this.pressupostos = pressupostos);
  }

  buscarClient( termino: string ) {

    if ( termino.length <= 0 ) {
      this.carregarClients();
      return;
    }
    this._personesService.buscarPersones( termino )
      .subscribe( persones => this.clients = persones);

  }

  buscarPressupost( termino: string ) {

    console.log('buscant pressupost!' + termino);
    if ( termino.length <= 0 ) {
      this.carregarPressupostos();
      return;
    }
    this._pressupostosService.buscarPressupostos( termino )
      .subscribe( pressupostos => this.pressupostos = pressupostos);

  }

  borrarPressupost (termino: string) {
    swal({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      type: 'warning',
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        this._pressupostosService.borrarPressupost(termino)
      .subscribe( pressupost => {
        this.carregarPressupostos();
        console.log(pressupost);
      });
      }
    });

  }

}
