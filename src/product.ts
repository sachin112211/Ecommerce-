export interface Product{
    Name : string;
    Price : number;
    Color : string;
    Category : string;
    Description : string;
    Image : string;
    id:number;
    quantity:number;
    Total : number;
}



export interface Order{
     id:number; 
    contact:number;
    address:string;
    userId:number;
   amount:number;
   productId:number[];

}



export interface status{
  
    

}
