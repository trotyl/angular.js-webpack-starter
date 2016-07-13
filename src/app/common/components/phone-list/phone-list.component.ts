import { IHttpService } from 'angular'

import { IComponentOptions } from '../../../core/facade'
import { Phone } from '../../phone.model'

export class PhoneListComponent {
    phones: Phone[]
    orderProp = 'age'

    constructor (private $http: IHttpService) { 'ngInject' }

    $onInit () {
        this.$http.get('phones/phones.json').then(response => {
            this.phones = response.data as Phone[];
        })
    }
}

export const PhoneListComponentElement: string = 'phoneList'

export const PhoneListComponentOptions: IComponentOptions = {
    controller: PhoneListComponent,
    controllerAs: PhoneListComponentElement,
    template: require('./phone-list.component.html'),
    styles: [
        require('./phone-list.component.css')
    ]
}