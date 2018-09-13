import { vinicola } from './vinicola';
import { enologo } from './enologo';
import { bodega } from './bodega';
export interface barrica{
    anada:number;
    bodega: bodega;    
    bodega_id:number;
    costo_barrica:number;
    costo_prod:number;
    costo_uva:number;
    enologo:enologo;
    enologo_id:number;
    fecha_embotellado:string;
    fecha_envio:string;
    fecha_inicio:string;
    id:number;
    meses_barrica:number;
    meses_estabilizacion:number;
    precio_publico: number;
    precio_venta: number;
    tipo_bar:string;
    tostado:string;
    utilidad:number;
    uva:string;
    vinicola:vinicola;
    vinicola_id:number;
}