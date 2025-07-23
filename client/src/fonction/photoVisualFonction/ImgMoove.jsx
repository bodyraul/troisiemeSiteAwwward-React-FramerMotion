export default function imgMoove(e,imgRotate){
    const left = imgRotate.current.getBoundingClientRect().left;
    const right = imgRotate.current.getBoundingClientRect().right;
    const top = imgRotate.current.getBoundingClientRect().top;
    const bottom = imgRotate.current.getBoundingClientRect().bottom;
    const middleX = ((left+right)/2);
    const middleY = ((top+bottom)/2);
    const sourisX = e.clientX;
    const sourisY = e.clientY;

    if(sourisY<=middleY){
      if(sourisX<=middleX){
        const newX = sourisX-left;
        const newMidlleX = middleX-left;
        const rotateX = (-1*(20-(newX*20)/newMidlleX));
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
      if(sourisX>middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
    }

    if(sourisY>middleY){
      if(sourisX<=middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = ` rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
      if(sourisX>middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
    }
}