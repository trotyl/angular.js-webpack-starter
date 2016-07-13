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
})
