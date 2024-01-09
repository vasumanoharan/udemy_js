import img6 from './images/1.jpg'
import img7 from './images/2.jpg'
import img8 from './images/3.jpg'
import img9 from './images/4.jpg'
function Udemy_rows(){
    return(
        <div class="udemy__rows">
        <div class="rows">
            <img src={img6} alt=""></img>
            <h2>Python Web Development</h2>
            <p>fully packed</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="rows">
            <img src={img7} alt="" width="160px"></img>
            <h2>Java Web Development</h2>
            <p>fully packed</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="rows">
            <img src={img8} alt="" width="160px"></img>
            <h2>Full Stack Web Development</h2>
            <p>fully packed</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="rows">
            <img src={img9} alt="" width="160px"></img>
            <h2>Web Development</h2>
            <p>fully packed</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
    </div>
    )
}
export default Udemy_rows