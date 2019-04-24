export class User {
     city: string ; 
     email: string ; 
     firstName: string;
     governate: string;
     id:number;
     image: string;
     is_captain ? : boolean;
     is_client ? : boolean;
     lastName: string;
     packages: [{}] ;
     phone_number: string;
     username: string
    constructor(UserRespond : any){
        this.id = UserRespond.id ;  
        this.firstName = UserRespond.first_name ;
        this.email = UserRespond.email ;
        this.governate = UserRespond.governate ;
        this.city = UserRespond.city ;
        this.lastName = UserRespond.last_name ;
        this.image = UserRespond.image ;
        this.phone_number = UserRespond.phone_number ;
        this.username = UserRespond.city ; 
        this.packages = UserRespond.packages ;  
         
      
    


    }
}