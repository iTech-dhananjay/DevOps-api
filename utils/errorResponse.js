class ErrorResponse extends Error{
    constructor(message,statusCode){
        //calling constructor through super class
        super(message);
        this.statusCode= statusCode;
    }
}


module.exports =ErrorResponse;