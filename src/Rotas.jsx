import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import FormPromocao from './views/promocao/FormPromocao';
import FormOrdemServico from './views/ordemServico/FormOrdemServico';


import ListCliente from './views/cliente/ListCliente';
import ListProduto from './views/produto/ListProduto';
import ListEntregador from './views/entregador/ListEntregador';
import ListPromocao from './views/promocao/ListPromocao';
import ListOrdemServico from './views/ordemServico/ListOrdemServico';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-ordemServico" element={ <ListOrdemServico/> } />
                <Route path="list-promocao" element={ <ListPromocao/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
              
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="form-promocao" element={ <FormPromocao/> } />
                <Route path="form-ordemServico" element={ <FormOrdemServico/> } />
            </Routes>
        </>
    )
}

export default Rotas

