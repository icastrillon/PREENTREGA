//crear clase y luego exportar para hacer uso de esta clase 

export class LoginPage{
    //crear metodos
constructor(){
    this.usuarioInput="#user";
    this.contraseñaInput="#pass";
    this.botonLogin="#submitForm";

}

    escribirUsuario(usuario){
    //interactuar con el input 
    cy.get(this.usuarioInput).type(usuario);  
    };

escribirContraseña(contraseña){
    //interactuar con el input 
    cy.get(this.contraseñaInput).type(contraseña);  
};


clickBotonLogin(){
    //interactuar con el input 
    cy.get(this.botonLogin).click();  
};

};