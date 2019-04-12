/**
 *
 * @param {*} message Message to be passed to be catched as an error
 */

function cancel(message) {
  this.configuration.cancel(message)
  return this
}

export default cancel
