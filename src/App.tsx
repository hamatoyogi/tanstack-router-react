import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { About } from './pages/About';
import { Index } from './pages/Home';

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  ),
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Index,
});

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: About,
});

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
}

export default App;
