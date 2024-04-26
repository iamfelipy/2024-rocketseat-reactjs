import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/HIstory'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route
        path={
          '/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-project/dist/'
        }
        element={<DefaultLayout />}
      >
        <Route
          path="/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-project/dist/"
          element={<Home />}
        />
        <Route
          path="/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-project/dist/history/"
          element={<History />}
        />
      </Route>

      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" element={<Home />} />
      </Route> */}
    </Routes>
  )
}
