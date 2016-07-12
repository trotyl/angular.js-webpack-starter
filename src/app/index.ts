import * as angular from 'angular'
import { phonecatAppCommon } from './common'
import { 
    AppComponentElement, AppComponentOptions
} from './app.component'

const phonecatApp = 'phonecatApp'

angular.module(phonecatApp, [
    phonecatAppCommon
])
.component(AppComponentElement, AppComponentOptions)

