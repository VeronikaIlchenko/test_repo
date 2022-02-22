class TestObject {
    getSearchField() {
     return  cy.get('input[name="search"]');
    }
    getSearchButton(buttonName) {
      return cy.get('button').contains(buttonName);
    }
    getCatalogTitle() {
      return cy.get('.catalog-heading');
    }
    getToggleTitleForFilter(toggleTitle) {
      return cy.get('[spinnerid="LOAD_FILTERS"]')
               .find('[class="sidebar-block__toggle-title"]')
               .contains(toggleTitle)
               .find('[class="sidebar-block__toggle-quantity ng-star-inserted"]');
    }
    getComparisonCounter() {
      return cy.get('[class="header-actions__component"]')
               .find('[class="counter counter--gray ng-star-inserted"]');
    }
    getPreviousList() {
      return cy.get('[class="breadcrumbs__item breadcrumbs__item--last ng-star-inserted"]');
    }
    getComparisonButton() {
      return cy.get('.compare-button');
    }
    getListOfComparisonItemsTitle() {
      return cy.get('div .modal__header');
    }
    getComparisonList(listName) {
      return cy.get('[class="comparison-modal__link"]').contains(listName)
    }
    getAttentionForm() {
      return cy.get('section [class="form__hint form__hint_type_attention"]')
    }
    getActionButton(buttonName) {
      return cy.get(`[aria-label="${buttonName}"]`);
    }
    getProductTitle() {
      return  cy.get('[class="product__title"]');
    }
    getClickableGoodTitle(goodsTitle) {
      return cy.get('[class="goods-tile__title"]').contains(goodsTitle);
    }
    assertThatProductExistsInComparison(goodsTitle) {
      return cy.get('div[class="product__body"]')
      .find('.product__heading')
      .contains(goodsTitle)
      .should('exist');
    }
    getMoreVertButton(title) {
      return cy.get('.products-grid__cell').find('.product__heading').contains(title).parents('.product__body')
               .within(() => {
              cy.get('.product__actions').click()
      });
    }
    getDeleteButton(actionName) {
      return cy.get('[type="button"]').contains(actionName)
    }
  }
  export default TestObject;
  