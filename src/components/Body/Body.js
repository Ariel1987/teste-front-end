import { Line, OptionsWrapper, Wrapper } from './Body.styles'
import { useNavigate } from 'react-router-dom'

const Body = () => {
  const navigate = useNavigate()

  return (
    <>
      <Line />
      <Wrapper>
        <p>
          Olá, <b>Igor Gonçalves</b>, selecione uma das opções abaixo:
        </p>
        <OptionsWrapper>
          <div>
            <img
              src="icons/icone-eventos.png"
              alt="eventos"
              onClick={() => navigate('/eventos')}
            />
            <p>Meus Eventos</p>
          </div>
          <div>
            <img
              src="icons/icone-usuarios.png"
              alt="usuarios"
              onClick={() => navigate('/usuarios')}
            />
            <p>Usuários</p>
          </div>
          <div>
            <img
              src="icons/icone-relatorios.png"
              alt="relatorios"
              onClick={() => navigate('/relatorios')}
            />
            <p>Meus Relatórios</p>
          </div>
        </OptionsWrapper>
      </Wrapper>
    </>
  )
}

export default Body
