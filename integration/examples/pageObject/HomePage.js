class HomePage {

    getBlueBandChkBox(){
        return cy.get("tr:nth-of-type(3) div[role='checkbox']");
    }
}

export default HomePage;