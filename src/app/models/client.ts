export class Client{
    _id?: number;
    name: string;
    password:string;
    contact: boolean;
    email: string;
    phoneNumber: number;


    constructor(name: string, password:string, contact: boolean, email: string, phoneNumber: number){
        this.name  = name ;
        this.password  = password ;
        this.contact  = contact ;
        this.email = email ;
        this.phoneNumber = phoneNumber ;         
    }
}