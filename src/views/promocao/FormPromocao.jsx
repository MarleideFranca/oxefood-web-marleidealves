import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormPromocao() {

    const { state } = useLocation();
    const [idPromocao, setIdPromocao] = useState();


    const [titulo, setTitulo] = useState();
    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [regra, setRegra] = useState();
    const [valorDesconto, setValorDesconto] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/promocao/" + state.id)
                .then((response) => {
                    setIdPromocao(response.data.id)
                    setTitulo(response.data.titulo)
                    setDataInicio(formatarData(response.data.dataInicio))
                    setDataFim(formatarData(response.data.dataFim))
                    setRegra(response.data.regra)
                    setValorDesconto(response.data.valorDesconto)
                })
        }
    }, [state])


    function salvar() {

        let promocaoRequest = {
            titulo: titulo,
            dataInicio:dataInicio,
            dataFim: dataFim,
            regra: regra,
            valorDesconto: valorDesconto
        }

        if (idPromocao != null) { //Alteração:
            axios.put("http://localhost:8080/api/promocao/" + idPromocao, promocaoRequest)
                .then((response) => {
                    console.log('Promocao alterada com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao alterar uma promoção.')
                })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/promocao", promocaoRequest)
                .then((response) => {
                    console.log('Promoção cadastrada com sucesso.')
                })
                .catch((error) => {
                    console.log('Erro ao incluir uma promoção.')
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
            <MenuSistema tela={'promocao'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idPromocao === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Promoção &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idPromocao != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Promoção &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Data Início'>
                                    <InputMask
                                        required
                                       // mask="999.999.999-99"
                                        placeholder="Ex: 20/03/1985"
                                        value={dataInicio} 
                                        onChange={e => setDataInicio(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data Fim'
                                    width={6}>
                                    <InputMask
                                        //mask="(99) 9999.9999"
                                        placeholder="Ex: 20/03/1985"
                                        value={dataFim}
                                        onChange={e => setDataFim(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Regra'
                                    width={6}>
                                    <InputMask
                                        //mask="(99) 9999.9999"
                                        value={regra}
                                        onChange={e => setRegra(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor do Desconto'
                                    width={6}
                                >
                                    <InputMask
                                        mask="999.999"
                                        maskChar={null}
                                        placeholder="Ex: 10.00"
                                        value={valorDesconto}
                                        onChange={e => setValorDesconto(e.target.value)}
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
                                <Link to={'/list-promocao'}>Voltar</Link>
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