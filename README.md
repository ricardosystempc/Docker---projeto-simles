
@'
# Docker - Projeto Simples

Aplicação web desenvolvida com HTML, CSS e JavaScript,
executada pelo Apache HTTP Server em um contêiner Docker.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Apache HTTP Server
- Docker
- Docker Compose

## Como executar

Com o Docker Desktop em execução, abra o terminal
nesta pasta e execute:

docker compose up -d

Acesse no navegador:

http://localhost:8080

## Como parar

docker compose down
'@ | Set-Content -Encoding utf8 README.md
