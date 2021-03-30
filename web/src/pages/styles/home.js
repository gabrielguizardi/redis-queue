import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
`;

const Subtitle = styled.h1`
  font-family: arial;
  font-size: 2.5em;
  text-align: center;
`;

const Input = styled.input`
  width: 50%;
  background-color: #F9E4EC;
  color: #FA1E44;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.input`
  width: 30%;
  background-color: #167DAB;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  border-radius: 90px;
  cursor: pointer;
`;

const ImageBackground = styled.div`
  width: 100%;
  background-image: url(${'../images/cinema.jpg'});
  background-color: #fff;
`;

export {
  Title,
  Subtitle,
  Input,
  Button,
  ImageBackground
}