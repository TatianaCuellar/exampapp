import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  isCertificated: boolean;
  isBusqueda = true;
  isProblem = false;
  codResultado = new FormControl('', [Validators.required, Validators.minLength(20)]);
  dataResults;

  constructor(
    private firebaseService: FirebaseService,
  ) {
  }

  ngOnInit() {
  }


  buscar() {
    const notaMinima = 4;
    if (this.codResultado.valid) {
      this.firebaseService.getExamenForId(this.codResultado.value).subscribe(data => {
        if (data !== null) {
          this.dataResults = data;
          this.isCertificated = this.dataResults.resultado >= notaMinima;
          this.isBusqueda = false;
        } else {
          this.isProblem = true;
        }

      });
    } else {
      this.codResultado.markAllAsTouched();
    }
  }

}
