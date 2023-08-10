import HomePage from "./pageObject/HomePage"

describe('Home Page Validation', function(){

    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit("https://www.primefaces.org/primereact-v5/#/datatable/selection");
      })

    it('LogIn Page', function(){
        homePage.getBambooWatchChkBox().click();
    })

})