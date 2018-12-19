const login = () =>  {
  cy
  .visit('https://rundeck.chaordicsystems.com/user/login')
  .get('#login').type(Cypress.env('USERNAME'))
  .get('#password').type(Cypress.env('PASSWORD'))
  .get('.btn-primary').click()
}

export default login;