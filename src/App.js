import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: green;
text-decoration: underline;
font-size: 75px;
font-weight: bold;
`;

const Subtitulo = styled.h2`
color: blue;
font-size: 100px;
text-decoration: underline;
font-weight: bold;
`;

const Artigo = styled.section`
color: black;
font-weight: bold;
background-color: #61aafb;
`;

const Titulo2 = styled.h1`
color: blue;
font-size: 80px;
text-decoration: underline;
font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo><br/><br/>Nesse blog vc vai encontrar informações sobre a vida cotidiana na perspectiva de um cãozinho.</Titulo>
        <Subtitulo><b>Apresentação</b></Subtitulo>
        <Artigo>Oi sou o Bill, nasci em 15/04/2016, tenho 6 anos, sou da raça Shih Tzu .<br/>
         Minha mãe acha que nasci no corpo de um cãozinho mas tenho alma de um bicho preguiça, pq gosto de dormir muuuuito.<br/>
Meu pai acha que tenho alma de bebê, pq ele me trata igual um bebezinho. <br/> 
E o meu irmão acha que tenho alma do Albert Einstein, ele fala que sou muito inteligente. <br/> 
Mas, na verdade só sei que sou um cãozinho e minha família me ama muito.<br/>
O que seria deles se não fosse eu para colocá-los no eixo.<br/>
Minha mãe tinha medo de cachorro, rsrsrs, mas agora não tem mais e é ela que mais cuida de mim, todos os cuidados médicos é ela que providência.<br/>
Meu irmão tem que dividir os gastos dele comigo, e olha que não são poucos, rsrsrs.<br/>
E meu pai, ahhhhh, ele só sabe me mimar.<br/>
Na verdade eu gosto de brincar, adoro um brinquedo. Petisco então, fico eufórico.<br/>
Banho???? Não gosto não, na verdade, detesto!!!<br/>
Mas o que eu gosto mesmo é de comer os chinelos, papel, o que tiver dando mole no chão, eu gosto de experimentar coisas novas.<br/>
Agora tenho que confessar um defeito, sou ciumento, não gosto de ver os meus aumigos perto da minha família, elas são só minha!</Artigo>

        <Titulo2><br/>O que vc vai encontrar nos próximos capítulos</Titulo2>
        <Artigo>Nosos encontros serão semanais, nesse primeiro fiz minha apresentação. <br/> No próximo vou trazer dicas e mais informações sobre o meu dia-a-dia pra vocês.<br/>
        Não percam, vai ser sensacional, lambejos a todos e até mais!!!</Artigo>
      </header>
    </div>

  );
}

export default App;
