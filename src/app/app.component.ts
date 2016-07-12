import { IComponentOptions } from './core/facade'

export class AppComponent {
}

export const AppComponentElement: string = 'app'

export const AppComponentOptions: IComponentOptions = {
    controller: AppComponent,
    controllerAs: AppComponentElement,
    template: require('./app.component.html'),
    styles: [
        require('./app.component.css')
    ]
}