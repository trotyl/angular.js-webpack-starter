import * as angular from 'angular'
import { ICompileService, IRootScopeService, IHttpBackendService } from 'angular'
import { IStateParamsService } from 'angular-ui-router'
import 'angular-mocks'
import { PhoneDetailOutletComponent, PhoneDetailOutletComponentElement } from './phone-detail-outlet.component'

describe('PhoneDetailOutletComponent', () => {
    let $compile: ICompileService
    let $rootScope: IRootScopeService
    let $httpBackend: IHttpBackendService
    let element: JQuery
    let ctrl: PhoneDetailOutletComponent

    beforeEach(angular.mock.module('phonecatApp'));
    
    beforeEach(inject((
        _$compile_: ICompileService,
        _$rootScope_: IRootScopeService,
        _$httpBackend_: IHttpBackendService,
        _$stateParams_: IStateParamsService
    ) => {
        $compile = _$compile_
        $rootScope = _$rootScope_
        $httpBackend = _$httpBackend_

        _$stateParams_['phoneId'] = 'xyz'

        $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});
        
        element = $compile('<phone-detail></phone-detail>')($rootScope.$new())
        ctrl = element.controller(PhoneDetailOutletComponentElement) as PhoneDetailOutletComponent
    }))
    
    it('should have proper controller type', () => {
        expect(ctrl instanceof PhoneDetailOutletComponent).toBeTruthy()
    })

    it('should fetch the phone details', () => {
        expect(ctrl.phone).toBeUndefined()

        $httpBackend.flush()
        expect(ctrl.phone).toEqual({name: 'phone xyz'})
    })
})