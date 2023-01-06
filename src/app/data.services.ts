import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      employees: [
        {
          id: 1,
          name: 'Geetha',
          position: 'Software Engineer',
          salary: '$140k'
        },
        {
          id: 2,
          name: 'Harshu',
          position: 'Trainee',
          salary: '$80k'
        },
        {
          id: 3,
          name: 'Vineela',
          position: 'Manager',
          salary: '$100k'
        }
      ]
    };
  }
}