import {
  Link
} from "react-router-dom";

import { 
  Title, 
  Subtitle,
  Input,
  Button
} from  './styles/home';

function Ticket() {
  return (
    <>
      
      <div bg-gray-50>
        <Link to="/">Voltar</Link>
        <div className="flex space-x-4">
          <div className="flex-1">
          <div class="flex flex-col shadow-xl">
            <div class="py-6 px-14 bg-gradient-to-tr from-red-500 to-red-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
              <h2 class="text-white text-xs uppercase">Ingresso</h2>
            </div>
            <div class="flex flex-col py-6 px-8 space-y-5 bg-white">
              <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
              <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
              <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />

              <button className="w-full py-3 bg-red-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg">Cadastro</button>
            </div>
          </div>
          </div>
          <div className="flex-1 bg-red-100"> 
            
          </div>
        </div>
      </div>
    </>
  );
} 

export default Ticket;
