"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const usuariosRoute_1 = require("./routes/usuariosRoute");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
const port = process.env.port || 3000;
app.use(express_1.default.json());
app.use('/usuario', usuariosRoute_1.usuarioRouter);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get('/', (req, res) => {
    res.send('Home');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
