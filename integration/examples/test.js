import HomePage from "./pageObject/HomePage"

describe('Home Page Validation', function(){

    const homePage = new HomePage()

    beforeEach(() => {
        cy.visit("https://www.primefaces.org/primereact-v5/#/datatable/selection");
      })

    it('LogIn Page', function(){
        //cy.get("tbody > tr:nth-of-type(1) div[role='checkbox']").click();
        homePage.getBambooWatchChkBox().click();
    })

})