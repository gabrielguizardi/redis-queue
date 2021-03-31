import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { 
  H1,
  Input,
  Button,
  ImageBackground,
  Image
} from  './styles/home';

import api from '../services/api';

function Home() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const history = useHistory();

	const navigateTo = (path) => {
		history.push(path);
	}

  const changeInputState = (value, setState) => {
    setState(value);
  }

  const onSubmit = async () => {
    try {
      if (userName === '' || userEmail === '' || userPhone === '') return;

      await api.post('/user', {
        name: userName,
        email: userEmail,
        phone: userPhone
      });

      navigateTo('/ticket')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ImageBackground>
      <div className="flex space-x-4">
        <div className="flex flex-1 flex-row items-center justify-center">
          <Image src="../../images/pipoca.png"/>
          <H1>Venha assistir com a gente!</H1>
        </div>
        <div className="flex flex-1 flex-row items-center justify-center" style={{ height: '100vh'}}>
          <div className="flex flex-col bg-white rounded-lg w-7/12 p-5" >
          <div className="pt-6 flex justify-center"><h1>Entre na fila</h1></div>
            <div className="pt-6 flex justify-center pl-8 pr-8">
              <Input
                type="text"
                placeholder="Nome"
                value={userName}
                onChange={(event) => changeInputState(event.target.value, setUserName)}
              />
            </div>
            <div className="pt-6 flex justify-center pl-8 pr-8">
              <Input
                type="email"
                placeholder="E-mail"
                value={userEmail}
                onChange={(event) => changeInputState(event.target.value, setUserEmail)}
              />
            </div>
            <div className="pt-6 flex justify-center pl-8 pr-8">
              <Input
                type="number"
                placeholder="1440028922"
                value={userPhone}
                onChange={(event) => changeInputState(event.target.value, setUserPhone)}
              />
            </div>
            <div className="pt-6 flex justify-center pl-8 pr-8">
              <Button type="submit" value="Cadastrar" onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </ImageBackground>
  );
}

export default Home;
