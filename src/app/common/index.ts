import * as angular from 'angular'
import { 
    PhoneListComponentElement, PhoneListComponentOptions 
} from './components'

export const phonecatAppCommon = 'phonecatApp.common'

angular.module(phonecatAppCommon, [])
.component(PhoneListComponentElement, PhoneListComponentOptions)
