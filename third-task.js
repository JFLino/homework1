class Product {
    constructor(name, price, quantity, description){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    static filterByQuery(arr, query){
        let commands = query.split("&");
        for(let command of commands){
            let [field, operation, str] = command.split('-');
    
            if(str){ //это означает, что операция выполняется над строковым полем
                if(operation == "contains"){
                    arr = arr.filter((prod) => prod[field].includes(str));
                }else if(operation == "starts"){
                    arr = arr.filter((prod) => prod[field].startsWith(str));
                }else if(operation == "ends"){
                    arr = arr.filter((prod) => prod[field].endsWith(str));
                }
            }else{ //операция выполняется над числовым полем
                let value = operation.match(/\d+/)[0]; 
    
                if(operation.startsWith("=")){
                    arr = arr.filter((prod) => prod[field] == value);
                }else if(operation.startsWith("<=")){
                    arr = arr.filter((prod) => prod[field] <= value);
                }else if(operation.startsWith(">=")){
                    arr = arr.filter((prod) => prod[field] >= value);
                }else if(operation.startsWith(">")){
                    arr = arr.filter((prod) => prod[field] > value);
                }else if(operation.startsWith("<")){
                    arr = arr.filter((prod) => prod[field] < value);
                }
            }
        }
    
        return arr;
    }
}

let products = [
    new Product("Iphone", 1000, 5, "This is smartphone"),
    new Product("Smart-TV", 500, 10, "Made by Samsung"),
    new Product("Laptop", 800, 20, "Made by Lenovo"),
    new Product("Car", 15000, 2, "Made by Toyota"),
];