import ConnectionEvent from 'Constants/Events'
import ConnectionState from 'Constants/States'
import { setConnectionState } from 'storeChecker'

/**
 * @access private
 * @function onNetworkChecking
 * @description Retrieves a ON_NETWORK_CHECKING event.
 * @returns {ConnectionEvent}
 */
const onNetworkChecking = () => {
    return new Event(ConnectionEvent.ON_NETWORK_CHECKING)
  },
  /**
   * @access private
   * @function onNetworkChanged
   * @description Retrieves a ON_NETWORK_CHANGED custom event, retrives connection states when emitted.
   * @param {Object} data Contains connection states 'from' and 'to'.
   * @returns {ConnectionEvent}
   */
  onNetworkChanged = (data) => {
    return new CustomEvent(ConnectionEvent.ON_NETWORK_CHANGED, { detail: data })
  },
  /**
   * @access private
   * @function onNetworkConnected
   * @description Retrieves a ON_NETWORK_CONNECTED event.
   * @returns {ConnectionEvent}
   */
  onNetworkConnected = () => {
    setConnectionState(ConnectionState.CONNECTED)
    return new Event(ConnectionEvent.ON_NETWORK_CONNECTED)
  },
  /**
   * @access private
   * @function onNetworkDisconnected
   * @description Retrieves a ON_NETWORK_DISCONNECTED event.
   * @returns {ConnectionEvent}
   */
  onNetworkDisconnected = () => {
    setConnectionState(ConnectionState.DISCONNECTED)
    return new Event(ConnectionEvent.ON_NETWORK_DISCONNECTED)
  }

export {
  onNetworkChecking,
  onNetworkChanged,
  onNetworkConnected,
  onNetworkDisconnected
}
