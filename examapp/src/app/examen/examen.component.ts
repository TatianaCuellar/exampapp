import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  data: FormGroup;
  preguntas = [
    {
      materia: 'Materia ',
      grupo: [
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
        {
          title: 'Pregunta',
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
              puntaje: 0
            }
          ]
        },
      ],
      descripcion: 'Descripción de la materia'
    }
  ];
  buttonSubmit: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
