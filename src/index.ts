import { PrismaClient } from '@prisma/client';
import express, {Request, Response} from 'express';
import cors from 'cors';


const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


// Rota para obter cidades
app.get('/cidades', async (req: Request, res: Response) => {
    try {
        const cidades = await prisma.cidade.findMany();
        res.json(cidades);
    }
    catch (error) {
        console.error('Erro ao buscar cidades:', error);
        res.status(500).json({ error: 'Erro ao buscar cidades' });
    }
});

app.post('/cidades', async (req: Request, res: Response) => {
    const { nome, estado, cep, cod_ibge } = req.body;
    try {
        const cidade = await prisma.cidade.create({
            data: {
                CID_NOME: nome,
                CID_UF: estado,
                CID_CEP: cep,
                CID_IBGE: cod_ibge
            }
        });

        res.status(201).json(cidade);
    }
    catch (error) {
        console.error('Erro ao criar cidade:', error);
        res.status(500).json({ error: 'Erro ao criar cidade'});
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
    