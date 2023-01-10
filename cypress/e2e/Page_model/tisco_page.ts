let healthProduct_menu = '[routerlink="/products"]'
let health_insurance = '.uk-container > ul.uk-grid-small > li > .uk-card > .uk-card-footer > a'
let cancer_insurance = '.uk-flex > .tab-product > li'
let buy_online_insurance = '.uk-margin > ul > li > .uk-card > .uk-card-footer > div > a.uk-button'
let accecp_policy = '.uk-open > .uk-modal-dialog > .uk-background-default > .uk-modal-footer > .uk-button'


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
}