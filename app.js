// Local component for the header nav (Bootstrap 4 markup)
const SiteNav = {
    name: 'SiteNav',
    template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
      <div class="container">
        <a class="navbar-brand" href="#">Food Blog</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
};

new Vue({
    el: '#app',
    components: { SiteNav },
    data() {
        return {
            // Update path if your image file name differs.
            heroSrc: 'images/chili.jpg',
            heroAlt: 'White Chicken Chili'
        };
    }
});
