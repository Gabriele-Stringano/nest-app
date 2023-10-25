import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = {
    openapi: '3.0.0',
    info: {
      title: '',
      description: '',
      'x-summary': '',
      version: '',
      termsOfService: '',
      contact: {
        name: '',
        url: '',
        email: '',
      },
      // così'e' qesto x-api-id?
      'x-api-id': '',
    },
    tags: [
      {
        name: '',
        description: '',
      },
    ],
    externalDocs: {
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
    /* components: {
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

  const URL = await app.getUrl();
  console.info(`bootstrap: Server running at ${URL}`);
  console.info(`Swagger running at ${URL}/api`);
  console.info(`OpenAPI JSON at ${URL}/api-json`);

  await app.listen(3000);
}
bootstrap()
  .then(() => console.log('Nest application started successfully.'))
  .catch((error) => console.error(`Error starting Nest application: ${error.message}`));;
