<script setup lang="ts">
import NavItem from "./NavItem.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt="Logo"
          width="70"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <NavItem to="home" label="Home" />
          <NavItem to="posts" label="Posts" />
          <NavItem to="about" label="About" />

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Trainings
            </a>
            <ul class="dropdown-menu">
              <NavItem to="cars" label="Cars" :dropdown="true" />
              <NavItem to="training" label="Training 1" :dropdown="true" />
              <NavItem to="lerepaireduweb" label="Le Repaire de Web" :dropdown="true" />
              <NavItem to="parent-child" label="Parent - Child" :dropdown="true" />
              <li><hr class="dropdown-divider" /></li>
              <NavItem to="cars" label="Cars" :dropdown="true" />
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
