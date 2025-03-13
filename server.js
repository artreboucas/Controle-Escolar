const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

// ================= ALUNOS =================

// obter todos os alunos
app.get('/alunos', async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
});


// adicionar aluno
app.post('/alunos', async (req, res) => {
  const { nome, idade } = req.body;  
  
  try {
    const aluno = await prisma.aluno.create({
      data: { nome, idade }  
    });

    res.json(aluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
});

// atualizar aluno
app.put('/alunos/:id', async (req, res) => {
  const { nome, idade } = req.body;
  
  try {
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(req.params.id) },
      data: { nome, idade }
    });
    res.json(aluno);
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
});

// remover aluno
app.delete('/alunos/:id', async (req, res) => {
  try {
    const aluno = await prisma.aluno.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(aluno);
  } catch (error) {
    console.error('Erro ao excluir aluno:', error);
    res.status(500).json({ error: 'Erro ao excluir aluno' });
  }
});

// ================= Professores =================

// obter todos os professores
app.get('/professores', async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.json(professores);
  } catch (error) {
    console.error('Erro ao buscar professores:', error);
    res.status(500).json({ error: 'Falha ao buscar professores' });
  }
});

// adicionar professor
app.post('/professores', async (req, res) => {
  try {
    const { nome, disciplina } = req.body;

    if (!nome || !disciplina) {
      return res.status(400).json({ error: 'Nome e disciplina são obrigatórios' });
    }

    const professor = await prisma.professor.create({
      data: { nome, disciplina }
    });

    res.json(professor);
  } catch (error) {
    console.error('Erro ao adicionar professor:', error);
    res.status(500).json({ error: 'Falha ao adicionar professor' });
  }
});

// remover professor
app.delete('/professores/:id', async (req, res) => {
  try {
    const professor = await prisma.professor.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(professor);
  } catch (error) {
    console.error('Erro ao excluir professor:', error);
    res.status(500).json({ error: 'Erro ao excluir professor' });
  }
});

// editar professor
app.put('/professores/:id', async (req, res) => {
  const { nome, disciplina } = req.body;
  
  try {
    const professor = await prisma.professor.update({
      where: { id: parseInt(req.params.id) },
      data: { nome, disciplina }
    });
    res.json(professor);
  } catch (error) {
    console.error('Erro ao atualizar professor:', error);
    res.status(500).json({ error: 'Erro ao atualizar professor' });
  }
});

// // ================= Boletim ================= 

// Buscar boletins
app.get('/boletins', async (req, res) => {
  const boletins = await prisma.boletim.findMany({
      include: { aluno: true, professor: true }
  });
  res.json(boletins);
});

// Criar boletim
app.post('/boletins', async (req, res) => {
  try {
    const { alunoId, professorId, disciplina, nota1, nota2, nota3} = req.body;

    if (!alunoId || !professorId || !disciplina || nota1 == null || nota2 == null || nota3 == null) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const boletim = await prisma.boletim.create({
      data: {
        alunoId: parseInt(alunoId),
        professorId: parseInt(professorId),
        disciplina,
        nota1: parseFloat(nota1),
        nota2: parseFloat(nota2),
        nota3: parseFloat(nota3),
      },
    });

    res.json(boletim);
  } catch (error) {
    console.error('Erro ao criar boletim:', error);
    res.status(500).json({ error: 'Falha ao criar boletim' });
  }
});

// remover boletim
app.delete('/boletins/:id', async (req, res) => {
  try {
    const boletim = await prisma.boletim.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(boletim);
  } catch (error) {
    console.error('Erro ao excluir boletim:', error);
    res.status(500).json({ error: 'Erro ao excluir boletim' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
