<template>
  <div class="container">
    <div class="content">
      <div class="text-center">
        <h1>Vue 3 modal</h1>

        <div class="buttons-group">
          <button class="btn btn-success" @click.prevent="open('modal')">
            Open
          </button>
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

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Backdrop</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-backdrop')">Try it</button>
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
            <strong class="example__title">Static backdrop</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-static-backdrop')">Try it</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoStaticBackdrop"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Disable resizing</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-disable-resize')">Try it</button>
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
              <button class="btn btn-success" @click.prevent="open('modal-custom-close')">Try it</button>
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
              <button class="btn btn-success" @click.prevent="open('modal-buttons')">Try it</button>
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
              <button class="btn btn-success" @click.prevent="open('modal-min-width')">Try it</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlMinWithMinHeight"/>
            </div>
          </div>
        </div>

        <div class="example">
          <div class="example__buttons">
            <strong class="example__title">Blacktheme</strong>
            <div>
              <button class="btn btn-success" @click.prevent="open('modal-black-theme')">Try it</button>
            </div>
          </div>
          <div class="example__code">
            <div class="code-wrapper">
              <highlightjs language="xml" :code="demoHtmlBlackTheme"/>
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

    <Modal title="Modal title"
           name="modal"
           width="500px"
           height="400px"
           min-width="400px"
           min-height="300px"
           :backdrop="true"
    >
      <ModalContent>
        <div class="modal-content">
          Place for your awesome content
        </div>
      </ModalContent>
      <ModalFooter>
        <ModalButton @click="openGithubPage">
          <img src="./assets/github-mark.svg" style="height: 16px">
        </ModalButton>
        <ModalButton @click="openNpmPage">
          <img src="./assets/npm.svg" style="height: 16px">
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

    <Modal title="Modal title" name="modal-static-backdrop" width="700px" height="400px" :backdrop="true" :static-backdrop="true">
      <ModalContent>
        <div class="modal-content">
          Modal with static backdrop
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

    <Modal title="Black theme" theme="black" name="modal-black-theme">
      <ModalContent>
        Black theme
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

const demoStaticBackdrop = `
<Modal title="Modal title"
    name="modal-static-backdrop"
    width="700px"
    height="400px"
    :backdrop="true"
    :static-backdrop="true"
  >
  <ModalContent>
    <div class="modal-content">
      Modal with static backdrop
    </div>
  </ModalContent>
</Modal>
`

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

const demoHtmlBlackTheme = `
<Modal
  title="Black theme"
  theme="black"
  name="modal-black-theme">
  <ModalContent>
    Black theme
  </ModalContent>
</Modal>
`.trim();

const onSave = () => {
  alert('Ok!');
}

const openGithubPage = () => {
  location.href = 'https://github.com/dimsog/vue-modal';
}

const openNpmPage = () => {
  location.href = 'https://www.npmjs.com/package/@dimsog/vue-modal';
}

</script>

<style lang="scss" scoped>
.modal-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    border-radius: 10px;
    padding: 1rem 2rem;
    transition: background-color .3s ease-in-out;
  }
  .btn-success {
    background: #005cbb;
    color: #fff;
    &:hover {
      background: #0875e5;
    }
    &:active {
      background: #00428c;
    }
  }

  .examples {
    padding-top: 2rem;

    .example {
      display: flex;
      .example__buttons {
        padding-right: 1rem;
        width: 140px;
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
    padding: 3rem 0;

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
