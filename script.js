var div, sor, oszlop;
var db1,db2;
var leptet = 0;
var matrix=[];

var iranyvektorok = [ [-1,0],[1,0],//fuggoleges
                      [0,1],[0,-1],//vizszintes
                      [-1,1],[1,-1],//foatlo    
                      [-1,-1],[1,1] //mellekatlo    
];

function jatekosVane(aktsor,aktoszlop,jatekos)
{
    return matrix[aktsor][aktoszlop] == jatekos;
}
function matrixSzelet(aktsor,aktoszlop)
{
    return aktsor<0 || aktsor >= sor || aktoszlop < 0|| aktoszlop >= oszlop;
}                    
function megszamol(irany,jatekos,startx,starty)
        {
                let db =0;
                while(!matrixSzelet(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db) && 
                !jatekosVane(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db,jatekos))
                {
                    db++;
                }
                return db;
        }
function uresMatrix()

{
    for(var i = 0; i < sor; i++)
    {
        sorx=[];
        for(var j = 0; j < oszlop; j++)
        {
            sorx.push(0);
        }
        matrix.push(sorx);
    }
    console.log(matrix);
}





function kattint(td){
    if(leptet % 2 ==0){
        if(td.innerHTML == ""){
            td.innerHTML = "X";
        }
        
    }
    else{
        if(td.innerHTML == ""){
            td.innerHTML = "O";
        }
    }
    leptet++;
}

function TablaGeneralas(){
    
    sor = document.getElementById("sor").value;
    oszlop = document.getElementById("oszlop").value;
    div = document.getElementById("eredmeny");
    div.innerHTML = "";
    var table = document.createElement("table");
      
    for (let index = 0; index < sor; index++){
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td");
            td.setAttribute("onclick", "kattint(this)")
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}


