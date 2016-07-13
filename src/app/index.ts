import * as angular from 'angular'
import 'angular-ui-router'

import { phonecatAppCommon } from './common'
import { phonecatAppPhoneList } from './phone-list'
import { phonecatAppPhoneDetail } from './phone-detail'
import { Routes } from './core/routes.config'
import { 
    AppComponentElement, AppComponentOptions
} from './app.component'

const phonecatApp = 'phonecatApp'
const uiRouter = 'ui.router'

angular.module(phonecatApp, [
    uiRouter,
    phonecatAppCommon,
    phonecatAppPhoneList,
    phonecatAppPhoneDetail
])
.config(Routes)
.component(AppComponentElement, AppComponentOptions)
