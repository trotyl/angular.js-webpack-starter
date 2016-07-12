import * as angular from 'angular'

const env = process.env.NODE_ENV || 'local'
console.log(`App is starting in env: ${env}`)

export const app = 'app'

angular.module(app, [])
