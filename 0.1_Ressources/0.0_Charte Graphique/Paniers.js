// Active le style des tooltips
$(function myFunction() {
	$('[data-toggle="tooltip"]').tooltip()
});

// Voir https://openclassrooms.com/forum/sujet/ajout-delements-html-par-tableau-js
//Tableau de données
var aLegumes = {
	'abricot' : ["abricots","0","abricot"],				'aubergine' : ["aubergines","1","aubergine"],
	'baby-boo'  :["baby-boos","2","baby_boo"],			'basilic' : ["basilic","1","basilic"],				'betterave' : ["betteraves","1","betterave"],
	'blette' : ["blettes","250 g","blette"],				'butternut' : ["butternuts","1/2","butternut"],
	'carotte' : ["carottes","500g","carotte"],			'chou-rave' : ["choux-rave","200g","chou_rave"],	'chou-romanesco' : ["choux romanesco","1","chou_romanesco"],
	'chou-vert' : ["choux vert","0","chou_vert"],			'concombre' : ["concombres","0","concombre"],		'courge-jack-be-little' : ["courges jack-be-little","2","jack"],	'courge-spaghetti' : ["courges spaghetti","1/2"],
	'echalion' : ["echalion","200g","echalion"],			'echalote' : ["echalote","0","echalote"],			'epinard' : ["epinards","0","epinard"],
	'fenouil' : ["fenouils","0","fenouil"],				'fraise' : ["fraises","0","fraise"],				'frisee' : ["frisee","1","frisee"],
	'laurier' : ["laurier","0","laurier"],
	'mache' : ["mache","100g","mache"],					'mini-poivron' : ["mini-poivrons","2","mini_poivron"],
	'navet-marteau' : ["navets marteaux","1","navet_marteau"],
	'oignon' : ["oignon","100g","oignon"],
	'pain-de-sucre' : ["pains de sucre","1/2","pain_de_sucre"],	'patate' : ["patates","250g","patate"],				'patisson' : ["patissons","1","patisson"],
	'peche' : ["peches","0","peche"], 					'persil' : ["persil","1","persil"],					'piment-doux' : ["piments doux","1","piment_doux"],
	'poivron' : ["poivrons","1","poivron"],				'pomme' : ["pommes","0","pomme"],					'potimarron' : ["potimarrons","2","potimarron"],
	'radis-noir' : ["radis noirs","1","radis_noir"],
	'scarole' : ["scarole","1","scarole"],
	'tomate' : ["tomates","500g","tomate"],
};
/* Creation du contenu
* @param Object  oElementParent  Element quand lequel on va mettre le contenu
* @param Array   aDonnees         Tableau des données
*/
function createBloc(oElementParent, aDonnees){
	// Creation des balises
	var oLien = document.createElement("a"), oImage= document.createElement("img");

	oLien.href= "3.0_Légumes/" + aDonnees[2] + ".html";
	//les attributs de type data-[valeur] sont particuliés
	// Soit on les ajoute avec setAttribute et recupère avec getAttribute
	oLien.setAttribute("data-toggle","tooltip");
	oLien.setAttribute("data-html","true");
	// Soit passe pas la propriété dataset.[valeur] et recupère avec dataset.[valeur]
	oLien.dataset.title = aDonnees[0] + "<br>" + "qté / " + aDonnees[1];
	// cependant si [valeur] a un tiret par exemple mon-title
	// tu devras faire oLien.dataset["mon-title"] = aDonnees[x] ou utiliser setAttribute

	oImage.alt= aDonnees[0];
	oImage.className="img-fluid img-legume";
	oImage.src = "0.1_Ressources/3.1_Paniers/Images/" + aDonnees[2] + ".png";
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
