import img2 from './images/python.jpg'
import img3 from './images/uiux.jpg'
import img4 from './images/emc.jpg'
import img5 from './images/web.jpg'
function Udemy_cards() {
    return (
        <div class="udemy__cards">
        <div class="card__01">
            <img src={img2} alt=""></img>
            <h2>2023-Python Programming</h2>
            <p>Col Steel</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="card__01">
            <img src={img3} alt=""></img>
            <h2>UI/UX Designing</h2>
            <p>Col Steel</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="card__01">
            <img src={img4} alt="" height="125px"></img>
            <h2>EMC</h2>
            <p>Col Steel</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
        <div class="card__01">
            <img src={img5} alt=""></img>
            <h2>Web Development</h2>
            <p>Col Steel</p>
            <p>⭐⭐⭐⭐</p>
            <p>499 <del>1199</del></p>
        </div>
    </div>

    )
}
export default Udemy_cards