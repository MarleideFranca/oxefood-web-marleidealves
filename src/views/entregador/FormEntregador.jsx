//import axios from "axios";
import React, { useState } from "react"
import InputMask from "react-input-mask"
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react"
import MenuSistema from '../../MenuSistema';

const ufList = [
  {
    key: '',
    text: '',
    value: ''
  },
  {
    key: 'o',
    text: 'Alagoas',
    value: 'AL'
  },
  {
    key: 'f',
    text: 'Paraíba',
    value: 'PB'
  },
  {
    key: 'm',
    text: 'Pernambuco',
    value: 'PE'
  },
  {
    key: 'b',
    text: 'Bahia',
    value: 'BA'
  },
  {
    key: 'c',
    text: 'Ceará',
    value: 'CE'
  },
  {
    key: 'ma',
    text: 'Maranhão',
    value: 'MA'
  },
  {
    key: 'p',
    text: 'Piauí',
    value: 'PI'
  },
  {
    key: 'r',
    text: 'Rio Grande do Norte',
    value: 'RN'
  },
  {
    key: 's',
    text: 'Sergipe',
    value: 'SE'
  },

]


export default function FormEntregador() {

  /*const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [foneCelular, setFoneCelular] = useState();
  const [foneFixo, setFoneFixo] = useState();
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
  const [valorFrete, setValorFrete] = useState();
  const [enderecoRua, setEnderecoRua] = useState();
  const [enderecoNumero, setEnderecoNumero] = useState();
  const [enderecoBairro, setEnderecoBairro] = useState();
  const [enderecoCidade, setEnderecoCidade] = useState();
  const [enderecoCep, setEnderecoCep] = useState();
  const [enderecoUf, setEnderecoUf] = useState();
  const [enderecoComplemento, setEnderecoComplemento] = useState;
  const [ativo, setAtivo] = useState;

  function salvar() {

		let entregadorRequest = {
		     nome: nome,
         cpf: cpf,
		     rg: rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
         qtdEntregasRealizadas: qtdEntregasRealizadas,
         valorFrete: valorFrete,
         enderecoRua: enderecoRua,
         enderecoNumero: enderecoNumero,
         enderecoBairro: enderecoBairro,
         enderecoCidade: enderecoCidade,
         enderecoCep: enderecoCep,
         enderecoUf: enderecoUf,
         enderecoComplemento: enderecoComplemento,
         ativo: ativo
		}
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um entregador.')
		})
	}

*/
  return (
    <div>
      <MenuSistema tela={'entregador'} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign='justified'>
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Entregador &nbsp;
              <Icon
                name='angle double right'
                size='small'
              />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Nome'
                  maxLength='100'
                 // value={nome}
                  //onChange={e => setNome(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  label='CPF'
                >
                  <InputMask
                    required
                    mask='999.999.999-99'
                   // value={cpf}
                    //onChange={e => setCpf(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  label='RG'
                >
                  <InputMask
                    required
                    mask='9.999.999'
                    //value={rg}
                    //onChange={e => setRg(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input
                  fluid
                  label='DT Nascimento'
                  width={6}
                >
                  <InputMask
                    mask='99/99/9999'
                    maskChar={null}
                    placeholder='Ex: 20/03/1985'
                    //value={dataNascimento}
                    //onChange={e => setDataNascimento(e.target.value)}
                  />
                </Form.Input>

                <Form.Input
                  fluid
                  required
                  label='Fone Celular'
                  width={6}
                  //value={foneCelular}
                  //onChange={e => setFoneCelular(e.target.value)}
                >
                  <InputMask mask='(99) 9999.9999' />
                 
                </Form.Input>

                <Form.Input
                  fluid
                  label='Fone Fixo'
                  width={6}
                  //value={foneFixo}
                  //onChange={e => setFoneFixo(e.target.value)}
                >
                  <InputMask mask='(99) 9999.9999' />
                  
                </Form.Input>

                <Form.Input
                  fluid
                  label='QTD Entregas Realizadas'
                  width={6}
                 // value={qtdEntregasRealizadas}
                  //onChange={e => setQtdEntregasRealizadas(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label='Valor Por Frete'
                  width={6}
                  //value={valorFrete}
                 // onChange={e => setValorFrete(e.target.value)}
                ></Form.Input>
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Rua'
                  maxLength='100'
                 // value={enderecoRua}
                 // onChange={e => setEnderecoRua(e.target.value)}
                />

                <Form.Input
                  fluid
                  label='Número'
                  //value={enderecoNumero}
                  //onChange={e => setEnderecoNumero(e.target.value)}
                >

                </Form.Input>


              </Form.Group>


              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Bairro'
                  maxLength='100'
                 // value={enderecoBairro}
                 // onChange={e => setEnderecoBairro(e.target.value)}
                />

                <Form.Input
                  fluid
                  label='Cidade'
                  //value={enderecoCidade}
                  //onChange={e => setEnderecoCidade(e.target.value)}
                >

                </Form.Input>

                <Form.Input
                  fluid
                  label='CEP'
                  //value={enderecoCep}
                  //onChange={e => setEnderecoCep(e.target.value)}
                >

                </Form.Input>


              </Form.Group>

              <Form.Select
                fluid
                label='UF'
                options={ufList}
                placeholder='Selecione'
                //value={enderecoUf}
                //onChange={e=> setEnderecoUf(e.target.value)}
                //onChange={(e, { value }) => {
                  //setEnderecoUf(value)}}
              />

              <Form.Input
                fluid
                label='Complemento'
                //value={enderecoComplemento}
                //onChange={e => setEnderecoComplemento(e.target.value)}
              />

              <Form.Group inline>

                <label>Ativo: </label>

                <Form.Radio
                  label='Sim'
                  //checked={ativo}
                  //onChange={e => setAtivo(true)}
                />

                <Form.Radio
                  label='Não'
                  //checked={!ativo}
                  //onChange={e => setAtivo(false)}
                />

              </Form.Group>

            </Form>



            <div style={{ marginTop: "4%" }}>
              <Button
                type='button'
                inverted
                circular
                icon
                labelPosition='left'
                color='orange'
              >
                <Icon name='reply' />
                Voltar
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition='left'
                color='blue'
                floated='right'
                //onClick={() => salvar()}
              >
                <Icon name='save' />
                Salvar
              </Button>

            </div>
          </div>
        </Container>

      </div >
    </div >

  )
}
