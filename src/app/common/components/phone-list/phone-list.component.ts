import { IComponentOptions } from '../../../core/facade'
import { Phone } from '../../phone.model'

export class PhoneListComponent {
    phones: Phone[]

    $onInit () {
        this.phones = [
            { name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.' },
            { name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.' },
            { name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.' }
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