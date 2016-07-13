import { IStateParamsService } from 'angular-ui-router'

import { IComponentOptions } from '../../../core/facade'

export class PhoneDetailOutletComponent {
    phoneId: string

    constructor (private $stateParams: IStateParamsService) { 'ngInject' }

    $onInit () {
        this.phoneId = this.$stateParams['phoneId']
    }
}

export const PhoneDetailOutletComponentElement: string = 'phoneDetail'

export const PhoneDetailOutletComponentOptions: IComponentOptions = {
    controller: PhoneDetailOutletComponent,
    controllerAs: PhoneDetailOutletComponentElement,
    template: require('./phone-detail-outlet.component.html'),
    styles: [
        require('./phone-detail-outlet.component.css')
    ]
}