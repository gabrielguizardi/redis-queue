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
      
      <div
								class="container mb-2 flex mx-auto w-full items-center justify-center"
							>
								<ul class="flex flex-col p-4">
									<li class="border-gray-400 flex flex-row">
										<div
											class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
											  	<input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
												</div>
											</div>
											<div
												class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2">
											
												<button className="w-full py-3 bg-red-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg">Remover</button>
											</div>
										</div>
									</li>
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
                          <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
												</div>
											</div>
											
										</div>
									</li>
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
                          <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                        </div>
											</div>
											
										</div>
									</li>
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
                          <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
												</div>
											</div>
											
										</div>
									</li>
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
                          <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                        </div>
											</div>
											
										</div>
									</li>
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
                          <input type="text" placeholder="Nome" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Email" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                          <input type="text" placeholder="Telefone" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-300 focus:border-transparent" />
                        </div>
											</div>
										</div>
									</li>
								</ul>
							</div>
    </>
  );
} 

export default Ticket;
