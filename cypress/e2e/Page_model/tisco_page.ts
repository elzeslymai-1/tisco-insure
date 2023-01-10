let healthProduct_menu = '[routerlink="/products"]'
let health_insurance = '.uk-container > ul.uk-grid-small > li > .uk-card > .uk-card-footer > a'
let cancer_insurance = '.uk-flex > .tab-product > li'
let buy_online_insurance = '.uk-margin > ul > li > .uk-card > .uk-card-footer > div > a.uk-button'
let accecp_policy = '.uk-open > .uk-modal-dialog > .uk-background-default > .uk-modal-footer > .uk-button'
let next_step_personal = '#show-detail-insure > .uk-button'
let next_step_claim = '.uk-flex-column > .uk-flex > .uk-button'
let next_step_validate = ':nth-child(3) > .uk-flex > .uk-button-primary'
let search_insurance_button = '.uk-margin-bottom > .uk-flex > .uk-button'


export class Tisco {

    intercept(method: string, path: string, name: string) {
        cy.intercept({
            method: method,
            url: path
        },
            {
                statusCode: 200,
            }).as(name)
    }

    click_healthProduct_menu() {
        cy.get(healthProduct_menu).click()
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/products')
        })
    }

    click_health_insurance(message: string) {
        cy.get('.uk-container > ul.uk-grid-small').then((data) => {
            var product_length = data.find('li').length
            for (var i = 0; i < product_length; i++) {
                var product_title = data.find('li > .uk-card > .uk-card-body > .uk-card-title ').eq(i).text()
                if (product_title == message) {
                    cy.get(health_insurance).eq(i).should('have.text', 'ดูผลิตภัณฑ์').click()
                }
            }
        })
    }

    click_cancer_insurance(message: string) {
        cy.get(cancer_insurance).contains(message).click()

    }

    click_buy_online_insurance(message: string) {
        cy.get('.uk-margin > ul > li').then((data) => {
            var product_length = data.length
            for (var i = 0; i < product_length; i++) {
                var product_title = data.find('.uk-card > .uk-card-body > a > h3').eq(i).text()
                if (product_title == message) {
                    console.log(i+1)
                    cy.get(buy_online_insurance).eq((i*2)+1).should('have.text', ' ซื้อประกันออนไลน์ ').click()
                }
            }
        })

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/buy-insurance/products/heath-insurance/zero-cancer')
        })
    }

    click_accept_policy(){
        cy.get(accecp_policy).click()
    }

    click_search_insurance_button(){
        cy.get(search_insurance_button).click()
    }

    click_next_step_personal(){
        cy.get(next_step_personal).click()
    }

    click_next_step_claim(){
        cy.get(next_step_claim).click()
    }

    click_next_step_validate(){
        cy.get(next_step_validate).click()
    }
    enter_choose_coverage(){
        cy.get('.uk-grid-small').contains('ตนเอง').click()
        cy.get('.uk-margin-small-bottom > .uk-form-controls').contains('ชาย').click()
        cy.get('select[id="date"]').select('17')
        cy.get('select[name="birthDate[1]"]').select('มิถุนายน')
        cy.get('select[name="birthDate[2]"]').select('2531')
        cy.get('.uk-grid-small > :nth-child(1) > .uk-radio').click()
        cy.get('.uk-flex.uk-flex-center > .uk-button').click()
        cy.get(':nth-child(1) > label > .uk-card > .uk-card-footer').click()
        cy.get('.uk-form-controls>#promotion-code').type('11111111')
        cy.get('.uk-form-controls>#promotion-code').clear()
    }

    fill_out_personal_information(){
        cy.get('select[name="titleName"]').select('นาย')
        cy.get('#first-name').type('ชนทัช')
        cy.get('#last-name').type('สังข์ทองจีน')
        cy.get('#user-height').type('174')
        cy.get('#user-weight').type('90')
        cy.get('.uk-margin-small-bottom.ng-star-inserted > .uk-first-column > .uk-form-controls > .uk-input').type(Cypress.env('id_card'))
        cy.get(':nth-child(8) > .uk-form-controls').contains('โสด').click()
        cy.get('#tel').type(Cypress.env('tel'))
        cy.get('#mail-leads').type(Cypress.env('email'))
        cy.get('select[id=occupation]').select('วิศวกร')
        cy.get('select[id="job-desc"]').select('อยู่ออฟฟิตประจำ')
        cy.get(':nth-child(1) > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(2) > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(3) > .uk-list > :nth-child(4) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(4) > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(5) > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(6) > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
    }

    insurance_claim_details(){
        cy.get('#currentNumber').type('371')
        cy.get(':nth-child(2) > .ng-autocomplete > .autocomplete-container > .input-container > .ng-untouched').type('บ่อยาง')
        cy.get(':nth-child(3) > .ng-autocomplete > .autocomplete-container > .input-container > .ng-untouched').type('หาดใหญ่')
        cy.get(':nth-child(3) > div.ng-star-inserted > .ng-star-inserted').click()
        cy.get(':nth-child(3) > .uk-form-controls > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(4) > .uk-form-controls > .uk-list > :nth-child(1) > .uk-position-relative > .uk-radio').click()
        cy.get(':nth-child(5) > .uk-form-controls > .uk-list > [uk-margin=""] > .uk-position-relative > .uk-radio').click()
    }

    validate_information(){
        cy.get('.step-three > .uk-section > :nth-child(1) > .uk-flex > :nth-child(1) > .uk-margin-medium-bottom > .uk-background-default').should('contain',' 8,400 บาท')
        cy.get(':nth-child(4) > .uk-background-default > :nth-child(1)').should('contain','นาย ชนทัช สังข์ทองจีน')
        cy.get(':nth-child(4) > .uk-background-default > :nth-child(3)').should('contain','ชาย')
        cy.get(':nth-child(4) > .uk-background-default > :nth-child(5)').should('contain','17 มิถุนายน 2531')
        cy.get(':nth-child(4) > .uk-background-default > :nth-child(7)').should('contain','90 กิโลกรัม')
        cy.get(':nth-child(4) > .uk-background-default > :nth-child(9)').should('contain','174 เซนติเมตร')
        cy.get('.uk-background-default > :nth-child(11)').should('contain','THAI')
        cy.get(':nth-child(4) > .uk-background-default > .uk-grid-small.ng-star-inserted').should('contain',Cypress.env('id_card'))
        cy.get(':nth-child(5) > .uk-background-default > :nth-child(9)').should('contain',Cypress.env('email'))
        cy.get(':nth-child(6) > .uk-background-default > :nth-child(1)').should('contain','วิศวกร')
        cy.get('.uk-list > .ng-star-inserted > .uk-padding-small > .uk-grid-small').should('contain','ทายาทตามกฎหมาย')
    }
    
        
}