import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  codigo: string;
  responseSelected = [];
  resultPuntaje: number = 0;
  isResult = false;
  data: FormGroup;
  preguntas = [
    {
      materia: 'Materia ',
      descripcion: 'Descripción de la materia',
      grupo: [
        {
          title: 'Pregunta',
          asset: '',
          respuestas: [
            {
              id: 0,
              title: 'A. ',
              status: '',
              puntaje: 0
            },
            {
              id: 1,
              title: 'B. ',
              status: '',
              puntaje: 1
            },
            {
              id: 2,
              title: 'C. ',
              status: '',
              puntaje: 0
            },
            {
              id: 3,
              title: 'D. ',
              status: '',
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
          asset: '',
          respuestas: [
            {
              id: 0,
              title: 'A. ',
              status: '',
              puntaje: 1
            },
            {
              id: 1,
              title: 'B. ',
              status: '',
              puntaje: 0
            },
            {
              id: 2,
              title: 'C. ',
              status: '',
              puntaje: 0
            },
            {
              id: 3,
              title: 'D. ',
              status: '',
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
          asset: '',
          respuestas: [
            {
              id: 0,
              title: 'A. ',
              status: '',
              puntaje: 0
            },
            {
              id: 1,
              title: 'B. ',
              status: '',
              puntaje: 0
            },
            {
              id: 2,
              title: 'C. ',
              status: '',
              puntaje: 0
            },
            {
              id: 3,
              title: 'D. ',
              status: '',
              puntaje: 1
            }
          ]
        },
        {
          title: 'Pregunta',
          asset: 'https://fakeimg.pl/300x300',
          respuestas: [
            {
              id: 0,
              title: 'A. ',
              status: '',
              puntaje: 0
            },
            {
              id: 1,
              title: 'B. ',
              status: '',
              puntaje: 0
            },
            {
              id: 2,
              title: 'C. ',
              status: '',
              puntaje: 3
            },
            {
              id: 3,
              title: 'D. ',
              status: '',
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
          asset: '',
          respuestas: [
            {
              id: 0,
              title: 'A. ',
              status: '',
              puntaje: 1
            },
            {
              id: 1,
              title: 'B. ',
              status: '',
              puntaje: 0
            },
            {
              id: 2,
              title: 'C. ',
              status: '',
              puntaje: 0
            },
            {
              id: 3,
              title: 'D. ',
              status: '',
              puntaje: 0
            }
          ]
        }
      ]
    }
  ];
  buttonSubmit: boolean;

  dataPreguntas;
  test = {
    count: 50,
    data: []
  };

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.validateForm();
  }

  ngOnInit() {
  }

  addQuestions() {
    for (let i = 0; i < this.test.count; i++) {
      this.test.data.push({});
    }
  }

  saveExamen() {
    this.firebaseService.createExamen(this.data.value).then(resp => {
      this.codigo = resp.id;
    });
    //this.router.navigate(['/']);
    this.data.markAllAsTouched();
  }

  saveResponse() {
    this.data.patchValue({
      resultado: this.resultPuntaje
    });
    console.log(this.resultPuntaje);
    this.isResult = this.resultPuntaje >= 5 ? false : true;
  }

  validateForm() {
    this.data = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.email],
      resultado: ['', Validators.required]
    });
  }

  sumaPuntaje(response, question) {
    if (this.responseSelected.find(x => x.pregunta === question)) {
      this.responseSelected.map(respon => {
        respon.respuesta = response;
      });
    } else {
      this.responseSelected.push({
        pregunta: question,
        respuesta: response
      });
    }
    for (let resp of this.responseSelected) {
      this.resultPuntaje = this.resultPuntaje + resp.respuesta.puntaje;
    }
    console.log(this.resultPuntaje);
  }
}
