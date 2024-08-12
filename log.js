const winston = require('winston');

// Configuração do transportador para salvar logs em um arquivo
const transport = new winston.transports.File({
  filename: 'app.log',
  level: 'debug', // Define o nível mínimo de log que será registrado
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Define o formato das mensagens de log
  )
});

// Criação do logger
const logger = winston.createLogger({
  level: 'debug',
  transports: [transport]
});

// Função principal
function main() {
  logger.debug('Esta é uma mensagem de DEBUG.');
  logger.info('Esta é uma mensagem de INFO.');
  logger.warn('Esta é uma mensagem de WARNING.');
  logger.error('Esta é uma mensagem de ERROR.');
  // Winston não tem um nível crítico por padrão, vamos usar o 'error' para mensagens críticas
  logger.error('Esta é uma mensagem de CRITICAL.'); 
}

// Executa a função principal
main();
