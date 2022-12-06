import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';

import CadastroUsuario from './views/cadastro-usuario';

class App extends React.Component {
  render() {
    return (
      <div>
        <CadastroUsuario />
      </div>
    );
  }
}

export default App;
