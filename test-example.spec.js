/// <reference types="cypress" />

import TestObject from '../../page-objects/test-page-objects';

describe('Testing Rozetka.com', () => { 

  const test = new TestObject();

  let fixtures;

  beforeEach(() => {

    cy.fixture('rozetka')
      .then((fixtureData) => {
        fixtures = fixtureData;
      })

      cy.goToWebSite();

  })

  it('Search for iphone 13 pro, add 2 items into comparison and remove them', () => {
    // Search for iphone 13 pro
    test.getSearchField().type(fixtures.search_value).should('have.value', fixtures.search_value)
    test.getSearchButton(fixtures.find_button).click();
    cy.wait(2000)
    // Assert catalog heading
    test.getCatalogTitle().should('contain', fixtures.catalog_header);
    // Assert that filter is correct
    test.getToggleTitleForFilter(fixtures.toggle_title)
        .should('contain', fixtures.filter_value);
    // Assert title, open item, sent to comparison
    test.getClickableGoodTitle(fixtures.good_title1)
        .click();
    cy.wait(2000);
    // Assert product title
    test.getProductTitle().should('contain', fixtures.good_title1);
    // Check that buy button exists and is active
    test.getActionButton(fixtures.buy_button_name).should('exist').and('be.enabled');
    // Sent product to comparison
    test.getComparisonButton().click();
    // Assert comparison has 1 product
    test.getComparisonCounter()
        .should('exist')
        .and('contain', fixtures.comparison_counter_value1);
    // Returns to iphone 13 pro list  
    test.getPreviousList().click();
    cy.wait(2000)
    // Assert title, open item, sent to comparison
    test.getClickableGoodTitle(fixtures.good_title2)
        .click();
    cy.wait(2000);
    // Assert product title
    test.getProductTitle().should('contain', fixtures.good_title2);
    // Check that buy button exists and is active
    test.getActionButton(fixtures.buy_button_name).should('exist').and('be.enabled');
    // Sent product to comparison
    test.getComparisonButton().click();
    // Assert comparison has 2 products
    test.getComparisonCounter()
        .should('exist')
        .and('contain', fixtures.comparison_counter_value2);
    // Go to comparison
    test.getActionButton(fixtures.header_comparison_button_name).click();
    test.getListOfComparisonItemsTitle()
        .should('exist')
        .and('contain', fixtures.title_comparison_dialog);
    // Open desired comparison list
    test.getComparisonList(fixtures.list_name).click();
    cy.wait(2000);
    // Check that first product exists 
    test.assertThatProductExistsInComparison(fixtures.good_title1);
    // Check that second product exists 
    test.assertThatProductExistsInComparison(fixtures.good_title2);
    // Delete one product from comparison
    test.getMoreVertButton(fixtures.good_title1);
    test.getDeleteButton(fixtures.delete_button).click();
    // Delete second product from comparison
    test.getMoreVertButton(fixtures.good_title2);
    test.getDeleteButton(fixtures.delete_button).click();
    test.getAttentionForm().should('contain', fixtures.no_items_message);
  });
});