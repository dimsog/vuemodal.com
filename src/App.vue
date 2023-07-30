<template>
  <div class="container">
    <Modal title="Modal title" name="modal" width="700px" height="400px">
      <div class="modal-content">
        Modal content
      </div>
    </Modal>

    <div class="content">
      <div class="text-center">
        <h1>Vue 3 modal</h1>

        <div class="buttons-group">
          <button class="btn btn-success" @click.prevent="open('modal')">Open 🚀</button>
        </div>
      </div>

      <div class="code-wrapper">
        <highlightjs language="bash" code="$ npm install @dimsog/vue-modal"/>
        <highlightjs language="xml" :code="demoHtml"/>
        <highlightjs language="javascript" :code="demoJs"/>
      </div>

      <div class="github">
        <a href="https://github.com/dimsog/vue-modal" target="_blank">
          <img src="./assets/github-mark.svg" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal, open } from "@dimsog/vue-modal";

const demoHtml = `
<Modal name="modal-name" title="Modal title">
    Modal content
</Modal>
`.trim();

const demoJs = `
import "@dimsog/vue-modal/dist/style.css";
import { Modal, open } from "@dimsog/vue-modal";

open('modal-name');
`.trim();

</script>

<style lang="scss" scoped>
.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  font-family: Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  width: 100%;
  justify-content: center;
  display: flex;

  .code-wrapper {
    pre {
      border-radius: 10px !important;
      font-size: 1rem !important;
      overflow: hidden;
    }
  }

  .text-center {
    text-align: center;
  }
  .btn {
    border: none;
    font-size: 1rem;
    border-radius: 6px;
    padding: 1rem 2rem;
  }
  .btn-success {
    background: #34d399;
    color: #fff;
    &:active {
      background: #2cb986;
    }
  }
  .content {
    max-width: 600px;
    width: 100%;
    padding:0 1rem;
    padding-top: 3rem;
    h1 {
      padding: 0;
      margin: 0;
    }
    .buttons-group {
      padding: 2rem 0;
    }
    .github {
      width: 100%;
      text-align: center;
      padding-top: 10px;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}

</style>
