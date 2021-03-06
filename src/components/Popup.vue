<template>
  <div
    v-if="isOpen"
    class="popup-container"
  >
    <main class="popup-placeholder">
      <div class="popup-content-box">
        <div
          class="popup-close"
          @click="closePopup()"
        />
        <div
          class="popup-close"
          @click="closePopup()"
        >
          <font-awesome-icon :icon="['fas', 'times']"/>
        </div>
        <article
          v-html="content"
          class="popup-content"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

import head from '@/util/head'

@Component
export default class Popup extends Vue {
  @Prop({ default: false }) private isOpen!: boolean;
  @Prop({ required: true }) private content!: string;

  @Action('togglePopup', { namespace: 'app' }) private togglePopup!: (status: boolean) => void;
  @Action('togglePopupContent', { namespace: 'app' }) private togglePopupContent!: (content: string) => void;
  @Action('setPopupOffsetTop', { namespace: 'app' }) private setPopupOffsetTop!: (offset: number) => void;
  @Getter('popupOffsetTop', { namespace: 'app' }) private popupOffsetTop!: number;
  @Getter('isPopup', { namespace: 'app' }) private isPopup!: boolean;

  @Watch('isPopup')
  public onChangePopup (newVal: boolean) {
    if (newVal) {
      this.detectMetaContent()
    }
  }

  public mounted () {
    this.detectMetaContent()

    window.addEventListener('keyup', this.escHandler)
  }

  private closePopup (): void {
    this.togglePopupContent('')

    if (this.$route.query.popUp) {
      this.$router.push({ ...this.$route, query: {} })
    } else if (this.$route.name === 'AgendaView') {
      this.$router.push({ name: 'Agenda', params: { language: this.$route.params.language } })
    }

    this.togglePopup(false)
  }

  private detectMetaContent (): void {
    const virtualElement: HTMLElement = document.createElement('pre')
    virtualElement.innerHTML = this.content

    const metaContentElement = virtualElement.querySelector('#meta-content') as HTMLElement
    if (metaContentElement) {
      const metaContent = JSON.parse(metaContentElement.innerText)

      if (metaContent && metaContent.title) {
        head.title(metaContent.title)
        head.ogTitle(metaContent.title)
        if (metaContent.description) { head.ogDescription(metaContent.description) }
        if (metaContent.image) { head.ogImage(metaContent.image) }
        if (metaContent.url) { head.ogUrl(metaContent.url) }
      }
    }
  }

  private escHandler (event: any): void {
    if (event.keyCode === 27 && this.isPopup) {
      this.closePopup()
    }
  }
}
</script>
