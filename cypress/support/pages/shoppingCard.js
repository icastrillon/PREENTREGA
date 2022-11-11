export class ShoppingCard{    
    constructor(){
      this.showPrice=`//button[text()='Show total price']`
      this.price="#price"
        }
   
   validarProducto(articulo){
   cy.xpath(`//p[@id='productName' and @name='${articulo}']`).contains(articulo)
   }
   validarPrecio(precio){
    cy.xpath(`//p[@id='productPrice' and @name=${precio}]`).contains(precio)
   }

        clickShowprice (){
      cy.xpath(this.showPrice).click();
        }       
  checkPrice (precio1,precio2){
      let suma;
      suma=precio1 + precio2;
      cy.get("#price").should("have.text",suma);
    }
}