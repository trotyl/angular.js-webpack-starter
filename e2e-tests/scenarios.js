'use strict'

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', () => {

    beforeEach(() => {
        browser.get('index.html')
    })

    it('should filter the phone list as a user types into the search box', () => {
        const phoneList = element.all(by.repeater('phone in phoneList.phones'))
        const query = element(by.model('phoneList.query'))

        expect(phoneList.count()).toBe(3)

        query.sendKeys('nexus')
        expect(phoneList.count()).toBe(1)

        query.clear()
        query.sendKeys('motorola')
        expect(phoneList.count()).toBe(2)
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
})
