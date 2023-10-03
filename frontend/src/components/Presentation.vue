<template>
    <div class="container-presentation d-flex flex-column">
        <div class="title">
            <h2>Bienvenue sur Croc4Life</h2>
        </div>
        <div class="services">
            <h3>Parce que votre animal est unique, je propose :</h3>
            <ul>
                <li><i class="bi bi-cookie"></i> Un <strong>accompagnement personnalisé</strong> et sur mesure</li>
                <li><i class="bi bi-cookie"></i> Des <strong>conseils adaptés</strong> selon les besoins de votre animal</li>
            </ul>
            <div class="btn-rdv">
                <button @mouseover="appointmentError()" @mouseout="outError()" class="btn btn-outline-success" type="submit">{{ btnData }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'C-Presentation',
    data() {
        return {
            btnData: 'Prendre rendez-vous',
        }
    },
    methods: {
        appointmentError() {
            this.btnData = 'Indisponible, contactez-nous';
        },
        outError() {
            this.btnData = 'Prenez rendez-vous';
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/variables.scss";
    .container-presentation {
        width: 100%;
        height: 800px;
        background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), 
                    url('../assets/images/sliders/presentation.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        .title, .services {
            padding: 0 0 0 5%;
        }
        .title {

            h2 {
                color: #e3e1e1 !important;
                font-size: 2.3rem !important;
                margin: 5% 0 0 0;
                width:100%;
                display: inline-block;
                white-space: nowrap;
                animation: slash-by-left 2s;
            }
        }

        .services {
            width: 35%;
            background-color: rgba(255, 255, 255, 0.60);
            padding: 60px 60px;
            margin: 3%;
            border-radius: 10px;
            animation: slash-by-top 2s;

            h3 {
                font-family: $nav-font;
                margin: 0 0 40px 0;
                color: #000000;
            }

            ul {
                list-style-type: none;
                padding: 0;

                li {
                    font-family: $title-font;
                    font-size: 1.1rem;
                    margin: 0 0 10px 0;

                    strong {
                        color: $second-color;
                    }

                    i {
                        margin: 0 10px 0 0;
                    }
                }
            }

            .btn-rdv {
                text-align: center;

                button {
                    margin: 30px 0;
                }
            }

            
        }

        // Mobiles @ tablettes
    @media (min-width: 320px) and (max-width: 990px) { 
        .services {
            margin: 0 auto;
        }

        .title {
            h2 {
                font-size: 1.8rem !important;
                margin: 10% 0 10% 0;
            }
        }

        .services {
            width: 95%;
            padding: 30px 30px;
            margin: 0 auto;

            h3 {
                font-size: 1.3rem;
            }

            ul {

                li {
                    font-size: 1rem;
                }
            }

            .btn-rdv {
                text-align: center;

                button {
                    margin: 30px 0;
                }
            }
        }
     }
    }

    @keyframes slash-by-left {
        0% {
            -webkit-transform: translateX(+100%);
            transform: translateX(+100%);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @keyframes slash-by-top {
        0% {
            -webkit-transform: translateY(+80%);
            transform: translateY(+80%);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 100;
        }
    }

    
</style>