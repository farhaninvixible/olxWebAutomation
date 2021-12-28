describe('olx task', function() {
   let minimumAmount = 40000
   let maximumAmount = 120000
   
  it('https://www.OLX.com/', function() {

   
     cy.visit('https://www.olx.com.pk/')
     cy.get('img[class ="b5cfbf0b"]').click()
     cy.get('a[class="_7d3f8c9a"]').contains('Mobile Phones').click().wait(2000)
     cy.get('input[placeholder="Min"]').invoke('val', minimumAmount)
     cy.get('input[placeholder="Max"]').invoke('val', maximumAmount)

     
     for(let i = 0 ; i<10 ;  i++){
      cy.get('span[class="_7978e49c _2e82a662"]').eq(i)
     }


    })
 })