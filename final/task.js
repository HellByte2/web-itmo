function addTable() {
    var body = document.querySelector("body"),
        tr = "",
        td = "",
		input = "",
		but = "";
	title = "";
	rowCounter = -1;
	cellCounter = 1;
	butType = document.getElementById("width").value;
	butWidth = document.getElementById("border").value;
	
	rows = document.getElementById("row").value;
    cols = document.getElementById("col").value;  
    table = document.createElement("table");
	table.id = "mainTable";
	title = document.createElement("caption");
    table.appendChild(title);
	$("#form").attr("hidden", "");
		
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
		tr.id = rowCounter;
		rowCounter--;
        for (var j = 0; j < cols; j++) {
			td = document.createElement("td");
			td.id = cellCounter;
			cellCounter++;
			input = document.createElement("textarea");
			but = document.createElement("input");
			but.type = "button";
			but.addEventListener("click", saveTextArea); 
			but.value = "Сохранить"
			td.appendChild(input);
			td.appendChild(but);
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	rowCounter++;
	cellCounter--;
	$("#form").attr("hidden", "");
	$("#functions").removeAttr("hidden");
	body.appendChild(table);
	$("#mainTable").attr("cellpadding", 2);
	$("#mainTable").attr("cellspacing", 0);
}

function saveTextArea(){
	var $mama = this.parentElement, 
		string = ""; 
		
	string = $mama.children[0].value;
	$mama.children[0].remove();
	$mama.children[0].remove();
	data = document.createElement("span");
	data.innerHTML = string;
	$mama.prepend(data);
} 

function addTitle(){
	title.innerHTML = "<h2>" + document.getElementById("title").value + "</h2>";
}

function editTable(){
	var border = "",
		width;
		
	border = document.getElementById("border").value;
	width = document.getElementById("width").value;
	
	$('td').css({'border':border + ' ' + width + 'px'});
}

function changerNumber(){
	butWidth = document.getElementById("width").value;
	document.getElementById("dynamicBut").value = "Применить " + butWidth + " px и рамка " + butType;
}

function changerList(){
	butType = document.getElementById("border").value;
	document.getElementById("dynamicBut").value = "Применить " + butWidth + " px и рамка " + butType;
}

function destroyTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
	
    document.body.removeChild(table);
	$("#functions").attr("hidden", "");
	$("#form").removeAttr("hidden");
}

function deleteRow() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		row = document.getElementById("rowDel").value,
		cells = cols * rows;
	
	for (i=row*cols+1; i <= cells; i++){
		cell = document.getElementById(i);
		cell.id = i-cols;
	}
	
	if (row > rows){
		alert("Такой строки не существует");
		return;
	}
	
	row = -row;
	
	rowDeleteString = "#" + row;
	$(rowDeleteString).remove();
	cellCounter = cellCounter - cols;
	
	for (var i=row-1; i >= -rows; i--){
		row = document.getElementById(i);
		row.id = i+1;
	}
	rows--;
}

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function magic() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		rand,
		color = "",
		col1,
		col2,
		col3,
		textHeight,
		choice;
	
	choice = randomInteger(1, cellCounter);
	randCell = document.getElementById(choice);
	
	rand = randomInteger(1, 4);
	if (rand == 1 && randCell.children[0].tagName=="SPAN"){
		randCell.children[0].remove();
		input = document.createElement("textarea");
		but = document.createElement("input");
		but.type = "button";
		but.addEventListener("click", saveTextArea); 
		but.value = "Сохранить"
		randCell.appendChild(input);
		randCell.appendChild(but);
		return;
	} 
	
	col1 = randomInteger(1, 255);
	col2 = randomInteger(1, 255);
	col3 = randomInteger(1, 255);
	textHeight = randomInteger(15, 25);
	colorBG = "rgb(" + col1 + ", " + col2 + ", " + col3 + ")";
	randCell.style.backgroundColor = colorBG;
	col1 = randomInteger(1, 255);
	col2 = randomInteger(1, 255);
	col3 = randomInteger(1, 255);
	colorText = "rgb(" + col1 + ", " + col2 + ", " + col3 + ")";
	randCell.style.color = colorText;
	randCell.style.fontSize = textHeight + "pt";
}





