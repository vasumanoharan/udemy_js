function Navbar(){
    return(
        <div class="section__01">
        <div class="section__01__heading">
            <h1>Udemy</h1>
        </div>
        <div class="section__01__search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text"></input>
        </div>
        <div class="section__01__nav">
            <a href="">Courses</a>
            <a href="">My learning</a>
        </div>
        <div class="section__01__icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bell"></i>

        </div>
        <div class="heading__hidden">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    )
}
export default Navbar