import "./HomeBanner.css";

import homeBannerImg from "../../../resources/images/animals/pexels-photo-406014.jpeg";

function HomeBanner() {
  return (
    <div className="App">
      <div class="home-container">
        <div class="home-present">
          <h2>Fanny Lamarque</h2>
          <p>Spécialiste en nutrition pour canins et félins</p>
          <button class="btn btn-outline-success">Prendre rendez-vous</button>
        </div>
        <img class="img-fluid" src={homeBannerImg} alt="Home banner" />
      </div>
    </div>
  );
}

export default HomeBanner;
