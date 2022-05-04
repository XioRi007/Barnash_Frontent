import React, {  useState } from "react";
const imgSize = 320;

const Slider = ({images = [], numberOfVisible=3, speed=0.5})=>{
    const [translate, setTranslate] = useState(0);
    
    const nextBtnClickHandler = () =>{
        if(translate !== -(images.length-numberOfVisible)*imgSize){        
            setTranslate(translate-imgSize);
        }
    }
    const prevBtnClickHandler = () =>{
        if(translate !== 0){  
            setTranslate(translate+imgSize);            
        }
    }   
    
    
    return (
        <section className="slider__content" style={{width:`${numberOfVisible*320}px`}}>
              <span className="arrow arrow-left" onClick={prevBtnClickHandler}>&#8249;</span>
                <ul className="slider__list" style={{transition: `all ${speed}s`, transform:`translateX(${translate}px)`}}>
                {images.map((e, i)=>{
                    return (< img key={i} className="slider__img" src={e} alt='img'/>);                        
                    })}
                </ul>
            <span className="arrow arrow-right" onClick={nextBtnClickHandler}>&#8250;</span>
          </section>
    )



}


export default Slider;
/**
 * export default class Slider{
    
    constructor(containerClass, images = [], numberOfVisible, speed=0.5){
        this.speed = speed;
        this.container = document.querySelectorAll(`.${containerClass}`)[0];
        this.container.style.width = `${numberOfVisible*320}px`;   
        this.numberOfVisible = numberOfVisible;
        this.imgList = images.map((e, i)=>{
            return `<img className="slider__img" src=${e}>`;
        });             
    }
    createSlider(){
        return `        
            <span className="arrow arrow-left">&#8249;</span>
                <ul className="slider__list">
                    ${this.imgList}
                </ul>
            <span className="arrow arrow-right">&#8250;</span>
        `;
    }
    setListeners(){        
        const nextBtn = document.querySelectorAll('.arrow-right')[0];
        const prevBtn = document.querySelectorAll('.arrow-left')[0];
        const list = document.querySelectorAll('.slider__list')[0];
        list.style.transition = `all ${this.speed}s`;
        const num = this.imgList.length;
        const numberOfVisible = this.numberOfVisible;
        console.log(numberOfVisible);
        let c = 0;
        nextBtn.addEventListener('click', ()=>{
            if(list.style.transform !== `translateX(-${(num-numberOfVisible)*323}px)`){        
                c-=323;
                list.style.transform = `translateX(${c}px)`;
            }
        });
        prevBtn.addEventListener('click', ()=>{
            if(list.style.transform === ""){
                list.style.transform ='translateX(0px)';
                return;
            }
            if(list.style.transform !== 'translateX(0px)'){  
                c+=323;
                list.style.transform = `translateX(${c}px)`;
            }            
        });
    }
};
 */