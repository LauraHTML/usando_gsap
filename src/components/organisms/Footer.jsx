import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col p-2'>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto justify-center items-center'>
            <div>
                  <h2 className='text-xl font-bold'>Navegação</h2>
                <nav>
                    <ul>
                        <li>Portfólio</li>
                        <li>Serviços</li>
                        <li>Sobre nós</li>
                    </ul>
                </nav>
            </div>
            <div>
                  <h2 className='text-xl font-bold'>Trabalhar conosco</h2>
                <button>Interação</button>
            </div>
            <div>
                  <h2 className='text-xl font-bold'>Redes sociais</h2>
                <ul>
                    <li>linkedin</li>
                    <li>blueSky</li>
                    <li>tik tok</li>
                    <li>instagram</li>
                </ul>
            </div>
        </section>
        <section>
              <h1 className='text-xl font-bold'>Nome da marca</h1>
        </section>
    </footer>
  )
}

export default Footer