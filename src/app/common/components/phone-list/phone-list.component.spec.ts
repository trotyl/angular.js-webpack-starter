import * as angular from 'angular'
import { ICompileService, IRootScopeService } from 'angular'
import 'angular-mocks'
import { PhoneListComponent, PhoneListComponentElement } from './phone-list.component'

describe('PhoneListComponent', () => {
    let $compile: ICompileService
    let $rootScope: IRootScopeService
    let element: JQuery
    let ctrl: PhoneListComponent

    beforeEach(angular.mock.module('phonecatApp'));
    
    beforeEach(inject((
        _$compile_: ICompileService,
        _$rootScope_: IRootScopeService
    ) => {
        $compile = _$compile_
        $rootScope = _$rootScope_
        
        element = $compile('<phone-list></phone-list>')($rootScope.$new())
        ctrl = element.controller(PhoneListComponentElement) as PhoneListComponent
    }))
    
    it('should have proper controller type', () => {
        expect(ctrl instanceof PhoneListComponent).toBeTruthy()
    })
    
    it('should create a `phones` model with 3 phones', () => {
        expect(ctrl.phones.length).toBe(3)
    })

})