export class HomePage{
    constructor() {
        this.onlineShop = '#onlineshoplink';
        this.ingreso = '#registertoggle';
        
    };

    clickOnlineShop(){
        cy.get(this.onlineShop).click();
    };
    clickIngreso(){
        cy.get(this.ingreso).dblclick();
    }
    
};



