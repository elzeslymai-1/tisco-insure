import { type } from "cypress/types/jquery"
import { Tisco } from "../Page_model/tisco_page"

const tisco = new Tisco()

describe('Tisco Interview', () => {

    before(() => {
        tisco.intercept('GET', '/api/title/get', 'getTitle')
        cy.visit(Cypress.env('base_url'))
        cy.wait('@getTitle')
    })
    beforeEach(() => {
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

    //ACT
    it('เลือกความคุ้มครอง', () => {
        //choose coverage
        tisco.enter_choose_coverage()

        //click search insurance
        tisco.click_search_insurance_button()
    })

    //ACT
    it('กรอกข้อมูล', () => {
        //fill out personal information
        tisco.fill_out_personal_information('นาย', 'ชนทัช', 'สังข์ทองจีน', '174', '90', Cypress.env('id_card'), 'โสด', Cypress.env('tel'), Cypress.env('email'), 'วิศวกร', 'อยู่ออฟฟิตประจำ')

        //click next step
        tisco.click_next_step_personal()
    })

    //ACT
    it('รายละเอียดการขอเอาประกันภัย', () => {
        //insurance_claim_details
        tisco.insurance_claim_details('371', 'บ่อยาง', 'หาดใหญ่', 'น้ำน้อย >> หาดใหญ่ >> สงขลา >> 90110')

        //click next step
        tisco.click_next_step_claim()
    })

    //ACT
    it('ตรวจสอบข้อมูล', () => {
        //Assert
        tisco.validate_information(' 8,400 บาท', 'นาย ชนทัช สังข์ทองจีน', 'ชาย', '17 มิถุนายน 2531', '90 กิโลกรัม', '174 เซนติเมตร', 'THAI', Cypress.env('id_card'), Cypress.env('email'), 'วิศวกร', 'ทายาทตามกฎหมาย')

        //click next step
        tisco.click_next_step_validate()
    })

    afterEach(() => {
        cy.wait(700)
    })
})