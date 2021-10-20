# Cadastro de carro

**RF**
Deve ser possivel cadastrar um novo carro

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente
O carro deve ser cadastrado, por padrão, com disponibilidade
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**RF**
Deve ser possivel listar os carros
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
O usuario não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel uma especificação ja existente para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duração minima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario
Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro
O usuario deve estar logado na aplicação
Ao realizar um aluguel, o status deverá ser alterado para indisponivel

# Devolução de carro

**RF**
Deve ser possivel realizar a devolução de um carro

**RN**
Se o carro devolvido com menos de 24 horas, deverá ser cobrado diaria completa
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
Ao realizar a devolução, o usuario deverá ser liberado para outro aluguel
Ao realizar a devolução, deverá ser calculado o total do aluguel
Caso o horario de devolução seja superior ao horario previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso
Caso haja multa, deverá ser somado ao total do aluguel
O usuario deve estar logado na aplicação

# Listagem de alugueis para usuário

**RF**
Deve ser possivel realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação

# Recuperar senha

**RF**
Deve ser possível o usuário recuperar a senha informando o e-mail
O usuário deve receber um e-mail com o passo a passo para a recuperação de senha
O usuário deve conseguir inserir uma nova senha

**RN**
O usuario precisa informar uma nova senha
O link enviado para a recuperação deve expirar em 3 horas