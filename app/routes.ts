import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
   index('routes/home.tsx'),
   route('imprint', 'routes/imprint.tsx'),
   route('privacy', 'routes/privacy.tsx'),
   route('roi', 'routes/roi-calculator.tsx'),
] satisfies RouteConfig
