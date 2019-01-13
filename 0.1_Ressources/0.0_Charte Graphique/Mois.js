// Active le style des tooltips
$(function myFunction() {
	$('[data-toggle="tooltip"]').tooltip()
});

// Voir https://openclassrooms.com/forum/sujet/ajout-delements-html-par-tableau-js
//Tableau de données
var aLegumes = {
	'abricot' : ["abricots","abricot"],				'aubergine' : ["aubergines","aubergine"],
	'baby-boo'  :["baby-boos","baby_boo"],			'basilic' : ["basilic","basilic"],				'betterave' : ["betteraves","betterave"],
	'blette' : ["blettes","blette"],					'butternut' : ["butternuts","butternut"],
	'carotte' : ["carottes","carotte"],				'chou-rave' : ["choux-rave","chou_rave"],		'chou-romanesco' : ["choux romanesco","chou_romanesco"],
	'chou-vert' : ["choux vert","chou_vert"],			'concombre' : ["concombres","concombre"],		'courge-jack-be-little' : ["courges jack-be-little","jack"],	'courge-spaghetti' : ["courges spaghetti","spaghetti"],
	'echalion' : ["echalion","echalion"],				'echalote' : ["echalote","echalote"],			'epinard' : ["epinards","epinard"],
	'fenouil' : ["fenouils","fenouil"],				'fraise' : ["fraises","fraise"],				'frisee' : ["frisee","frisee"],
	'laurier' : ["laurier","laurier"],
	'mache' : ["mache","mache"],						'mini-poivron' : ["mini-poivrons","mini_poivron"],
	'navet-marteau' : ["navets marteaux","navet_marteau"],
	'oignon' : ["oignon","oignon"],
	'pain-de-sucre' : ["pains de sucre","pain_de_sucre"],	'patate' : ["patates","patate"],			'patisson' : ["patissons","patisson"],
	'peche' : ["peches","peche"], 					'persil' : ["persil","persil"],					'piment-doux' : ["piments doux","piment_doux"],
	'poivron' : ["poivrons","poivron"],				'pomme' : ["pommes","pomme"],					'potimarron' : ["potimarrons","potimarron"],
	'radis-noir' : ["radis noirs","radis_noir"],
	'scarole' : ["scarole","scarole"],
	'tomate' : ["tomates","tomate"],
};
/* Creation du contenu
* @param Object  oElementParent  Element quand lequel on va mettre le contenu
* @param Array   aDonnees         Tableau des données
*/
function createBloc(oElementParent, aDonnees){
	// Creation des balises
	var oLien = document.createElement("a"), oImage= document.createElement("img");

	oLien.href= "3.0_Légumes/" + aDonnees[1] + ".html";
	//les attributs de type data-[valeur] sont particuliés
	// Soit on les ajoute avec setAttribute et recupère avec getAttribute
	oLien.setAttribute("data-toggle","tooltip");
	// Soit passe pas la propriété dataset.[valeur] et recupère avec dataset.[valeur]
	if (aDonnees[0]=="basilic" || aDonnees[0]=="persil" ||aDonnees[0]=="laurier" ||aDonnees[0]=="oignon"||aDonnees[0]=="echalote")
	{oLien.dataset.title = "Qu'est-ce que j'assaisonne avec mon " + aDonnees[0]+  " ?";}
	else if (aDonnees[0]=="frisee" || aDonnees[0]=="scarole" ||aDonnees[0]=="pain-de-sucre"||aDonnees[0]=="mache")
	{oLien.dataset.title = "Comment je prépare ma " + aDonnees[0]+ "?";}
	else if (aDonnees[0]=="baby-boos" || aDonnees[0]=="choux romanesco" ||aDonnees[0]=="courges jack-be-little" ||aDonnees[0]=="courges spaghetti" ||aDonnees[0]=="pain-de-sucre" ||aDonnees[0]=="patissons")
	{oLien.dataset.title = "Je les cuis comment mes" + aDonnees[0]+ "?";}
	else {oLien.dataset.title = "Avec quoi je vais croquer mes " + aDonnees[0]+ "?";}
	// cependant si [valeur] a un tiret par exemple mon-title
	// tu devras faire oLien.dataset["mon-title"] = aDonnees[x] ou utiliser setAttribute

	oImage.alt= aDonnees[0];
	oImage.className="img-fluid img-legume";
	oImage.src = "0.1_Ressources/3.2_Légumes du mois/Images/" + aDonnees[1] + ".png";
	oLien.appendChild(oImage);
	// Ajoute le contenu
	oElementParent.appendChild(oLien);
	// si tu veux recuperer l'objet lien pour ....
	// return oLien;
}

//Quand le dom est disponible, pour simplifier quand le code html est accessible
document.addEventListener('DOMContentLoaded',function(){
	//Je recupère les éléments ayant une classe legume
	// getElementsByClassName renvoit toujours un tableau vide si pas de résultat
	var aElements = document.getElementsByClassName("legume");
	//Je parcours les éléments du tableau de résultats
	for(var i = 0; i < aElements.length; i++){
		//Je recherche si il y a la class patate
		if(aElements[i].classList.contains("abricot"))				{createBloc(aElements[i], aLegumes['abricot']);}
		if(aElements[i].classList.contains("aubergine"))			{createBloc(aElements[i], aLegumes['aubergine']);}
		if(aElements[i].classList.contains("baby-boo"))				{createBloc(aElements[i], aLegumes['baby-boo']);}
		if(aElements[i].classList.contains("basilic"))				{createBloc(aElements[i], aLegumes['basilic']);}
		if(aElements[i].classList.contains("betterave"))			{createBloc(aElements[i], aLegumes['betterave']);}
		if(aElements[i].classList.contains("blette"))				{createBloc(aElements[i], aLegumes['blette']);}
		if(aElements[i].classList.contains("butternut"))			{createBloc(aElements[i], aLegumes['butternut']);}
		if(aElements[i].classList.contains("carotte"))				{createBloc(aElements[i], aLegumes['carotte']);}
		if(aElements[i].classList.contains("chou-rave"))			{createBloc(aElements[i], aLegumes['chou-rave']);}
		if(aElements[i].classList.contains("chou-romanesco"))		{createBloc(aElements[i], aLegumes['chou-romanesco']);}
		if(aElements[i].classList.contains("chou-vert"))			{createBloc(aElements[i], aLegumes['chou-vert']);}
		if(aElements[i].classList.contains("courge-jack-be-little")){createBloc(aElements[i], aLegumes['courge-jack-be-little']);}
		if(aElements[i].classList.contains("courge-spaghetti"))		{createBloc(aElements[i], aLegumes['courge-spaghetti']);}
		if(aElements[i].classList.contains("concombre"))			{createBloc(aElements[i], aLegumes['concombre']);}
		if(aElements[i].classList.contains("echalion"))				{createBloc(aElements[i], aLegumes['echalion']);}
		if(aElements[i].classList.contains("echalote"))				{createBloc(aElements[i], aLegumes['echalote']);}
		if(aElements[i].classList.contains("epinard"))				{createBloc(aElements[i], aLegumes['epinard']);}
		if(aElements[i].classList.contains("fenouil"))				{createBloc(aElements[i], aLegumes['fenouil']);}
		if(aElements[i].classList.contains("fraise"))				{createBloc(aElements[i], aLegumes['fraise']);}
		if(aElements[i].classList.contains("frisee"))				{createBloc(aElements[i], aLegumes['frisee']);}
		if(aElements[i].classList.contains("laurier"))				{createBloc(aElements[i], aLegumes['laurier']);}
		if(aElements[i].classList.contains("mache"))				{createBloc(aElements[i], aLegumes['mache']);}
		if(aElements[i].classList.contains("mini-poivron"))			{createBloc(aElements[i], aLegumes['mini-poivron']);}
		if(aElements[i].classList.contains("navet-marteau"))		{createBloc(aElements[i], aLegumes['navet-marteau']);}
		if(aElements[i].classList.contains("oignon"))				{createBloc(aElements[i], aLegumes['oignon']);}
		if(aElements[i].classList.contains("pain-de-sucre"))		{createBloc(aElements[i], aLegumes['pain-de-sucre']);}
		if(aElements[i].classList.contains("patate"))				{createBloc(aElements[i], aLegumes['patate']);}
		if(aElements[i].classList.contains("patisson"))				{createBloc(aElements[i], aLegumes['patisson']);}
		if(aElements[i].classList.contains("peche"))				{createBloc(aElements[i], aLegumes['peche']);}
		if(aElements[i].classList.contains("persil"))				{createBloc(aElements[i], aLegumes['persil']);}
		if(aElements[i].classList.contains("piment-doux"))			{createBloc(aElements[i], aLegumes['piment-doux']);}
		if(aElements[i].classList.contains("poivron"))				{createBloc(aElements[i], aLegumes['poivron']);}
		if(aElements[i].classList.contains("pomme"))				{createBloc(aElements[i], aLegumes['pomme']);}
		if(aElements[i].classList.contains("potimarron"))			{createBloc(aElements[i], aLegumes['potimarron']);}
		if(aElements[i].classList.contains("radis-noir"))			{createBloc(aElements[i], aLegumes['radis-noir']);}
		if(aElements[i].classList.contains("scarole"))				{createBloc(aElements[i], aLegumes['scarole']);}
		if(aElements[i].classList.contains("tomate"))				{createBloc(aElements[i], aLegumes['tomate']);}
	}
});
