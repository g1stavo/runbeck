const login = require('./common.js')

describe('stg-01-launch-apikey', () => {
  it('job execution', () => {
    login()
    cy
      .visit('https://rundeck.chaordicsystems.com/project/prd-busca-aws/job/show/1f004d03-0eb9-49a0-94b4-739f47cab111')
      .get('[name~=\'extra.option.apikey\']').type(Cypress.env('APIKEY'))
      .get('[name~=\'extra.option.disk_size\']').clear().type(Cypress.env('DISK_SIZE'))
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
      expect('#tab_link_output').to.exist
  })  
})