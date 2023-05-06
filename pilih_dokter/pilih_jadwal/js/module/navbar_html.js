export function navbarHTML() {
return `<!-- Header -->
<section id="banner">
<!-- Header -->
<header>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top py-4">
        <div class="container">
            <a class="navbar-brand" href="./../index.html">
                <img src="./assets/images/carevul-logo.svg" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  m-auto mb-3 mb-lg-0 ">
                    <li class="nav-item">
                        <a href="./../index.html" class="nav-link active">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a href="./../kategori_dokter/index.html" class="nav-link active">Konsultasi</a>
                    </li>
                    <li class="nav-item">
                        <a href="./../article/article.html" class="nav-link active">Artikel</a>
                    </li>
                    <li class="nav-item">
                        <a href="./../bmi-calculator/index.html" class="nav-link active">Kalkulator BMI</a>
                    </li>
                </ul>
                
                <div>
                    <a href="#" class="main-button-register">Register</a>
                    <a href="#" class="main-button">Login</a>
                </div>

            </div>
        </div>
    </nav>
</header>`;
}
