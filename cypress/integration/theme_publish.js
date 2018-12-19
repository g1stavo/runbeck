describe('theme_publish', () => {
  it('job execution', () => {
    cy
      .visit('https://rundeck.chaordicsystems.com/user/login')
      .get('#login').type(Cypress.env('USERNAME'))
      .get('#password').type(Cypress.env('PASSWORD'))
      .get('.btn-primary').click()
      .visit('https://rundeck.chaordicsystems.com/project/prd-operations-tools/job/show/572bef4a-8b01-4533-b915-9dce7d518b86')
      .get('[name~=\'extra.option.APIKEY\']').type(Cypress.env('APIKEY'))
      .get('[name~=\'extra.option.VERSION\']').type(Cypress.env('VERSION'))
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
      expect('#tab_link_output').to.exist
  })  
})