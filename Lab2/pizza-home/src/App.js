import './App.css';

import pizza1 from './Images/pizza1.jpg';
import pizza2 from './Images/pizza2.jpg';
import pizza3 from './Images/pizza3.jpg';
import pizza4 from './Images/pizza4.jpg';
import pizza5 from './Images/pizza5.jpg';
import menu1 from './Images/menu1.jpg';
import menu2 from './Images/menu2.jpg';
import menu3 from './Images/menu3.jpg';
import menu4 from './Images/menu4.jpg';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">

      {/* 1. Header / Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom py-3">
        <div className="container">
          <a className="navbar-brand fs-3 fw-bold text-white" href="#">Pizza House</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5 ms-3">
              <li className="nav-item me-3">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger rounded-0" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section - Carousel */}
      <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pizza1} className="d-block w-100 hero-img" alt="Neapolitan Pizza" />
            <div className="carousel-caption d-none d-md-block bg-caption-custom">
              <h2 className="display-5 fw-bold">Neapolitan Pizza</h2>
              <p className="lead">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pizza2} className="d-block w-100 hero-img" alt="Pizza 2" />
            <div className="carousel-caption d-none d-md-block bg-caption-custom">
              <h2 className="display-5 fw-bold">Delicious Pizza</h2>
              <p className="lead">Fresh ingredients, hot and crispy right out of the oven.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pizza3} className="d-block w-100 hero-img" alt="Pizza 3" />
            <div className="carousel-caption d-none d-md-block bg-caption-custom">
              <h2 className="display-5 fw-bold">Cheese Lover</h2>
              <p className="lead">Extra cheese layer to satisfy your cravings.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pizza4} className="d-block w-100 hero-img" alt="Pizza 4" />
            <div className="carousel-caption d-none d-md-block bg-caption-custom">
              <h2 className="display-5 fw-bold">Italian Classic</h2>
              <p className="lead">A perfect blend of fresh herbs, rich mozzarella, and classic tomato sauce.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pizza5} className="d-block w-100 hero-img" alt="Pizza 5" />
            <div className="carousel-caption d-none d-md-block bg-caption-custom">
              <h2 className="display-5 fw-bold">Veggie Delight</h2>
              <p className="lead">Topped with fresh bell peppers, onions, olives, and mushrooms.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 3. Our Menu Section */}
      <div className="container my-5">
        <h2 className="mb-4 text-white">Our Menu</h2>
        <div className="row g-4">

          {/* Card 1: Margherita Pizza */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 bg-white text-dark border-0 position-relative rounded-0">
              <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 rounded-0 px-2 py-1 fw-bold fs-7">SALE</span>
              <img src={menu1} className="card-img-top rounded-0" alt="Margherita Pizza" />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold">Margherita Pizza</h5>
                  <p className="card-text">
                    <span className="text-decoration-line-through me-2 text-muted">$40.00</span>
                    <span className="text-warning fw-bold fs-5">$24.00</span>
                  </p>
                </div>
                <button className="btn btn-dark w-100 rounded-0 mt-3 py-2 fw-semibold">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 2: Mushroom Pizza */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 bg-white text-dark border-0 position-relative rounded-0">
              <img src={menu2} className="card-img-top rounded-0" alt="Mushroom Pizza" />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold">Mushroom Pizza</h5>
                  <p className="card-text">
                    <span className="text-dark fw-bold fs-5">$25.00</span>
                  </p>
                </div>
                <button className="btn btn-dark w-100 rounded-0 mt-3 py-2 fw-semibold">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 3: Hawaiian Pizza */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 bg-white text-dark border-0 position-relative rounded-0">
              <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 rounded-0 px-2 py-1 fw-bold fs-7">NEW</span>
              <img src={menu3} className="card-img-top rounded-0" alt="Hawaiian Pizza" />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold">Hawaiian Pizza</h5>
                  <p className="card-text">
                    <span className="text-dark fw-bold fs-5">$30.00</span>
                  </p>
                </div>
                <button className="btn btn-dark w-100 rounded-0 mt-3 py-2 fw-semibold">Buy</button>
              </div>
            </div>
          </div>

          {/* Card 4: Pesto Pizza */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 bg-white text-dark border-0 position-relative rounded-0">
              <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 rounded-0 px-2 py-1 fw-bold fs-7">SALE</span>
              <img src={menu4} className="card-img-top rounded-0" alt="Pesto Pizza" />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold">Pesto Pizza</h5>
                  <p className="card-text">
                    <span className="text-decoration-line-through me-2 text-muted">$30.00</span>
                    <span className="text-warning fw-bold fs-5">$15.00</span>
                  </p>
                </div>
                <button className="btn btn-dark w-100 rounded-0 mt-3 py-2 fw-semibold">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Book Your Table Form Section */}
      <div className="bg-dark-custom py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-white">Book Your Table</h2>
          <form className="mx-auto" style={{ maxWidth: '800px' }}>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-4">
                <input type="text" className="form-control rounded-0 py-2 fs-6" placeholder="Your Name *" required />
              </div>
              <div className="col-12 col-md-4">
                <input type="email" className="form-control rounded-0 py-2 fs-6" placeholder="Your Email *" required />
              </div>
              <div className="col-12 col-md-4">
                <select className="form-select rounded-0 py-2 fs-6" defaultValue="">
                  <option value="" disabled>Select a Service</option>
                  <option value="1">Dine In</option>
                  <option value="2">Take Away</option>
                  <option value="3">Delivery</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <textarea className="form-control rounded-0" rows="5" placeholder="Please write your comment" required></textarea>
            </div>
            <div className="text-start">
              <button type="submit" className="btn btn-warning rounded-0 px-4 py-2 fw-bold text-white btn-send-custom">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
