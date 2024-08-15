import React from "react";

// Head
// No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. Podemos fazer isso através de um componente ou custom hook.

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);
  return <></>;
};

export default Head;

// Helmet
// Uma extensão famosa é o react-helmet. Ela retonar com componente em que você pode definir tags do Head dentro do mesmo.

// https://github.com/nfl/react-helmet

// npm install react-helmet
// import { Helmet } from 'react-helmet';

// const Home = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Página Home</title>
//         <meta name="description" content="Conteúdo da descrição" />
//       </Helmet>
//       <h1>Home</h1>
//       <p>Essa é a home</p>
//     </div>
//   );
// };
