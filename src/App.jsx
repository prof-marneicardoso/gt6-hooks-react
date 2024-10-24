import { useState } from "react";
import './app.css';

export default function App() {
  const [isVisivel, setVisibilidade] = useState(false);

  const toggleVisibilidade = () => {
    setVisibilidade(!isVisivel);
  };

  const mostrarToast = () => {
    const toast = document.querySelector('.toast');

    if (isVisivel) {
      toast.classList.add('show');
    
      setTimeout(() => {
        setVisibilidade(!isVisivel);
        toast.classList.remove('show');
      }, 1500); // 1000 mili == 1 segundo
    }
  };

  // TESTE
  const [contador, setContador] = useState(0);
  
  return (
    <>
      <div>
        <button onClick={toggleVisibilidade}>
          {isVisivel ? 'Esconder' : 'Mostrar'} Mensagem
        </button>

        {isVisivel && mostrarToast()}
      </div>

      {/* Exemplo de mensagem do tipo "toast" */}
      <div className="base-toast">
        <div className="toast">
          Esta é a mensagem!
        </div>
      </div>


      {/* TESTE */}
      <button onClick={() => setContador((contador) => contador +1)}>
          Contar
      </button>

      <h3 id="cont">
        {contador}
      </h3>
    </>
  );
}
