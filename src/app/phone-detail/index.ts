import * as angular from 'angular'
import 'angular-ui-router'

import { 
    PhoneDetailOutletComponentElement, PhoneDetailOutletComponentOptions 
} from './components'

export const phonecatAppPhoneDetail = 'phonecatApp.phoneDetail'
const uiRouter = 'ui.router'

angular.module(phonecatAppPhoneDetail, [uiRouter])
.component(PhoneDetailOutletComponentElement, PhoneDetailOutletComponentOptions)
