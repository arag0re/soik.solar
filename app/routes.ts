import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
   index('routes/home.tsx'),
   route('imprint', 'routes/imprint.tsx'),
] satisfies RouteConfig
