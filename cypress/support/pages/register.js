export class Register{
    constructor (){
        this.user="#user"
        this.pasword="#pass"
        this.day="#day"
        this.month="#month"
        this.year="#year"
        this.submit= "#submitForm"
        this.logout="#logout"   
    }


writeUser (user) {
    cy.get(this.user).type(user);
}

writePass (password){
    cy.get(this.pasword).type(password);;
}

selectGeneder (gender){
    cy.get(`[value=${gender}]`).check({force:true})
}

selectDay(day){
    cy.get(this.day).select(day)
}


selectMounth(month){
    cy.get(this.month).select(month)
}


selectYear(year){
    cy.get(this.year).select(year)
}

selectSubmit (){
    cy.get(this.submit).click()
}

selectLoginOut (){
    cy.get(this.logout).click()
}
}