$(document).ready(function()
{
	var time = 150;
	$("#menu ul").hide();
	$(function() {
		$('#menu1').mouseover(function(){$('#menu1').children("ul").slideDown(time);});
		$('#menu1').mouseleave(function(){$('#menu1').children("ul").slideUp(time);});
		$('#menu2').mouseover(function(){$('#menu2').children("ul").slideDown(time);});
		$('#menu2').mouseleave(function(){$('#menu2').children("ul").slideUp(time);});
		$('#menu3').mouseover(function(){$('#menu3').children("ul").slideDown(time);});
		$('#menu3').mouseleave(function(){$('#menu3').children("ul").slideUp(time);});
		$('#menu4').mouseover(function(){$('#menu4').children("ul").slideDown(time);});
		$('#menu4').mouseleave(function(){$('#menu4').children("ul").slideUp(time);});
		$('#menu5').mouseover(function(){$('#menu5').children("ul").slideDown(time);});
		$('#menu5').mouseleave(function(){$('#menu5').children("ul").slideUp(time);});
	}); 
});

function wordCount(){
	setTimeout(function() {
		var doc = {T:82, I:1011, C:1829};
		var spart11 = {T:12, I:206, C:4132};
		var spart12 = {T:25, I:190, C:5308};
		var spart13 = {T:15, I:282, C:4477};
		var spart21 = {T:22, I:282, C:4359};
		var spart22 = {T:18, I:309, C:4478};
		var spart23 = {T:9, I:277, C:3545};
		var sparts1 = [spart11, spart12, spart13];
		var part1 = {T:14, I:442, C:sparts1};
		var sparts2 = [spart21, spart22, spart23];
		var part2 = {T:20, I:668, C:sparts2};
		var parts = [part1, part2];
		var tips = {T:74, C:2414};
		var citations = {T:45, C:684};
		var sumTxt = doc.I + doc.C + tips.C;
		var sumAll = tips.T + citations.T + citations.C + doc.T;
		for(var i = 0; i < parts.length; i++) {
			for(var j = 0; j < parts[i].C.length; j++) {
				sumTxt += parts[i].C[j].C + parts[i].C[j].I;
				sumAll += parts[i].C[j].T;
			}
		}
		for(var i = 0; i < parts.length; i++) {
			sumTxt += parts[i].I;
			sumAll += parts[i].T;
		}
		sumAll += sumTxt;
		alert("Nombre de caractères à comptabiliser dans le cadre du projet PACE:\n==============================\n===========| " + sumTxt + " |===========\n==============================\n" +
			"Voici le détail du nombre de caractères (espaces compris) contenus sur cette page:\n(T : Titre, I : Intro, C : Contenu)\n\n" + 
			"Titre: " + doc.T + "\nIntroduction: " + doc.I + "\n" +
			"Partie 'Signes actuels': T: " + parts[0].T + ", I: " + parts[0].I + "\n" +
			" - 'Loi de Moore': T: " + parts[0].C[0].T + ", I: " + parts[0].C[0].I + ", C: " + parts[0].C[0].C + "\n" +
			" - 'Intelligence artificielle': T: " + parts[0].C[1].T + ", I: " + parts[0].C[1].I + ", C: " + parts[0].C[1].C + "\n" +
			" - 'Armée de robots': T: " + parts[0].C[2].T + ", I: " + parts[0].C[2].I + ", C: " + parts[0].C[2].C + "\n" +
			"Partie 'Théories pessimistes': T: " + parts[1].T + ", I: " + parts[1].I + "\n" +
			" - 'Evolution vers un monde instable': T: " + parts[1].C[0].T + ", I: " + parts[1].C[0].I + ", C: " + parts[1].C[0].C + "\n" +
			" - 'Singularité future': T: " + parts[1].C[1].T + ", I: " + parts[1].C[1].I + ", C: " + parts[1].C[1].C + "\n" +
			" - 'Trop tard': T: " + parts[1].C[2].T + ", I: " + parts[1].C[2].I + ", C: " + parts[1].C[2].C + "\n" +
			"Conclusion: " + doc.C + "\n\n" +
			"Tips (3): T: " + tips.T + ", C: " + tips.C + "\n" +
			"Citations (2): T: " + citations.T + ", C: " + citations.C + "\n\n" +
			"Total du contenu (sans Citations et Titres): " + sumTxt + "\n" +
			"Total du texte de la page: " + sumAll);
	}, 500);
}

function changeBg(pic){
	var bkgnd = "polyRed.png";
	switch(pic){
		case 0: bkgnd = "polyRed.png";break;
		case 1: bkgnd = "BattleFront.png";break;
		case 2: bkgnd = "Intel.jpg";break;
		case 3: bkgnd = "Planetside2_1.png";break;
		case 4: bkgnd = "Planetside2_2.png";break;
		case 5: bkgnd = "Atom.png";break;
		default: bkgnd = "polyRed.png";
	}
	$('body').css('background-image', 'url("img/bkgnd/' + bkgnd + '")');
}