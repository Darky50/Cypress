class HomePage {

    getBambooWatchChkBox(){
        return cy.get('tbody > tr:nth-of-type(1) div[role="checkbox"]');
    }
}

export default HomePage;