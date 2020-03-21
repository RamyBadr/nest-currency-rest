"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app, env) {
    const schema = {
        production: 'https',
        staging: 'https',
        development: 'http',
    };
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setVersion('0.0.1')
        .addBearerAuth()
        .setSchemes(schema[env])
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('documentation', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=viveo-swagger.js.map