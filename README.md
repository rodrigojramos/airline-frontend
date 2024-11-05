# Sistema de Reservas de Passagens - Frontend

Este é o frontend do sistema de reservas de passagens aéreas para uma companhia fictícia. O projeto faz parte de uma aplicação fullstack para permitir a compra de passagens, gerenciamento de voos e check-ins online, com áreas específicas para usuários e administradores.

Para acessar o repositório do backend, [clique aqui](https://github.com/rodrigojramos/airline).

---

## Sobre o Projeto

Este frontend permite que os usuários pesquisem e comprem passagens, visualizem dados dos próximos voos e realizem o check-in de forma intuitiva. Administradores podem gerenciar voos e passageiros diretamente na interface.

### Funcionalidades Principais

- **Usuário**: pesquisa e compra de passagens, check-in e acesso a dados de próximos voos.
- **Administração**: gerenciamento de voos, aeronaves e lista de passageiros.

## Tecnologias Utilizadas

- **HTML / CSS / JavaScript / TypeScript**
- **ReactJS**
- **React Router** (para navegação de páginas)

## Imagens / Demonstrações
![Tela de Login](./images/Airline%20-%20Tela%20de%20login.png)
![Tela inicial + pesquisa de passagens](./images/Airline%20-%20Tela%20de%20procura%20de%20passagens.png)
![Tela de Escolha de Passagens](./images/Airline%20-%20Tela%20de%20escolha%20de%20passagens.png)
![Tela de Área do Usuário](./images/Airline%20-%20Tela%20de%20área%20do%20usuário.png)
![Tela de Check-in](./images/Airline%20-%20Tela%20de%20check-in.png)
![Tela da Área do Administrador](./images/Airline%20-%20Tela%20área%20admistrador.png)
![Tela de Listagem dos Voos](./images/Airline%20-%20Tela%20listagem%20dos%20voos.png)
![Tela de Cadastro de Novo Voo](./images/Airline%20-%20Tela%20cadastro%20novo%20voo.png)
![Tela de Listagem dos Aviões](./images/Airline%20-%20Tela%20listagem%20dos%20aviões.png)
![Tela de Cadastro de Novo Avião](./images/Airline%20-%20Tela%20cadastro%20novo%20avião.png)

## Configuração e Instalação

### Pré-requisitos

- **Node.js** e **Yarn** (ou **npm**)
- **Backend configurado e em execução**: o frontend depende do backend para obter dados e realizar operações. Certifique-se de seguir as instruções do repositório do backend para configurá-lo e iniciá-lo antes de rodar o frontend.

### Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/rodrigojramos/airline-frontend.git
   cd airline-frontend

2. Instale as dependências:
   ```bash
   yarn install

3. Execute o frontend:
   ```bash
   yarn run dev
  Esse comando inicia o servidor de desenvolvimento. Acesse o aplicativo no navegador em http://localhost:5173.

### Credenciais para Testes

Para facilitar os testes da aplicação, as seguintes credenciais estão disponíveis:
- Usuário comun:
    - E-mail: rodrigo@gmail.com
    - Senha: 123456
- Administrador:
    - E-mail: adm@airline.com
    - Senha: 123456
  
### Próximos Passos
  - Integração de pagamento: implementação de um checkout para completar a compra de passagens.
  - Gerenciamento de fila de espera: utilização de Kafka ou RabbitMQ para filas de compra e check-in.

Para mais detalhes sobre a aplicação backend, acesse o repositório [aqui](https://github.com/rodrigojramos/airline).
