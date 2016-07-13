'use strict'

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', () => {

    beforeEach(() => {
        browser.get('index.html')
        expect(browser.getLocationAbsUrl()).toBe('/phones')
    })

    describe('View: IDetailPhone list', function () {
        it('should filter the phone list as a user types into the search box', () => {
            const phoneList = element.all(by.repeater('phone in phoneList.phones'))
            const query = element(by.model('phoneList.query'))

            expect(phoneList.count()).toBe(20)

            query.sendKeys('nexus')
            expect(phoneList.count()).toBe(1)

            query.clear()
            query.sendKeys('motorola')
            expect(phoneList.count()).toBe(8)
        })

        it('should be possible to control phone order via the drop-down menu', () => {
            const queryField = element(by.model('phoneList.query'))
            const orderSelect = element(by.model('phoneList.orderProp'))
            const nameOption = orderSelect.element(by.css('option[value="name"]'))
            const phoneNameColumn = element.all(by.repeater('phone in phoneList.phones').column('phone.name'))

            function getNames() {
                return phoneNameColumn.map(elem => elem.getText())
            }

            queryField.sendKeys('tablet')

            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'MOTOROLA XOOM\u2122'
            ])

            nameOption.click()

            expect(getNames()).toEqual([
                'MOTOROLA XOOM\u2122',
                'Motorola XOOM\u2122 with Wi-Fi'
            ])
        })

        it('should render phone specific links', () => {
            const query = element(by.model('phoneList.query'))
            query.sendKeys('nexus')

            element.all(by.css('.phones li a')).first().click()
            expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s')
        })
    })

    describe('View: IDetailPhone detail', () => {

        beforeEach(() => {
            browser.get('index.html#/phones/nexus-s')
        })

        it('should display the `nexus-s` page', () => {
            expect(element(by.binding('phoneDetail.phone.name')).getText()).toBe('Nexus S')
        })

        it('should display the first phone image as the main phone image', () => {
            const mainImage = element(by.css('img.phone'))

            expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/)
        })

        it('should swap the main image when clicking on a thumbnail image', () => {
            var mainImage = element(by.css('img.phone'))
            var thumbnails = element.all(by.css('.phone-thumbs img'))

            thumbnails.get(2).click()
            expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/)

            thumbnails.get(0).click()
            expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/)
        })
    })
})
