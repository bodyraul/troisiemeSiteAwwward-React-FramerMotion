Bonjour à tous, le but ici est de faire un descriptif détaillé de mon application.

j'ai fais l'intégration d'un site que j'ai découvert sur la plateforme Awwward en modifiant le texte et les images graces à chatGPT et Leronardo (ia qui permet nottament de créér des images.).

Performances : 

<img width="2519" height="1272" alt="PerformanceTroisiemeAwward" src="https://github.com/user-attachments/assets/1e7d7a60-6949-4d1f-9c52-f218f4a4033e" />

Arborescence :

<img width="337" height="517" alt="arborescenceTroisieme" src="https://github.com/user-attachments/assets/69eec352-a7fd-4102-a969-dc33489db2a0" />

Exemple de composant :

<img width="1881" height="708" alt="codeTroisieme" src="https://github.com/user-attachments/assets/df292129-5a4e-47c2-b803-8a71f190b4c6" />

Ici j'ai créé le composant "Cards". 
Le Custom Hook "UseAnimCardsOnScroll" permet de changer la couleur et l'opacité de la div en fonction du scroll à l'aide de framer motion. 
Le Custom Hook "useSetColor" permet de changer la couleur de fond de l'application en fonction du scroll grâce au setteur (setcolor) que l'on a reçu en props. 
Enfin, on passe la variable "nb" en props des composant CardSolo pour gérer une différence de texte que l'on affiche dans une balise "p" et d'une image.

Site Responsive : 

  Large size :

  <img width="2513" height="1273" alt="LargeSizeTroisieme" src="https://github.com/user-attachments/assets/602a4adb-85a8-4376-8a13-f220017bbc5e" />

  Small size :

  <img width="333" height="1277" alt="smallSizeTroisieme" src="https://github.com/user-attachments/assets/be3172c1-dfc5-4c9a-ba88-743c5287a5fd" />
