export interface Analista {
    id?: string;
    nombres:string;
    apellidos:string;
    correo?:string;
    telefono?:string;
    cliente:string;
    proyecto:string;
    estado?:boolean;
    create_at?: string;
    update_at?:string;
}