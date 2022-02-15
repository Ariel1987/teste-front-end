import { Routes as Switch, Route } from 'react-router-dom' 
import Body from '../components/Body/Body'
import Eventos from '../pages/Eventos'
import Relatorios from '../pages/Relatorios'
import Usuarios from '../pages/Usuarios'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Body />} />
      <Route path='eventos' element={<Eventos />} />
      <Route path='usuarios' element={<Usuarios />} />
      <Route path='relatorios' element={<Relatorios />} />
      <Route path='*' element={<h1>Página não encontrada</h1>} />
    </Switch>
  )
}

export default Routes