export class ListProduct{
    //crear metodos
        constructor(){
        this.cerrarModal="[id='closeModal']";
        this.listadoCompras="[id='goShoppingCart']"
    };

    clickOnproducto(producto){
        cy.get(`[value="${producto}"]`).click();
    };
  

    clickOnCerrarModal(){
        cy.get(this.cerrarModal).click();
    };

    
    clickOnListadoCompras(){
        cy.get(this.listadoCompras).click();
    };

   // SeleccionarProductos(){
    //    this.clickOnproducto1();
      //  this.clickOnCerrarModal();
       // this.clickOnproducto2();
       // this.clickOnCerrarModal();
       // this.clickOnListadoCompras();
    //}

};