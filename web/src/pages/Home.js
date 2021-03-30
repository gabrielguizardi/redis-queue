import { 
  Title, 
  Subtitle,
  Input,
  Button,
  ImageBackground
} from  './styles/home';

function Home() {
  return (
    <ImageBackground>
      <div className="flex space-x-4">
        <div className="flex-1">
            <div>
              <Title>Venha assistir com a gente!</Title>
              <Subtitle>Adquira já o seu ingresso</Subtitle>
            </div>
        </div>
        <div className="flex-1" style={{backgroundColor:'#FFF', height: '100vh'}}>
            <div className="flex flex-col">
              <div className="pt-6 flex justify-center"><Input type="text" placeholder="e-mail" className="email"/></div>
              <div className="pt-6 flex justify-center"><Input type="password" placeholder="senha" className="password"/></div>
              <div className="pt-6 flex justify-center"><Button type="submit" value="Acessar"/></div>
            </div>
          </div>
      </div>
    </ImageBackground>
  );
}

export default Home;
