<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Profit-Calculator</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/"><a class="nav-link">Hybrid Mould</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/single"><a class="nav-link">Single Piece Mould</a></router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>