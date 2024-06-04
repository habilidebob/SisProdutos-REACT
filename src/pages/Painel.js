import React, { useState } from 'react';
import './Painel.components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Table, Col } from 'reactstrap';

function Painel() {
    /*
        Implemente para que essa rota apenas seja renderizada caso o usuário esteja logado e possua um
        token de sessão válido.
        Caso o usuário não esteja logado, redirecione-o de volta à raiz (rota '/');
        Implemente a função assíncrona para consultar a API e apresantar os dados como definido abaixo
        dentro da tabela.
    */
    return (
        <div className="main-container">
            <div className="painel-glass-effect">
                <Row>
                    <Col><h2 className='text-white text-center'>Painel Administrativo - Produtos</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Table bordered dark hover responsive striped className='mt-3'>
                            <thead>
                                <tr>
                                    <th># ID</th>
                                    <th>Nome</th>
                                    <th>Fabricante</th>
                                    <th>Estoque</th>
                                    <th>Cod. Barras</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Realize a listagem dos produtos abaixo conforme resultado
                                obtido pela consulta ao API */}
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Neroli Portofino 100ML</td>
                                    <td>Tom Ford</td>
                                    <td>248</td>
                                    <td>9989774422</td>
                                    <td>R$ 2445.32</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Painel;