// import horarios from './horarios.json' assert {type: 'json'}

let horarios = [
    { hora: "07:30 - 08:15", segunda: ["Linguagem de Programação II", "D0X"], terça: "Manutenção de Ensino", quarta: "", quinta: "Manutenção de Ensino", sexta: ["Linguagem de Programação II", "D04"] },
    { hora: "08:15 - 09:00", segunda: ["Linguagem de Programação II", "D0X"], terça: ["A-Web Design", "D07"], quarta: "", quinta: "Manutenção de Ensino", sexta: ["Linguagem de Programação II", "D04"] },
    { hora: "09:00 - 09:45", segunda: ["Linguagem de Programação II", "D0X"], terça: ["A-Web Design", "D07"], quarta: "", quinta: "Manutenção de Ensino", sexta: ["Linguagem de Programação II", "D04"] },
    { hora: "09:45 - 10:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "10:00 - 10:45", segunda: "Manutenção de Ensino", terça: ["Web Design", "D07"], quarta: "", quinta: ["Linguagem de Programação II", "D0X"], sexta: "Administrativo" },
    { hora: "10:45 - 11:30", segunda: "Manutenção de Ensino", terça: ["Web Design", "D07"], quarta: "", quinta: ["Linguagem de Programação II", "D0X"], sexta: "Administrativo" },
    { hora: "", segunda: "Almoço", terça: "Almoço", quarta: "Almoço", quinta: "Almoço", sexta: "Almoço" },
    { hora: "13:15 - 14:00", segunda: "Manutenção de Ensino", terça: ["B-Multimídia", "D04"], quarta: "Reuniões", quinta: ["B-Web Design", "D08"], sexta: ["A-Multimídia", "D04"] },
    { hora: "14:00 - 14:45", segunda: "Manutenção de Ensino", terça: ["B-Multimídia", "D04"], quarta: "Reuniões", quinta: ["B-Web Design", "D08"], sexta: ["A-Multimídia", "D04"] },
    { hora: "14:45 - 15:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "15:00 - 15:45", segunda: "Manutenção de Ensino", terça: ["B-Multimídia", "D04"], quarta: "Reuniões", quinta: ["B-Web Design", "D08"], sexta: ["A-Multimídia", "D04"] },
    { hora: "15:45 - 16:30", segunda: "Manutenção de Ensino", terça: ["B-Multimídia", "D04"], quarta: "Reuniões", quinta: ["B-Web Design", "D08"], sexta: ["A-Multimídia", "D04"] },
    { hora: "16:30 - 17:15", segunda: "Manutenção de Ensino", terça: "Atendimento ao Aluno", quarta: "Reuniões", quinta: "Atendimento ao Aluno", sexta: "Atendimento ao Aluno" },
    { hora: "", segunda: "", terça: "", quarta: "Intervalo", quinta: "", sexta: "" },
    { hora: "18:30 - 19:00", segunda: "", terça: "", quarta: "Atendimento ao Aluno", quinta: "", sexta: "" },
    { hora: "19:00 - 19:50", segunda: "", terça: "", quarta: ["Algoritmos", "D05"], quinta: "", sexta: "" },
    { hora: "19:50 - 20:40", segunda: "", terça: "", quarta: ["Algoritmos", "D05"], quinta: "", sexta: "" },
    { hora: "20:40 - 20:50", segunda: "", terça: "", quarta: "Intervalo", quinta: "", sexta: "" },
    { hora: "20:50 - 21:40", segunda: "", terça: "", quarta: ["Algoritmos", "D05"], quinta: "", sexta: "" },
    { hora: "21:40 - 22:30", segunda: "", terça: "", quarta: ["Algoritmos", "D05"], quinta: "", sexta: "" },
]
let legenda = [
    { name: "", color: "cinza"},
    { name: "Manutenção de Ensino", color:  "cor_1"}, 
    { name: "Atendimento ao Aluno", color: "cor_2"},
    { name: "Reuniões", color: "reunioes"},
    { name: "Almoço", color: "branco"},
    { name: "Intervalo", color: "branco"},
    { name: "Administrativo", color: "cor_7"},
    { name: ["Linguagem de Programação II", 'Ciência da Computação'], color: "cor_3"},
    { name: ["Web Design", 'EMI'], color: "cor_4"},
    { name: ["Multimídia", 'EMI'], color: "cor_5"},
    { name: ["Algoritmos", 'Engenharia Elétrica'], color: "cor_6"},
]


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();

        for (let key in element) {
            let cell = row.insertCell();
            let classe;
            let text;
            let span;

            // Se for uma aula com nome e lab
            if (Array.isArray(element[key])) {
                classe = legenda.find(e => e.name[0] == element[key][0]);
                text = document.createTextNode(element[key][0]);
                cell.append(createBadge(element[key][1]))
            } else {
                classe = legenda.find(e => e.name == element[key]);
                text = document.createTextNode(element[key]);
            }
            cell.className = classe == undefined ? "" : classe.color
            
            cell.appendChild(text);
        }
    }
}

function createBadge(text) {
    let span = document.createElement('span')
    span.className = 'badge'
    span.innerHTML = text
    return span
}

function generateLegenda(ul) {
    for (const element of legenda) {
        
        let name;
        let text;
        let li = document.createElement('li')
        li.classList.add(element.color)
        li.classList.add('clearfix')
        
        // Se for uma aula com nome e lab
        if (Array.isArray(element.name)) {
            name = element.name[0]
            li.append(createBadge(element.name[1]))
        } else {
            name = element.name
        }

        if (!['','Almoço', 'Intervalo'].includes(name)) {

            
            text = document.createTextNode(name)
            li.appendChild(text)
            ul.appendChild(li)
        }
    }
}
  
let table = document.querySelector("table");
let ul = document.querySelector("ul");
let data = Object.keys(horarios[0]);
generateTableHead(table, data);
generateTable(table, horarios);
generateLegenda(ul)