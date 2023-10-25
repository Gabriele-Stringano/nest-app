import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = {
    openapi: '3.0.0',
    info: {
      title: 'Api Nest',
      description: 'Api di porva in nest',
      // sembra essere una descrizione più breve
      'x-summary': 'escrzione breve?',
      version: '1.0.0',
      termsOfService: 'nessuno',
      contact: {
        name: 'Gabriele',
        url: '',
        email: 'gs@gmail.com',
      },
      // Some APIs use API keys for authorization. An API key is a token that a client provides when making API calls. The key can be sent in the query string:
      // Potrebbe essere questo il campo
      'x-api-id': '',
    },
    tags: [
      {
        name: 'USERS',
        description: 'Api per gestire utenti con nome e eta',
      },
    ],
    /* externalDocs: {
      description: 'OpenAPI JSON',
      url: '/api-json',
    },
    servers: [
      {
        url: '',
        description: 'server di test',
        'x-sandbox': true,
      },
    ],
    security: [
      {
        'x-api-key': [],
      },
    ],
     components: {
       securitySchemes: {
         'x-api-key': {
           type: 'apiKey',
           name: 'x-api-key',
           in: 'header',
         }  as 'SecuritySchemeObject', 
       },
     }*/
  };

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document, {
    // customCss: CUSTOM_STYLE,
    customSiteTitle: 'pnd-api',
    // customfavIcon: '../favicon.jpg'
  });

  await app.listen(3000);

  const URL = await app.getUrl();
  console.info(`bootstrap: Server running at ${URL}`);
  console.info(`Swagger running at ${URL}/api`);
  console.info(`OpenAPI JSON at ${URL}/api-json`);
}
bootstrap()
  .then(() => console.log('Nest application started successfully.'))
  .catch((error) =>
    console.error(`Error starting Nest application: ${error.message}`),
  );
