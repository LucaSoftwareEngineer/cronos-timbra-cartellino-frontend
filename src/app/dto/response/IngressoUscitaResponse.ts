import { DipendenteResponse } from "./DipendenteResponse";

export interface IngressoUscitaResponse {
    id: string;
    dataIngresso: string;
    dataUscita: string;
    dipendente: DipendenteResponse;
}