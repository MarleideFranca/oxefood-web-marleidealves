import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormOrdemServico() {

    const { state } = useLocation();
    const [idOrdemServico, setIdOrdemServico] = useState();


    const [numero, setNumero] = useState();
    const [pecasUtilizadas, setPecasUtilizadas] = useState();
    const [servicosEfetuados, setServicosEfetuados] = useState();
    const [dataServico, setDataServico] = useState();
    const [cliente, setCliente] = useState();
    const [valorServico, setValorServico] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/ordemServico/" + state.id)
                .then((response) => {
                    setIdOrdemServico(response.data.id)
                    setNumero(response.data.numero)
                    setPecasUtilizadas(response.data.pecasUtilizadas)
                    setDataServico(formatarData(response.data.dataServico))
                    setServicosEfetuados(response.data.servicosEfetuados)
                    setCliente(response.data.cliente)
                    setValorServico(response.data.valorServico)
                })
        }
    }, [state])


    function salvar() {

        let ordemServicoRequest = {
            numero: numero,
            pecasUtilizadas: pecasUtilizadas,
            dataServico: dataServico,
            servicosEfetuados: servicosEfetuados,
            cliente: cliente,
            valorServico: valorServico
        }

        if (idOrdemServico != null) { //Alteração:
            axios.put("http://localhost:8080/api/ordemServico/" + idOrdemServico, ordemServicoRequest)
                .then((response) => {
                    console.log('Ordem de Serviço alterada com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao alterar uma ordem de serviço.')
                })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/ordemServico", ordemServicoRequest)
                .then((response) => {
                    console.log('Ordem de serviço cadastrada com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir uma ordem de serviço.')
                })
        }
    }


    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
    return (

        <div>
            <MenuSistema tela={'ordemServico'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idOrdemServico === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Ordem de Serviço &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idOrdemServico != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Ordem de Serviço &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    mask="999.999.999"
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Peças Utilizadas'>
                                    <InputMask
                                        required
                                        //mask="999.999.999-99"
                                        value={pecasUtilizadas}
                                        onChange={e => setPecasUtilizadas(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data do Servico'
                                    width={6}>
                                    <InputMask
                                         mask="99/99/9999"
                                        value={dataServico}
                                        onChange={e => setDataServico(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Servicos Efetuados'
                                    width={6}>
                                    <InputMask
                                        //mask="(99) 9999.9999"
                                        value={servicosEfetuados}
                                        onChange={e => setServicosEfetuados(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='cliente'
                                    width={6}
                                >
                                    <InputMask
                                        //mask="99/99/9999"
                                        maskChar={null}
                                        //placeholder="Ex: 20/03/1985"
                                        value={cliente}
                                        onChange={e => setCliente(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='valor do Servico'
                                    width={6}
                                >
                                    <InputMask
                                       mask="999.999.999.999"
                                        maskChar={null}
                                        //placeholder="Ex: R$ 100,00"
                                        value={cliente}
                                        onChange={e => setCliente(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-ordemServico'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}

                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}