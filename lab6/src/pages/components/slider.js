export default class Slider{
    
    constructor(containerClass, images = [], numberOfVisible, speed=0.5){
        this.speed = speed;
        this.container = document.querySelectorAll(`.${containerClass}`)[0];
        this.container.style.width = `${numberOfVisible*320}px`;   
        this.numberOfVisible = numberOfVisible;
        this.imgList = images.map((e, i)=>{
            return `<img class="slider__img" src=${e}>`;
        });             
    }
    createSlider(){
        return `        
            <span class="arrow arrow-left">&#8249;</span>
                <ul class="slider__list">
                    ${this.imgList}
                </ul>
            <span class="arrow arrow-right">&#8250;</span>
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