export class Tarjeta{
    constructor(
        public id: number,
        public tipo : string,
        public numero: string,
        public nombre:string,
        public verifica:string,
        public expira: string,
        public pais: string,
        public calle: string,
        public numext: string,
        public numint: string,
        public colonia: string,
        public cp: string,
        public estado: string,
        public municipio: string,
    ){}
}