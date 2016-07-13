import { IComponentOptions } from '../../../core/facade'
import { Phone } from '../../phone.model'

export class PhoneListComponent {
    phones: Phone[]
    orderProp = 'age'

    $onInit () {
        this.phones = [
            { name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.', age: 1 },
            { name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.', age: 2 },
            { name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.', age: 3 }
        ]
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