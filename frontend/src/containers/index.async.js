import asyncRoute from 'lib/asyncRoute'

export const AppContainer = asyncRoute(() => import('./AppContainer'))
export const About = asyncRoute(() => import('./About'))