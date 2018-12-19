const login = require('./common.js')

describe('stg-frontend-intersect', () => {
  it('job execution', () => {
    login()
    cy
      .visit('https://rundeck.chaordicsystems.com/project/prd-busca-aws/job/show/b0fb0a30-4cc1-42e3-97d6-34cdf04a008b')
      .get('[name~=\'extra.option.apikey\']').type(Cypress.env('APIKEY'))
      .get('[name~=\'extra.option.branch_lojas\']').clear().type(Cypress.env('BRANCH_LOJAS'))
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
      expect('#tab_link_output').to.exist
  })  
})