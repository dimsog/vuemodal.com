<template>
  <div class="container">
    <div class="content">
      <div class="text-center">
        <h1>Vue 3 modal</h1>

        <div class="buttons-group">
          <button class="btn btn-success" @click.prevent="open('modal')">Open 🚀</button>
        </div>
      </div>

      <div class="code-wrapper">
        <highlightjs language="bash" code="$ npm install @dimsog/vue-modal"/>
      </div>


      <div class="demo-item">
        <strong>Basic demo</strong>
        <div class="code-wrapper">
          <highlightjs language="xml" :code="demoHtml"/>
          <highlightjs language="javascript" :code="demoJs"/>
        </div>
      </div>

      <div class="examples">
        <h2 class="examples__title">Examples</h2>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Backdrop</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-backdrop')">Open</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlBackdrop"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Disable resizing</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-disable-resize')">Open</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlDisableResize"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Close button</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-custom-close')">Open</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlCloseButton"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Modal buttons</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-buttons')">Open</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlButtons"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Min width /<br> min height</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-min-width')">Open</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlMinWithMinHeight"/>
            </div>
          </div>
        </div>
      </div>

      <div class="github">
        <a href="https://github.com/dimsog/vue-modal" target="_blank">
          <img src="./assets/github-mark.svg" alt="">
        </a>
      </div>

    </div>

    <Modal title="Modal title" name="modal" width="700px" height="400px">
      <ModalContent>
        <div class="modal-content">
          Modal content
        </div>
      </ModalContent>
      <ModalFooter>
        <ModalButton @click="close('modal')">
          Close
        </ModalButton>
      </ModalFooter>
    </Modal>

    <Modal title="Modal title" name="modal-backdrop" width="700px" height="400px" :backdrop="true">
      <ModalContent>
        <div class="modal-content">
          Modal with backdrop
        </div>
      </ModalContent>
    </Modal>

    <Modal title="Modal title" name="modal-disable-resize" width="700px" height="400px" :resize="false">
      <ModalContent>
        <div class="modal-content">
          Modal content
        </div>
      </ModalContent>
    </Modal>

    <Modal title="Modal title" name="modal-custom-close" width="700px" height="400px">
      <ModalContent>
        <div class="modal-content">
          <button @click.prevent="close('modal-custom-close')" class="btn btn-success">
            Close me!
          </button>
        </div>
      </ModalContent>
    </Modal>

    <Modal title="Modal title" name="modal-buttons" width="700px" height="400px">
      <ModalContent>
        <textarea placeholder="Text..." style="width: 100%; height: 100%; padding: 0; margin: 0; border: 0; outline: none"></textarea>
      </ModalContent>
      <ModalFooter>
        <ModalButton @click="close('modal-buttons')">Close</ModalButton>
        <ModalButton @click="onSave">Save</ModalButton>
      </ModalFooter>
    </Modal>

    <Modal title="Modal title" name="modal-min-width" min-width="500px" min-height="200px" width="700px" height="400px">
      <ModalContent>
      </ModalContent>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import {close, open, Modal, ModalContent, ModalFooter, ModalButton} from "@dimsog/vue-modal";

const demoHtml = `
<Modal name="modal-name" title="Modal title">
  <ModalContent>
    Modal content
  </ModalContent>
</Modal>
`.trim();

const demoJs = `
import "@dimsog/vue-modal/dist/style.css";
import { Modal, ModalContent, open } from "@dimsog/vue-modal";

open('modal-name');
`.trim();

const demoHtmlBackdrop = `
<Modal name="modal-name" title="Modal title" :backdrop="true">
  <ModalContent>
    Modal content
  </ModalContent>
</Modal>
`.trim();

const demoHtmlDisableResize = `
<Modal name="modal-name" title="Modal title" :resize="false">
  <ModalContent>
    Modal content
  </ModalContent>
</Modal>
`.trim();

const demoHtmlCloseButton = `
import { Modal, close } from "@dimsog/vue-modal";

<Modal name="modal-name" title="Modal title">
  <ModalContent>
    <button @click.prevent="close('modal-name')">
        Close me!
    </button>
  </ModalContent>
</Modal>
`.trim();

const demoHtmlButtons = `
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalButton,
  close
} from "@dimsog/vue-modal";

<Modal name="modal-name" title="Modal title">
  <ModalContent>
    Modal content
  </ModalContent>
  <ModalFooter>
    <ModalButton @click="close('modal-name')">
      Close
    </ModalButton>
    <ModalButton @click="onSave">
      Save
    </ModalButton>
  </ModalFooter>
</Modal>
`.trim();

const demoHtmlMinWithMinHeight = `
<Modal
    title="Modal title"
    name="modal-min-width"
    min-width="500px"
    min-height="200px"
    width="700px"
    height="400px">
  <ModalContent>
  </ModalContent>
</Modal>
`.trim();

const onSave = () => {
  alert('Ok!');
}

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

  .examples {
    padding-top: 2rem;
    .examples__title {
      text-align: center;
    }

    .example {
      display: flex;
      .example__buttons {
        padding-right: 1rem;
        width: 200px;
        button {
          margin-top: .5rem;
        }
      }
      .example__code {
        width: 100%;
      }
    }
  }

  .content {
    max-width: 800px;
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
