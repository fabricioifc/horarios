// import horarios from './horarios.json' assert {type: 'json'}

let horarios = [
    { hora: "07:30 - 08:15", segunda: "Manutenção de Ensino", terça: "Manutenção de Ensino", quarta: "", quinta: "Manutenção de Ensino", sexta: "Linguagem de Programação II" },
    { hora: "08:15 - 09:00", segunda: "Manutenção de Ensino", terça: "Web Design", quarta: "", quinta: "Manutenção de Ensino", sexta: "Linguagem de Programação II" },
    { hora: "09:00 - 09:45", segunda: "Manutenção de Ensino", terça: "Web Design", quarta: "", quinta: "Manutenção de Ensino", sexta: "Linguagem de Programação II" },
    { hora: "09:45 - 10:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "10:00 - 10:45", segunda: "Manutenção de Ensino", terça: "Web Design", quarta: "", quinta: "Manutenção de Ensino", sexta: "Atendimento ao Aluno" },
    { hora: "10:45 - 11:30", segunda: "Manutenção de Ensino", terça: "Web Design", quarta: "", quinta: "Manutenção de Ensino", sexta: "Atendimento ao Aluno" },
    { hora: "", segunda: "Almoço", terça: "Almoço", quarta: "Almoço", quinta: "Almoço", sexta: "Almoço" },
    { hora: "13:15 - 14:00", segunda: "Manutenção de Ensino", terça: "Multimídia", quarta: "Reuniões", quinta: "Web Design", sexta: "Multimídia" },
    { hora: "14:00 - 14:45", segunda: "Manutenção de Ensino", terça: "Multimídia", quarta: "Reuniões", quinta: "Web Design", sexta: "Multimídia" },
    { hora: "14:45 - 15:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "15:00 - 15:45", segunda: "Manutenção de Ensino", terça: "Multimídia", quarta: "Reuniões", quinta: "Web Design", sexta: "Multimídia" },
    { hora: "15:45 - 16:30", segunda: "Manutenção de Ensino", terça: "Multimídia", quarta: "Reuniões", quinta: "Web Design", sexta: "Multimídia" },
    { hora: "16:30 - 17:15", segunda: "Manutenção de Ensino", terça: "Atendimento ao Aluno", quarta: "Reuniões", quinta: "Atendimento ao Aluno", sexta: "Atendimento ao Aluno" },
    { hora: "", segunda: "", terça: "", quarta: "Intervalo", quinta: "", sexta: "" },
    { hora: "18:30 - 19:00", segunda: "", terça: "", quarta: "Atendimento ao Aluno", quinta: "", sexta: "" },
    { hora: "19:00 - 19:50", segunda: "", terça: "", quarta: "Algoritmos", quinta: "", sexta: "" },
    { hora: "19:50 - 20:40", segunda: "", terça: "", quarta: "Algoritmos", quinta: "", sexta: "" },
    { hora: "20:40 - 20:50", segunda: "", terça: "", quarta: "Intervalo", quinta: "", sexta: "" },
    { hora: "20:50 - 21:40", segunda: "", terça: "", quarta: "Algoritmos", quinta: "", sexta: "" },
    { hora: "21:40 - 22:30", segunda: "", terça: "", quarta: "Algoritmos", quinta: "", sexta: "" },
]
let colors = [
    { name: "Manutenção de Ensino", color:  "cor_1"}, 
    { name: "Atendimento ao Aluno", color: "cor_2"},
    { name: "", color: "cinza"},
    { name: "Reuniões", color: "reunioes"},
    { name: "Linguagem de Programação II", color: "cor_3"},
    { name: "Almoço", color: "branco"},
    { name: "Intervalo", color: "branco"},
    { name: "Web Design", color: "cor_4"},
    { name: "Multimídia", color: "cor_5"},
    { name: "Algoritmos", color: "cor_6"},
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

            let classe = colors.find(e => e.name == element[key]);
            cell.className = classe == undefined ? "" : classe.color

            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function generateLegenda(ul) {
    for (const element of colors) {
        if (!['','Almoço', 'Intervalo'].includes(element.name)) {
            let li = document.createElement('li')
            li.className = element.color

            let text = document.createTextNode(element.name)
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