import * as angular from 'angular'
import { ICompileService, IRootScopeService } from 'angular'
import 'angular-mocks'
import { PhoneDetailOutletComponent, PhoneDetailOutletComponentElement } from './phone-detail-outlet.component'

describe('PhoneDetailOutletComponent', () => {
    let $compile: ICompileService
    let $rootScope: IRootScopeService
    let element: JQuery
    let ctrl: PhoneDetailOutletComponent

    beforeEach(angular.mock.module('phonecatApp'));
    
    beforeEach(inject((
        _$compile_: ICompileService,
        _$rootScope_: IRootScopeService
    ) => {
        $compile = _$compile_
        $rootScope = _$rootScope_
        
        element = $compile('<phone-detail></phone-detail>')($rootScope.$new())
        ctrl = element.controller(PhoneDetailOutletComponentElement) as PhoneDetailOutletComponent
    }))
    
    it('should have proper controller type', () => {
        expect(ctrl instanceof PhoneDetailOutletComponent).toBeTruthy()
    })
})