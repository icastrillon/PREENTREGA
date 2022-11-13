export class ShoppingCard{    
    constructor(){
      this.showPrice=`//button[text()='Show total price']`
      this.price="#price"
        }
   
   validarProducto(articulo){
   cy.xpath(`//p[@name='${articulo}']`).contains(articulo)
   }
   validarPrecio(articulo,precio){
    return cy.xpath(`//p[@name='${articulo}']//following-sibling::p[@name=${precio}]`)
   }

        clickShowprice (){
      cy.xpath(this.showPrice).click();
        }       
  checkPrice (suma){
      
      cy.get("#price").should("have.text",suma);
    }
}