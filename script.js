// import horarios from './horarios.json' assert {type: 'json'}
let horarios = [
    { hora: "07:30 - 08:20", segunda: "Manut. Ensino",          terça: "Manut. Ensino",                 quarta: ["Desenv. Web I", "D04"],       quinta: "Administrativo",           sexta: "Manut. Ensino" },
    { hora: "08:20 - 09:10", segunda: "Manut. Ensino",          terça: ["A-Web Design", "D04"],         quarta: ["Desenv. Web I", "D04"],       quinta: "Administrativo",           sexta: "Manut. Ensino" },
    { hora: "09:10 - 10:00", segunda: "Manut. Ensino",          terça: ["A-Web Design", "D04"],         quarta: ["Desenv. Web I", "D04"],       quinta: "Administrativo",           sexta: "Manut. Ensino" },
    { hora: "10:00 - 10:20", segunda: "Intervalo",              terça: "Intervalo",                     quarta: "AA",                           quinta: "AA",                       sexta: "Intervalo" },
    { hora: "10:20 - 11:10", segunda: "Manut. Ensino",          terça: ["A-Web Design", "D04"],         quarta: "Administrativo",               quinta: ["Desenv. Web I", "D08"],   sexta: "Manut. Ensino" },
    { hora: "11:10 - 12:00", segunda: "Manut. Ensino",          terça: ["A-Web Design", "D04"],         quarta: "Administrativo",               quinta: ["Desenv. Web I", "D08"],   sexta: "Manut. Ensino" },
    { hora: "",              segunda: "Almoço",                 terça: "Almoço",                        quarta: "Almoço",                       quinta: "Almoço",                   sexta: "Almoço" },
    { hora: "13:30 - 14:20", segunda: ["A-Multimídia", "D04"],  terça: ["B-Web Design", "D04"],         quarta: "Reuniões",                     quinta: "Manut. Ensino",            sexta: ["B-Multimídia", "D04"] },
    { hora: "14:20 - 15:10", segunda: ["A-Multimídia", "D04"],  terça: ["B-Web Design", "D04"],         quarta: "Reuniões",                     quinta: "Manut. Ensino",            sexta: ["B-Multimídia", "D04"] },
    { hora: "15:10 - 15:30", segunda: "AA",                     terça: "AA",                            quarta: "Intervalo",                    quinta: "Intervalo",                sexta: "AA" },
    { hora: "15:30 - 16:20", segunda: ["A-Multimídia", "D04"],  terça: ["B-Web Design", "D04"],         quarta: "Manut. Ensino",                quinta: "Manut. Ensino",            sexta: ["B-Multimídia", "D04"] },
    { hora: "16:20 - 17:10", segunda: ["A-Multimídia", "D04"],  terça: ["B-Web Design", "D04"],         quarta: "Manut. Ensino",                quinta: "Manut. Ensino",            sexta: ["B-Multimídia", "D04"] },
    { hora: "", segunda: "", terça: "", quarta: "", quinta: "", sexta: "" },
    { hora: "18:30 - 19:00", segunda: "", terça: "", quarta: "", quinta: "", sexta: ["Algoritmos", "D7"] },
    { hora: "19:00 - 19:50", segunda: "", terça: "", quarta: "", quinta: "", sexta: ["Algoritmos", "D7"] },
    { hora: "19:50 - 20:40", segunda: "", terça: "", quarta: "", quinta: "", sexta: ["Algoritmos", "D7"] },
    { hora: "20:40 - 20:50", segunda: "", terça: "", quarta: "", quinta: "", sexta: "Intervalo" },
    { hora: "20:50 - 21:40", segunda: "", terça: "", quarta: "", quinta: "", sexta: ["Algoritmos", "D7"] },
    { hora: "21:40 - 22:30", segunda: "", terça: "", quarta: "", quinta: "", sexta: ["Algoritmos", "D7"] },
]
let legenda = [
    { name: "", color: "cinza"},
    { name: "Manut. Ensino", color:  "cor_1"}, 
    { name: ["AA", 'Atendimento ao Aluno'], color: "branco"},
    { name: "Reuniões", color: "reunioes"},
    { name: "Almoço", color: "branco"},
    { name: "Intervalo", color: "branco"},
    { name: "Administrativo", color: "cor_7"},
    { name: ["Desenv. Web I", 'Ciência da Computação'], color: "cor_3"},
    { name: ["A-Web Design", 'EMI'], color: "cor_4"},
    { name: ["B-Web Design", 'EMI'], color: "cor_4"},
    { name: ["A-Multimídia", 'EMI'], color: "cor_5"},
    { name: ["B-Multimídia", 'EMI'], color: "cor_5"},
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

        if (!['','Almoço', 'AA'].includes(name)) {

            
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