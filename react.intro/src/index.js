import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Anaïs Riollaci" },
      { id: 2, nom: "Olivier De Cacqueray" },
      { id: 3, nom: "Thomas Cabili" },
      { id: 4, nom: "Marguerite Talmite" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients: clients });
  };

  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
        <table>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </table>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
