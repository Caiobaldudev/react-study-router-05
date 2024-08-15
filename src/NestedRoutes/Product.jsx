import React from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

const Product = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> {" | "}
        <NavLink to="avaliacao">Avaliação</NavLink> {" | "}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Product;

//Exemplo 1 de NestedRoutes no arquivo Product.jsx ^

//Exemplo 2:
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="sobre" element={<Sobre />} />
//         <Route path="login" element={<Login />} />
//         <Route path="produto/:id/*" element={<Produto />}>
//           <Route path="/" element={<ProdutoDescricao />} />
//           <Route path="avaliacao" element={<ProdutoAvaliacao />} />
//           <Route path="customizado" element={<ProdutoCustomizado />} />
//         </Route>
//         <Route path="*" element={<NaoEncontrada />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// Colocar tudo no arquivo de rotas importando cada produto