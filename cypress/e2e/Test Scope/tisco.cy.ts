import { Tisco } from "../Page_model/tisco_page"

const tisco = new Tisco()

describe('Tisco Interview', () => {

    before(() => {
        tisco.intercept('GET', '/api/title/get', 'getTitle')
        cy.visit(Cypress.env('base_url'))
        cy.wait('@getTitle')
    })
    beforeEach(()=>{
        cy.viewport(1920, 1080)
    })

    //ACT
    it('Click Health Insurance Product', () => {
        //click health product
        tisco.click_healthProduct_menu()
        cy.wait(500)

        //click health insurance
        tisco.click_health_insurance('ประกันสุขภาพและโรคร้าย')
    })

    //ACT
    it('Click Buy Online Insurance [ประกันภัยโรคมะเร็ง TISCO Zero Cancer]', () => {
        //click cancer insurance
        cy.wait(500)
        tisco.click_cancer_insurance('ประกันคุ้มครองโรคมะเร็ง')

         //click buy online insurance [ประกันภัยโรคมะเร็ง TISCO Zero Cancer]
        tisco.click_buy_online_insurance('ประกันภัยโรคมะเร็ง TISCO Zero Cancer')
        cy.wait(400)

        //click accept policy
        tisco.click_accept_policy()
    })
})