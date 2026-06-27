import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngressoUscitaResponse } from '../dto/response/IngressoUscitaResponse';
import { environment } from '../environments/environment';
import { IngressoUscitaRequest } from '../dto/request/IngressoUscitaRequest';

@Injectable({
  providedIn: 'root',
})
export class IngressoUscita {

  http = inject(HttpClient);

  getList(): Observable<IngressoUscitaResponse[]> {
    return this.http.get<IngressoUscitaResponse[]>(`${environment.apiUrl}/api/ingresso/uscita/list`);
  }

  update(request: IngressoUscitaRequest): Observable<IngressoUscitaResponse[]> {
    return this.http.put<IngressoUscitaResponse[]>(`${environment.apiUrl}/api/ingresso/uscita/update`, request);
  }

}
