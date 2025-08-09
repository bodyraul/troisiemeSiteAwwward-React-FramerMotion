import pointImg  from '../../assets/img/points.png'
import triangleImg from '../../assets/img/triangles.png'
import statImg from '../../assets/img/statsImg.png'
import soloWomen from '../../assets/img/soloWomen.jpg'
import allMannequin from"../../assets/img/allMannequin.jpg"
import summerCollection from"../../assets/img/summerCollection.jpg"
import statVente from"../../assets/img/statVente.jpg"

const alt=["Représentation de six points oranges.","Représentation d'un triangle orange pointant vers le bas et d'un triangle orange pointant vers le haut.","Représentation de trois barres verticales oranges."]
const alts=["Représentation d'un homme.","Représentation de huight personnes.","Représentation de huight personnes.","Représentation de plusieurs statistiques."]
const src=[pointImg,triangleImg,statImg];
const srcs=[soloWomen,allMannequin,summerCollection,statVente]

const tabImg={
    altParaBase:alt,
    srcParaBase:src,
    altParas:alts,
    srcParas:srcs
}

export default tabImg;