import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect() {
    console.log('reset_form#connect', this.element)
  }

  reset() {
    console.log('reset_form#reset', this.element)

    // Shoelace does not support these simple functions we would use for regular HTML.
    // this.element.reset()
    // this.element.querySelector('input[type=submit]').disabled = false
  }
}
