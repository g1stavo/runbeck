describe('Rundeck', () => {
  it('login', () => {
    cy
      .visit('https://rundeck.chaordicsystems.com/user/login')
      .get('#login').type('gustavo.salvador')
      .get('#password').type('#ChAoRdIcGG498@')
      .get('.btn-primary').click()
      .visit('https://rundeck.chaordicsystems.com/project/prd-operations-tools/job/show/572bef4a-8b01-4533-b915-9dce7d518b86')
      .get('[name~=\'extra.option.APIKEY\']').type('qdb-vtex')
      .get('[name~=\'extra.option.VERSION\']').type('v1.0.139')
      .get('#execFormRunButton').click()
      .get('#tab_link_output').click()
  })  
})