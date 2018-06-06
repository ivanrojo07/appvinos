import { Productores } from "./productores";

export class Marca {
    constructor(
        public id: number,
        public vinicola_id: number,
        public nombre: string,
        public descripcion: string,
        public vinicola: Productores,
    ) {
        
    }
}