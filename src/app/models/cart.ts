export class Car{
    _id?: number;
    name: string;
    brand: string;
    model: string;
    category:string;
    characteristics: string;
    motor: string;
    price:string;
    importFile: File;

    constructor(name:string, brand:string, model:string, category:string, characteristics:string, motor:string, price:string, importFile:File){
        this.name=name;
        this.brand=brand;
        this.model=model;
        this.category=category;
        this.characteristics=characteristics;
        this.motor=motor;
        this.price=price;
        this.importFile=importFile;

    }
}