import heroImg from './assets/hero.svg'
const Hero = ()=>{
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contenfull CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis quas esse placeat ducimus, ab doloribus corrupti animi totam tenetur molestias, eaque autem, ea porro minus vitae temporibus voluptates a.
                    </p>
                </div>
                <div className='img-container'>
                        <img src={heroImg} alt="hero" className='img'/>
                </div>
            </div>
        </section>
    )
}
export default Hero;