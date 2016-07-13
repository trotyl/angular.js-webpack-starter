import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

export const Routes = (
    $stateProvider: IStateProvider,
    $urlRouterProvider: IUrlRouterProvider
) => {
    'ngInject'

    $urlRouterProvider.otherwise('/phones');
    $stateProvider
        .state('phones', {
            url: '/phones',
            template: '<phone-list></phone-list>'
        })
        .state('phoneDetail', {
            url: '/phones/:phoneId',
            template: '<phone-detail></phone-detail>'
        })
}
