const login = require('./common.js')

describe('stg-frontend-intersect', () => {
  it('job execution', () => {
    login()
    cy
      .visit('https://rundeck.chaordicsystems.com/project/prd-busca-aws/job/show/74cc38a9-f42f-40ec-8c91-9512bd1fa0cf')
      .get('[name~=\'extra.option.apikey\']').type(Cypress.env('APIKEY'))
      .get('[name~=\'extra.option.branch\']').clear().type(Cypress.env('BRANCH'))
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
      expect('#tab_link_output').to.exist
  })  
})