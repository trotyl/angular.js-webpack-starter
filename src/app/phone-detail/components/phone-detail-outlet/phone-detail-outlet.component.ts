import { IHttpService } from 'angular'
import { IStateParamsService } from 'angular-ui-router'

import { IComponentOptions } from '../../../core/facade'
import { IDetailPhone } from '../../../common/detail-phone.model'

export class PhoneDetailOutletComponent {
    phone: IDetailPhone

    constructor (
        private $http: IHttpService,
        private $stateParams: IStateParamsService
    ) { 'ngInject' }

    $onInit (): void {
        this.$http.get(`phones/${this.$stateParams['phoneId']}.json`).then(response => {
            this.phone = response.data as IDetailPhone;
        })
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