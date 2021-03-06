import * as angular from 'angular'
import { ICompileService, IRootScopeService, IHttpBackendService } from 'angular'
import 'angular-mocks'
import { PhoneListOutletComponent, PhoneListOutletComponentElement } from './phone-list-outlet.component'

describe('PhoneDetailOutletComponent', () => {
    let $compile: ICompileService
    let $rootScope: IRootScopeService
    let $httpBackend: IHttpBackendService
    let element: JQuery
    let ctrl: PhoneListOutletComponent

    beforeEach(angular.mock.module('phonecatApp'));
    
    beforeEach(inject((
        _$compile_: ICompileService,
        _$rootScope_: IRootScopeService,
        _$httpBackend_: IHttpBackendService
    ) => {
        $compile = _$compile_
        $rootScope = _$rootScope_
        $httpBackend = _$httpBackend_

        $httpBackend.expectGET('phones/phones.json')
            .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}])
        
        element = $compile('<phone-list></phone-list>')($rootScope.$new())
        ctrl = element.controller(PhoneListOutletComponentElement) as PhoneListOutletComponent
    }))
    
    it('should have proper controller type', () => {
        expect(ctrl instanceof PhoneListOutletComponent).toBeTruthy()
    })

    it('should create a `phones` property with 2 phones fetched with `$http`', () => {
        expect(ctrl.phones).toBeUndefined()

        $httpBackend.flush()
        expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}])
    })

    it('should set a default value for the `orderProp` model', () => {
        expect(ctrl.orderProp).toBe('age')
    })
})