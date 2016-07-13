import { IHttpService } from 'angular'

import { IComponentOptions } from '../../../core/facade'
import { Phone } from '../../../common/phone.model'

export class PhoneListOutletComponent {
    phones: Phone[]
    orderProp = 'age'

    constructor (private $http: IHttpService) { 'ngInject' }

    $onInit () {
        this.$http.get('phones/phones.json').then(response => {
            this.phones = response.data as Phone[];
        })
    }
}

export const PhoneListOutletComponentElement: string = 'phoneList'

export const PhoneListOutletComponentOptions: IComponentOptions = {
    controller: PhoneListOutletComponent,
    controllerAs: PhoneListOutletComponentElement,
    template: require('./phone-list-outlet.component.html'),
    styles: [
        require('./phone-list-outlet.component.css')
    ]
}