import { Cifrado } from "@app/cifrados/model/cifrado.interface";
type CifradoAsignado={

    cardinalida:number
    cifrado: Cifrado

}

type Servicio={
    id:string ;
    nombre:string;
    fecha:string;
    descripcion:string ;
    cifrados:Array<Cifrado>


}
export{Servicio}