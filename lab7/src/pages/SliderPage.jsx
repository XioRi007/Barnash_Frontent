import React from "react";
import Slider from "../components/Slider";

const SliderPage = ()=>{
    function importAll(r) {
        let images = {};
        r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const imgList = importAll(require.context('../assets/images/', false, /\.jpg/));
    let imges = [];
    Object.keys(imgList).forEach((e)=>{
        imges.push(imgList[e]);
    })

    return (
        <section className="slider">
                <h3 className="slider__header">Слайдер</h3>
                <Slider images={imges} numberOfVisible={2} speed={1}/>
        </section>
    );
}


export default SliderPage;