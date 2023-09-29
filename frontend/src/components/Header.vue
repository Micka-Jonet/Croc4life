<template>
    <div class="container-fluid container-expand-lg d-flex justify-content-center shadow-sm">
        <nav class="navbar container-default navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img class="logo-nav" src="../assets/images/logo.png" alt="Croc4life Logo" width="90">
                    <span class="title-nav">Croc4life</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Qui suis-je</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <button @mouseover="appointmentError()" @mouseout="outError()" class="btn btn-outline-success" type="submit">{{ btnData }}</button>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: Headers,
    data() {
        return {
            btnData: 'Prenez rendez-vous',
        }
    },
    methods: {
        appointmentError() {
            this.btnData = 'Indisponible, nous contacter';
        },
        outError() {
            this.btnData = 'Prenez rendez-vous';
        },
    },
}
</script>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.title-nav {
    margin: 0 40px 0 10px;
    font-family: $title-font;
    color: $first-color;
    font-size: 1.6rem;
}

.nav-link {
    font-family: $nav-font;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    // transition: .4s;
}

.nav-link:hover {
    color: $first-color !important;
    margin-bottom: -2px;
    border-bottom: 2px solid $first-color;
}

.popup-error {
    position: absolute;
    right: 15px;
    top: 5px;
    padding: 2px;
    font-size: 0.7rem;
}

</style>