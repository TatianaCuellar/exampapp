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

  responseSelected = [];
  resultPuntaje: number;
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
    console.log(this.preguntas);
    this.getExamen();
  }

  addQuestions() {
    for (let i = 0; i < this.test.count; i++) {
      this.test.data.push({});
    }
  }

  nextPage() {

  }

  getExamen() {
    this.firebaseService.getExamens().subscribe(response => {
      this.dataPreguntas = response.map((e: any) => {
        console.log(e.payload.doc.data());
      });
    }, error => {
      console.error(error);
    });
  }

  saveExamen() {
    console.log('jsj');
    this.firebaseService.createExamen(this.data.value);
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

  sumaPuntaje(puntaje) {
    this.responseSelected.push(puntaje);
    this.resultPuntaje = 0;
    for (let resp of this.responseSelected) {
      this.resultPuntaje = this.resultPuntaje + resp.puntaje;
    }
  }
}
