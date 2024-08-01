import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Modal,
  Table,
} from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function ListOrdemServico() {
  const [lista, setLista] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState();

  useEffect(() => {
    carregarLista();
  }, []);

  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id);
  }

  async function remover() {
    await axios
      .delete("http://localhost:8080/api/ordemServico/" + idRemover)
      .then((response) => {
        console.log("Ordem de Serviço removido com sucesso.");

        axios.get("http://localhost:8080/api/ordemServico").then((response) => {
          setLista(response.data);
        });
      })
      .catch((error) => {
        console.log("Erro ao remover uma ordem de serviço.");
      });
    setOpenModal(false);
  }

  function carregarLista() {
    axios.get("http://localhost:8080/api/ordemServico").then((response) => {
      setLista(response.data);
    });
  }

  function formatarData(dataParam) {
    if (dataParam === null || dataParam === "" || dataParam === undefined) {
      return "";
    }

    let arrayData = dataParam.split("-");
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  }
  return (
    <div>
      <MenuSistema tela={"ordemServico"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2> Ordem de Servico</h2>
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Button
              label="Novo"
              circular
              color="orange"
              icon="clipboard outline"
              floated="right"
              as={Link}
              to="/form-ordemServico"
            />
            <br />
            <br />
            <br />

            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Número</Table.HeaderCell>
                  <Table.HeaderCell>Peças Utilizadas</Table.HeaderCell>
                  <Table.HeaderCell>Data do Serviço</Table.HeaderCell>
                  <Table.HeaderCell>Serviços Efetuados</Table.HeaderCell>
                  <Table.HeaderCell>Cliente</Table.HeaderCell>
                  <Table.HeaderCell>Valor do Serviço</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((ordemServico) => (
                  <Table.Row key={ordemServico.id}>
                    <Table.Cell>{ordemServico.numero}</Table.Cell>
                    <Table.Cell>{ordemServico.pecasUtilizadas}</Table.Cell>
                    <Table.Cell>
                      {formatarData(ordemServico.dataServico)}
                    </Table.Cell>
                    <Table.Cell>{ordemServico.servicosEfetuados}</Table.Cell>
                    <Table.Cell>{ordemServico.cliente}</Table.Cell>
                    <Table.Cell>{ordemServico.valorServico}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
                        title="Clique aqui para editar os dados desta ordem de serviço"
                        icon
                      >
                        <Link
                          to="/form-ordemServico"
                          state={{ id: ordemServico.id }}
                          style={{ color: "green" }}
                        >
                          {" "}
                          <Icon name="edit" />{" "}
                        </Link>
                      </Button>{" "}
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover esta ordem de serviço"
                        icon
                        onClick={(e) => confirmaRemover(ordemServico.id)}
                      >
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>

      <Modal
        basic
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={openModal}
      >
        <Header icon>
          <Icon name="trash" />
          <div style={{ marginTop: "5%" }}>
            {" "}
            Tem certeza que deseja remover esse registro?{" "}
          </div>
        </Header>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => setOpenModal(false)}
          >
            <Icon name="remove" /> Não
          </Button>
          <Button color="green" inverted onClick={() => remover()}>
            <Icon name="checkmark" /> Sim
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
