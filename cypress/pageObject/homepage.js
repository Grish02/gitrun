class HomePage {
    // Selector for the heading
    heading = 'h1.page-title';
    
    // Selector for the Dashboard
    dashboard = '.dashboard';
  
    // Selectors for the navigation links
    signInLink = 'a[href="/customer/account/login/"]';
    createAccountLink = 'a[href="/customer/account/create/"]';
    whatsNewLink = 'a[href="/what-is-new.html"]';
    womenSectionLink = 'a[href="/women.html"]';
    menSectionLink = 'a[href="/men.html"]';
    gearSectionLink = 'a[href="/gear.html"]';
    trainingSectionLink = 'a[href="/training.html"]';
    saleSectionLink = 'a[href="/sale.html"]';
  
    // Method to visit the homepage
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    // Method to verify that the heading is visible
    verifyHeading() {
      cy.get(this.heading).should('be.visible');
    }
  
    // Method to verify that the Dashboard is visible
    verifyDashboard() {
      cy.get(this.dashboard).should('be.visible');
    }
  
    // Method to navigate to the Sign In page
    navigateToSignIn() {
      cy.get(this.signInLink).click();
    }
  
    // Method to navigate to the Create Account page
    navigateToCreateAccount() {
      cy.get(this.createAccountLink).click();
    }
  
    // Method to navigate to the Whats New page
    navigateToWhatsNew() {
      cy.get(this.whatsNewLink).click();
    }
  
    // Method to navigate to the Women's section
    navigateToWomenSection() {
      cy.get(this.womenSectionLink).click();
    }
  
    // Method to navigate to the Men's section
    navigateToMenSection() {
      cy.get(this.menSectionLink).click();
    }
  
    // Method to navigate to the Gear section
    navigateToGearSection() {
      cy.get(this.gearSectionLink).click();
    }
  
    // Method to navigate to the Training section
    navigateToTrainingSection() {
      cy.get(this.trainingSectionLink).click();
    }
  
    // Method to navigate to the Sales section
    navigateToSaleSection() {
      cy.get(this.saleSectionLink).click();
    }
  }
  
  export default HomePage;
  