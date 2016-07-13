import * as angular from 'angular'
import { 
    PhoneListOutletComponentElement, PhoneListOutletComponentOptions 
} from './components'

export const phonecatAppPhoneList = 'phonecatApp.phoneList'

angular.module(phonecatAppPhoneList, [])
.component(PhoneListOutletComponentElement, PhoneListOutletComponentOptions)
