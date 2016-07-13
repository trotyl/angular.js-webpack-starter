import * as angular from 'angular'

import { CheckmarkFilterName, CheckmarkFilterFactory } from './checkmark.filter'

export const phonecatAppCommon = 'phonecatApp.common'

angular.module(phonecatAppCommon, [])
.filter(CheckmarkFilterName, CheckmarkFilterFactory)
