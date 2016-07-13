import * as angular from 'angular'
import 'angular-mocks'
import { CheckmarkFilter } from './checkmark.filter'

describe('PhoneDetailOutletComponent', () => {
    let checkmarkFilter: CheckmarkFilter

    beforeEach(angular.mock.module('phonecatApp'));

    beforeEach(inject((
        _checkmarkFilter_: CheckmarkFilter
    ) => {
        checkmarkFilter = _checkmarkFilter_
    }))

    it('should convert boolean values to unicode checkmark or cross', () => {
        expect(checkmarkFilter(true)).toBe('\u2713');
        expect(checkmarkFilter(false)).toBe('\u2718');
    })
})
