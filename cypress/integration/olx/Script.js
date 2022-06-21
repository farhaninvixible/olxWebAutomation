describe('olx task', function() {
   let minimumAmount = 40000
   let maximumAmount = 120000
   
  it('https://www.OLX.com/', function() {

  let i = 0
   
     cy.visit('https://www.olx.com.pk/')
     cy.get('img[class ="b5cfbf0b"]').click()
     cy.get('a[class="_7d3f8c9a"]').contains('Mobile Phones').click().wait(2000)
     cy.get('input[placeholder="Min"]').invoke('val', minimumAmount)
     cy.get('input[placeholder="Max"]').invoke('val', maximumAmount)

     while (i<20){
        
      cy.get('div [class="_52497c97"]').eq(i).children().invoke('text')
      .then((text) => +text.replace(',','').trim().replace('Rs','').trim())
      .then(parseFloat)
      .should('be.gt', minimumAmount)
      .should('be.lt', maximumAmount)

      i++

     }

      
 })
})