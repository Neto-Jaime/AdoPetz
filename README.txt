AdoPetz
AdoPetz é um sistema de adoção de pets que facilita o gerenciamento de animais disponíveis para adoção, permitindo seu cadastro, listagem, atualização e exclusão de maneira simples e intuitiva. O sistema é desenvolvido usando Node.js, Express e MongoDB no backend, com Angular e Bootstrap no frontend para a construção da interface de usuário.

Tecnologias Utilizadas
Node.js e Express: Para a construção da API backend.
MongoDB: Banco de dados NoSQL para armazenar os dados dos pets.
Mongoose: Para modelagem de dados no MongoDB.
Angular: Framework frontend para criar uma aplicação web moderna e responsiva.
Bootstrap: Biblioteca de CSS para estilização rápida e responsiva.
Thunder Client (ou Postman): Para testar as requisições da API.
Funcionalidades Atuais
Cadastro de pets: Adiciona novos pets ao sistema, com informações como nome, espécie, raça, idade, descrição, entre outros.
Listagem de pets: Exibe uma lista de todos os animais cadastrados no banco de dados.
Atualização de pets: Permite a edição das informações dos pets.
Remoção de pets: Remove pets da lista de adoção com base em critérios específicos.
O que Ainda Será Implementado
Lógica de Usuário: Implementação de autenticação de usuários, onde somente administradores ou assistentes veterinários autorizados poderão cadastrar, editar ou remover pets.
Sistema de Filtros: Adicionar filtros de busca para permitir que os usuários possam pesquisar pets com base em critérios como espécie, idade, raça, entre outros.
Estilização Completa: Aplicar estilos mais detalhados e personalizados em toda a interface, utilizando ainda mais recursos do Bootstrap para uma melhor experiência de usuário.
Funcionalidades de Adoção: Permitir que os usuários sinalizem quando um pet foi adotado e removê-lo automaticamente da lista de disponíveis.
Mensagens e Feedbacks: Adicionar mensagens de confirmação e feedback para ações como cadastro, atualização e remoção de pets, proporcionando uma experiência mais amigável.
Validação de Formulários: Aprimorar a validação dos dados de entrada dos usuários tanto no frontend quanto no backend, garantindo que as informações sejam consistentes.
Imagens de Pets: Possibilitar o upload de fotos dos pets para que os usuários possam visualizar os animais antes da adoção.
Próximos Passos
Autenticação de Usuário:

Implementar um sistema de login para garantir que apenas usuários autenticados possam gerenciar os pets.
Implementar o registro e autenticação de usuários.
Sistema de Filtro Avançado:

Adicionar opções para filtrar os pets por características, como idade, espécie, raça e status de adoção.
Melhorias no Design:

Continuar estilizando o sistema com mais elementos do Bootstrap, visando um design mais limpo, moderno e responsivo.
Aplicar animações e transições para melhorar a interatividade.
Dashboard para Administradores:

Criar um painel administrativo para facilitar o gerenciamento dos pets e usuários.
Feedback Visual e UX:

Exibir mensagens de sucesso, erro e confirmações mais claras durante as interações, como envio de formulários e atualizações.
Implementação de Paginação:

Adicionar paginação para lidar com grandes volumes de pets na listagem.
Contribuições Futuras
Futuras melhorias podem incluir:

Sistema de Favoritos: Usuários poderão marcar animais como favoritos e visualizá-los posteriormente.
Notificações por Email: Enviar notificações por email quando novos pets forem adicionados ou adotados.
Integração com Redes Sociais: Adicionar a opção de compartilhar os perfis dos pets nas redes sociais, ajudando a divulgar os animais disponíveis para adoção.
Como Rodar o Projeto
Instale as dependências do backend e frontend, e configure o MongoDB localmente.
Rode o backend com Node.js e o frontend com Angular, garantindo que ambos estão funcionando corretamente.
Teste a API usando ferramentas como Thunder Client ou Postman para verificar as funcionalidades implementadas até o momento.
Dicas para Melhorar o Sistema
Experiência do Usuário (UX): Ao implementar novos recursos, pense sempre na simplicidade e facilidade de uso. Menos cliques e navegação intuitiva podem tornar o sistema mais eficiente.
Segurança: Considere a implementação de HTTPS para o frontend e backend, além de medidas de segurança como sanitização de dados e criptografia de senhas.
Testes Automatizados: Adicionar testes unitários e de integração para garantir que o sistema funcione corretamente à medida que novas funcionalidades são adicionadas.
Acessibilidade: Seguir boas práticas de acessibilidade web (como WCAG) para garantir que o sistema seja acessível para todos, incluindo pessoas com deficiências visuais e motoras.
Licença
Esse projeto está licenciado sob a licença MIT. Sinta-se à vontade para contribuir e sugerir melhorias.


