function Hello()
{
    return( 
        <>
        <div className="container-fluid p-0 mb-5">
    <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1950 *</h2>
                </div>
            </div>
            <div className="carousel-item">
                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                    <h1 className="display-1 text-white m-0">COFFEE</h1>
                    <h2 className="text-white m-0">* SINCE 1950 *</h2>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
        </a>
    </div>
        </div>
        <div class="container-fluid py-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterspacing:"5px"}} >About Us</h4>
                <h1 class="display-4">Serving Since 1950</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 py-0 py-lg-5">
                    <h1 class="mb-3">Our Story</h1>
                    <h5 class="mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                    <a href="" class="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
                <div class="col-lg-4 py-5 py-lg-0" style={{minheight:"500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" src="img/about.png" style={{objectfit: "cover"}} />
                    </div>
                </div>
                <div class="col-lg-4 py-0 py-lg-5">
                    <h1 class="mb-3">Our Vision</h1>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <h5 class="mb-3"><i class="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <h5 class="mb-3"><i class="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <h5 class="mb-3"><i class="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <a href="" class="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
        </>

)
}
export default Hello;