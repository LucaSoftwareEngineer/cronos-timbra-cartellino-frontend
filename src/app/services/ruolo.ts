import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RuoloResponse } from '../dto/response/RuoloResponse';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Ruolo {

  http = inject(HttpClient);

  list(): Observable<RuoloResponse[]> {
    return this.http.get<RuoloResponse[]>(`${environment.apiUrl}/api/ruolo/list`);
  }

}
