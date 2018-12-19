const apikey = Cypress.env('APIKEY')
const version = Cypress.env('VERSION')
const username = Cypress.env('USERNAME')
const password = Cypress.env('PASSWORD')

describe('Rundeck', () => {
  it('login', () => {
    cy
      .visit('https://rundeck.chaordicsystems.com/user/login')
      .get('#login').type(username)
      .get('#password').type(password)
      .get('.btn-primary').click()
      .visit('https://rundeck.chaordicsystems.com/project/prd-operations-tools/job/show/572bef4a-8b01-4533-b915-9dce7d518b86')
      .get('[name~=\'extra.option.APIKEY\']').type(apikey)
      .get('[name~=\'extra.option.VERSION\']').type(version)
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
      expect('#tab_link_output').to.exist
  })  
})