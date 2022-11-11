///<reference types 

import { LoginPage } from '../support/pages/loginPage'
import { HomePage } from '../support/pages/homePage'
import  { ListProduct} from '../support/pages/listProduct'
import  {ShoppingCard} from '../support/pages/shoppingCard'
import  {Register} from '../support/pages/register'


describe('Page Object Model', () => {
  let datosLogin,shopinData, registerData 

 
  
  //crear instancia de nuestra clase 
  const loginPage = new LoginPage ();
  const homePage = new HomePage ();
  const listProduct = new ListProduct ();
  const shoppingCard = new ShoppingCard();
  const register = new Register ();

  before("before", () => {
      cy.fixture('loginData').then(data => {
          datosLogin = data;
      });
    
    cy.fixture('shopinData').then(prueba =>{
      shopinData = prueba;
    });
   
    cy.fixture('registerData').then(data1 =>{
      registerData = data1;
    });
              
    });

  beforeEach("beforeEach", () => {
      cy.visit('');
      
  });
  it(" Registro de productos ", () => {
   const numero = Math.floor(Math.random() * 1000)
   //Registro
   register.writeUser (registerData.primerRegistro.username); 
    register.writePass (registerData.primerRegistro.password);
    register.selectGeneder (registerData.primerRegistro.gender)
    register.selectDay(registerData.primerRegistro.day)
    register.selectMounth(registerData.primerRegistro.month)
    register.selectYear(registerData.primerRegistro.year)
    register.selectSubmit ()
    register.selectLoginOut ()

    homePage.clickIngreso();
    loginPage.escribirUsuario(datosLogin.primerUsuario.username)
    loginPage.escribirContraseña(datosLogin.primerUsuario.password);
    loginPage.clickBotonLogin();
    homePage.clickOnlineShop();
    //seleccionar prodcutos y añadir carrito
  
   listProduct.clickOnproducto(shopinData.primerArticulo.nombre);
  listProduct.clickOnCerrarModal();
  listProduct.clickOnproducto(shopinData.segundoArticulo.nombre);
  listProduct.clickOnCerrarModal();
  listProduct.clickOnListadoCompras();
// validar nombre, precio
  shoppingCard.validarProducto(shopinData.primerArticulo.nombre)
  shoppingCard.validarPrecio(shopinData.primerArticulo.precio)
  shoppingCard.validarProducto(shopinData.segundoArticulo.nombre)
  shoppingCard.validarPrecio(shopinData.segundoArticulo.precio)
  shoppingCard.clickShowprice();
  //verificar precio acumulado
  shoppingCard.checkPrice(shopinData.primerArticulo.precio,shopinData.segundoArticulo.precio);

  });
});




