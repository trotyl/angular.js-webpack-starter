import { IHttpService } from 'angular'

import { IComponentOptions } from '../../../core/facade'
import { IListPhone } from '../../../common/list-phone.model'

export class PhoneListOutletComponent {
    phones: IListPhone[]
    orderProp = 'age'

    constructor (private $http: IHttpService) { 'ngInject' }

    $onInit (): void {
        this.$http.get('phones/phones.json').then(response => {
            this.phones = response.data as IListPhone[];
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