import { Vehicle } from './vehicle.model';

export class Reserva {

    constructor (
        public id_pressupost: string,
        public vehicle: string,
        public data_inicial: string,
        public data_final: string,
        public _id?: string
    ) { }
}
