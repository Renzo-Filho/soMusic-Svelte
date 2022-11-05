<script>
  /** @type {import('./$types').PageData} */ export let data;
</script>


<main>
  <div class="row">
    {#each Object.values(data) as music (music.id)}
      <div class="col s3">
        <div class="container-card box">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img src={music.img} alt="error" />
            </div>
            <a
              id={music.id}
              class="btn-floating halfway-fab waves-effect waves-light red playMusic"
              ><i class="material-icons">play_arrow</i></a
            >
          </div>
          <div class="card-content">
            <p>{music.title}</p>
          </div>
          <audio src={music.src} controls />
        </div>
      </div>
    {/each}
  </div>
</main>

<style>

  .row {
    margin-top: 15px;
  }

  audio {
    display: none;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;
    margin-top: 6%;
  }

  .card-content {
    text-align: center;
  }

  .container-card {
    background-color: rgba(107, 95, 94, 0.3);
    border-radius: 5px;
    height: 310px;
    width: 325px;
    margin: 15px;
  }

  .box {
    border: 0px solid white;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
    transition: transform 0.6s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition-duration: 0.6s;
  }

  .box:hover {
    border: 0px solid black;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
    transition-duration: 0s;
  }
</style>
