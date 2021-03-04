import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  isBusqueda = true;
  dataResultado: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
  ) {
  }

  ngOnInit() {
    this.getExamenForId('tatianacuellar9923@gmail.com');
  }

  getExamenForId(email) {
    this.firebaseService.getExamenForId(email).subscribe(data => {
      console.log(data);
    });
  }

  buscar() {
    this.isBusqueda = false;
  }

}
