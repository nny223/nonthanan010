
export default function HomePage() {
    return (
        <div class="row">
        <div class="col-md-14"> data-ride="carousel"
           <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="5000">
 <ol class="carousel-indicators">
   <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
   <li data-target="#carousel-example-generic" data-slide-to="1"></li>
   <li data-target="#carousel-example-generic" data-slide-to="2"></li>
 </ol>

 <div className="carousel-inner" role="listbox">
  <div className="item active">
    <img src="1.png" alt="..." width="100%" height="100%" />
    <div className="carousel-caption">
    </div>
  </div>
  <div className="item">
    <img src="2.png" alt="..." width="100%" height="100%" />
    <div className="carousel-caption">
    </div>
  </div>
  <div className="item">
    <img src="3.jpg" alt="..." width="100%" height="100%" />
    <div className="carousel-caption">
    </div>
  </div>
</div>
</div>
      </div>
  </div>

    )
  }