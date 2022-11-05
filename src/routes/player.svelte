<script>
    


</script>

<main>
    <div class="nav-wrapper playerOfMusic">
        <div class="duracao">
            <div class="barra-progresso">
                <div class="tempo-inicio">
                    <p class="inicio">00:00</p>
                </div>
                <div class="tempo-final">
                    <p class="final">4:00</p>
                </div>
                <progress value="1" max="1" />
                <div class="ponto" />
            </div>
        </div>

        <div class="player">
            <i class="material-icons btn-volume">volume_up</i>
            <i class="material-icons btn-volume-off">volume_off</i>
            <i class="fa-solid fa-backward-step btn-change back" />
            <i class="material-icons btn-play">play_circle_filled</i>
            <i class="material-icons btn-pause">pause</i>
            <i class="fa-solid fa-forward-step btn-change next" />
            <i class="material-icons btn-replay">replay</i>
        </div>
    </div>
</main>

<style>
    .playerOfMusic {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 13.5%;
        align-items: center;
        margin-bottom: 0.2%;
        margin-left: 0.2%;
        margin-right: 0.2%;
        border-radius: 5px;
        background-color: rgba(65, 50, 50, 0.355);
        /* background-color: rgba(38, 166, 153, 0.7) ; */
    }

    .duracao {
        width: 300px;
        margin-top: 25px;
    }
    .barra-progresso {
        width: 300px;
        height: 6px;
        border: 1px solid rgb(201, 181, 181);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: calc(50vw - 150px);
    }

    progress {
        height: 5.5px;
        margin-left: -2%;
        width: 0%;
    }

    .ponto {
        width: 20px;
        height: 20px;
        background-color: rgb(201, 181, 181);
        border-radius: 50%;
        margin-left: -7px;
        margin-right: -3px;
        justify-content: space-around;
    }

    .tempo-inicio {
        margin-right: -1.4%;
    }

    .inicio {
        display: flex;
        height: 1vh;
        width: 4px;
        margin-left: -1200%;
        margin-top: 5%;
    }

    .final {
        display: flex;
        height: 1.4vh;
        width: 4px;
        margin-left: 8000%;
        margin-top: 5%;
    }

    .player {
        margin-left: calc(50vw - 150px);
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1.5%;
    }

    .btn-play,
    .btn-pause {
        font-size: 50px;
        cursor: pointer;
        color: rgba(231, 212, 212, 0.796);
    }

    .btn-pause {
        display: none;
    }

    .btn-change {
        font-size: 40px;
        cursor: pointer;
        color: rgba(231, 212, 212, 0.796);
    }

    .btn-replay,
    .btn-volume,
    .btn-volume-off {
        font-size: 30px;
        cursor: pointer;
        color: rgba(231, 212, 212, 0.796);
    }

    .btn-volume-off {
        display: none;
    }
</style>
