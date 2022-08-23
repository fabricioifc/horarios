// import horarios from './horarios.json' assert {type: 'json'}
let horarios = [
    { hora: "07:30 - 08:15", segunda: "Manut. Ensino", terça: "Administrativo", quarta: "Administrativo", quinta: "AA", sexta: "AA" },
    { hora: "08:15 - 09:00", segunda: "Manut. Ensino", terça: "Administrativo", quarta: "Administrativo", quinta: ["B-Multimídia", "D04"], sexta: ["B-Web Design", "D04"] },
    { hora: "09:00 - 09:45", segunda: "Manut. Ensino", terça: "Administrativo", quarta: "Administrativo", quinta: ["B-Multimídia", "D04"], sexta: ["B-Web Design", "D04"] },
    { hora: "09:45 - 10:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "10:00 - 10:45", segunda: "Manut. Ensino", terça: ["Web Design", "D04"], quarta: ["Ling. Prog. III", "D04"], quinta: ["B-Multimídia", "D04"], sexta: ["B-Web Design", "D04"] },
    { hora: "10:45 - 11:30", segunda: "Manut. Ensino", terça: ["Web Design", "D04"], quarta: ["Ling. Prog. III", "D04"], quinta: ["B-Multimídia", "D04"], sexta: ["B-Web Design", "D04"] },
    { hora: "", segunda: "Almoço", terça: "Almoço", quarta: "Almoço", quinta: "Almoço", sexta: "Almoço" },
    { hora: "13:15 - 14:00", segunda: "Manut. Ensino", terça: "Manut. Ensino", quarta: "Reuniões", quinta: ["A-Multimídia", "D04"], sexta: ["A-Web Design", "D04"] },
    { hora: "14:00 - 14:45", segunda: "Manut. Ensino", terça: "Manut. Ensino", quarta: "Manut. Ensino", quinta: ["A-Multimídia", "D04"], sexta: ["A-Web Design", "D04"] },
    { hora: "14:45 - 15:00", segunda: "Intervalo", terça: "Intervalo", quarta: "Intervalo", quinta: "Intervalo", sexta: "Intervalo" },
    { hora: "15:00 - 15:45", segunda: "Manut. Ensino", terça: "Manut. Ensino", quarta: "Manut. Ensino", quinta: ["A-Multimídia", "D04"], sexta: ["A-Web Design", "D04"] },
    { hora: "15:45 - 16:30", segunda: "Manut. Ensino", terça: "Manut. Ensino", quarta: "Manut. Ensino", quinta: ["A-Multimídia", "D04"], sexta: ["A-Web Design", "D04"] },
    { hora: "16:30 - 17:15", segunda: "Manut. Ensino", terça: "Manut. Ensino", quarta: "Manut. Ensino", quinta: "Administrativo", sexta: "AA" },
    // { hora: "", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "18:30 - 19:00", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "19:00 - 19:50", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "19:50 - 20:40", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "20:40 - 20:50", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "20:50 - 21:40", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    // { hora: "21:40 - 22:30", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
]
let legenda = [
    { name: "", color: "cinza"},
    { name: "Manut. Ensino", color:  "cor_1"}, 
    { name: ["AA", 'Atendimento ao Aluno'], color: "cor_2"},
    { name: "Reuniões", color: "reunioes"},
    { name: "Almoço", color: "branco"},
    { name: "Intervalo", color: "branco"},
    { name: "Administrativo", color: "cor_7"},
    { name: ["Ling. Prog. III", 'Ciência da Computação'], color: "cor_3"},
    { name: ["A-Web Design", 'EMI'], color: "cor_4"},
    { name: ["B-Web Design", 'EMI'], color: "cor_4"},
    { name: ["A-Multimídia", 'EMI'], color: "cor_5"},
    { name: ["B-Multimídia", 'EMI'], color: "cor_5"},
    { name: ["Web Design", 'Ciência da Computação'], color: "cor_6"},
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

function generateTable(table, horarios) {
    for (let element of horarios) {
        let row = table.insertRow();

        for (let key in element) {
            let cell = row.insertCell();
            let text;
            
            // Se for uma aula com nome e lab
            if (Array.isArray(element[key])) {
                text = document.createTextNode(element[key][0]);
                cell.append(createBadge(element[key][1]));
            } else {
                text = document.createTextNode(element[key]);
            }

            cell.classList.add(getColorFromLegenda(element[key]));
            cell.appendChild(text);
        }
    }
}

// Comparar o name da legenda com o name do horário para pegar a classe/cor
function getColorFromLegenda(horarioElemento) {
    let valueToCompare = Array.isArray(horarioElemento) ? horarioElemento[0] : horarioElemento;
    let classe = legenda.find(e => (Array.isArray(e.name) ? e.name[0] : e.name) == valueToCompare);
    return classe === undefined ? null : classe.color;
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