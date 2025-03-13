
// ================= ALUNOS =================

        // buscar todos os alunos
        async function fetchAlunos() {
            try {
                const response = await fetch('http://localhost:3000/alunos');
                if (!response.ok) {
                    throw new Error('Falha ao buscar alunos');
                }
                const alunos = await response.json();
                
                // tabela alunos
                const alunosTable = document.getElementById('alunos');
                alunosTable.innerHTML = alunos.map(aluno => `
                    <tr>
                        <td>${aluno.id}</td>
                        <td>${aluno.nome}</td>
                        <td>${aluno.idade}</td>
                        <td>
                            <button onclick="editAluno(${aluno.id})">Editar</button>
                            <button onclick="deleteAluno(${aluno.id})">Excluir</button>
                        </td>
                    </tr>
                `).join('');
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        }

        // adicionar um novo aluno
        async function addAluno() {
            const nome = document.getElementById('nome').value;
            const idade = parseInt(document.getElementById('idade').value, 10);

            try {
                const response = await fetch('http://localhost:3000/alunos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, idade })
                });
                
                if (!response.ok) {
                    throw new Error('Falha ao adicionar aluno');
                }

                fetchAlunos();
            } catch (error) {
                console.error('Erro ao adicionar aluno:', error);
            }
        }

        // excluir aluno
        async function deleteAluno(id) {
            try {
                const response = await fetch(`http://localhost:3000/alunos/${id}`, { method: 'DELETE' });
                if (!response.ok) {
                    throw new Error('Falha ao excluir aluno');
                }

                fetchAlunos();
            } catch (error) {
                console.error('Erro ao excluir aluno:', error);
            }
        }

        //editar aluno
        async function editAluno(id) {

    const novoNome = prompt('Novo nome do aluno:');
    if (!novoNome) return;

    const novaIdade = prompt('Nova idade do aluno:');
    if (!novaIdade) return;

    if (isNaN(novaIdade) || novaIdade <= 0) {
        alert('Por favor, insira uma idade válida.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: novoNome, idade: parseInt(novaIdade) })
        });

        if (!response.ok) {
            throw new Error('Falha ao salvar alterações');
        }

        fetchAlunos();
    } catch (error) {
        console.error('Erro ao salvar alterações:', error);
    }

        }

// ================= Professores =================

        // buscar todos os professores
        async function fetchProfessores() {
            try {
                const response = await fetch('http://localhost:3000/professores');
                if (!response.ok) {
                    throw new Error('Falha ao buscar professores');
                }
                const professores = await response.json();

                // tabela professores
                const professoresTable = document.getElementById('professores');
                professoresTable.innerHTML = professores.map(professor => `
                    <tr>
                        <td>${professor.id}</td>
                        <td>${professor.nome}</td>
                        <td>${professor.disciplina}</td>
                        <td>
                            <button onclick="editProfessor(${professor.id})">Editar</button>
                            <button onclick="deleteProfessor(${professor.id})">Excluir</button>
                        </td>
                    </tr>
                `).join('');
            } catch (error) {
                console.error('Erro ao buscar professores:', error);
            }
        }

        // adicionar novo professor
        async function addProfessor() {
            const nome = document.getElementById('nome-professor').value;
            const disciplina = document.getElementById('disciplina').value;

            if (!nome || !disciplina) {
                alert("Preencha todos os campos!");
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/professores', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, disciplina })
                });

                if (!response.ok) {
                    throw new Error('Falha ao adicionar professor');
                }

                const professor = await response.json();
                console.log('Professor adicionado:', professor);

                fetchProfessores();

            } catch (error) {
                console.error('Erro ao adicionar professor:', error);
            }
}

        // excluir professor
        async function deleteProfessor(id) {
            try {
                const response = await fetch(`http://localhost:3000/professores/${id}`, { method: 'DELETE' });
                if (!response.ok) {
                    throw new Error('Falha ao excluir professor');
                }

                fetchProfessores();
            } catch (error) {
                console.error('Erro ao excluir professor:', error);
            }
        }

        // editar professor
        async function editProfessor(id) {

            const novoNome = prompt('Novo nome do professor:');
            if (!novoNome) return; 

            const novaDisciplina = prompt('Nova disciplina do professor:');
            if (!novaDisciplina) return;

            try {

                const response = await fetch(`http://localhost:3000/professores/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome: novoNome, disciplina: novaDisciplina })
                });

                if (!response.ok) {
                    throw new Error('Falha ao salvar alterações');
                }

                fetchProfessores();
            } catch (error) {
                console.error('Erro ao salvar alterações:', error);
            }

        }

// // ================= Boletim ================= 

        // buscar boletins
        async function fetchBoletins() {
            try {
                const response = await fetch('http://localhost:3000/boletins');
                if (!response.ok) throw new Error('Falha ao buscar boletins');
                const boletins = await response.json();

                const boletinsTable = document.getElementById('boletins');
                boletinsTable.innerHTML = boletins.map(boletim => `
                    <tr>
                        <td>${boletim.id}</td>
                        <td>${boletim.aluno.nome}</td>
                        <td>${boletim.professor.nome}</td>
                        <td>${boletim.disciplina}</td>
                        <td>${boletim.nota1}, ${boletim.nota2}, ${boletim.nota3}</td>
                        <td>
                            <button onclick="deleteBoletim(${boletim.id})">Excluir</button>
                        </td>
                    </tr>
                `).join('');
            } catch (error) {
                console.error('Erro ao buscar boletins:', error);
            }
        }

        // adicionar boletim
        async function addBoletim() {
            const alunoId = document.getElementById('alunoId').value;
            const professorId = document.getElementById('professorId').value;
            const disciplina = document.getElementById('disciplinaBoletim').value;
            const nota1 = document.getElementById('nota1').value;
            const nota2 = document.getElementById('nota2').value;
            const nota3 = document.getElementById('nota3').value;

            if (!alunoId || !professorId || !disciplina || !nota1 || !nota2 || !nota3) {
                alert('Preencha todos os campos!');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/boletins', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        alunoId: parseInt(alunoId),
                        professorId: parseInt(professorId),
                        disciplina,
                        nota1: parseFloat(nota1),
                        nota2: parseFloat(nota2),
                        nota3: parseFloat(nota3)
                    })
                });

                if (!response.ok) {
                    throw new Error('Falha ao adicionar boletim');
                }

                alert('Boletim adicionado com sucesso!');
                fetchBoletins(); 
            } catch (error) {
                console.error('Erro ao adicionar boletim:', error);
            }
        }

        // excluir boletim
        async function deleteBoletim(id) {
            try {
                const response = await fetch(`http://localhost:3000/boletins/${id}`, { method: 'DELETE' });
                if (!response.ok) {
                    throw new Error('Falha ao excluir boletim');
                }

                fetchBoletins();
            } catch (error) {
                console.error('Erro ao excluir boletim:', error);
            }
        }
        // Carregar dados aluno, professor e boletim
        window.onload = () => {
            fetchAlunos();
            fetchProfessores();
            fetchBoletins();
        };
