export default {
  /**
   * 时间戳转化为可读时间字符串
   *
   * @param {number} [timestamp=0]
   * @returns
   */
  formatTime (timestamp = 0) {
    let _timestamp = '0.00ms';
    if (timestamp < 1000) {
      _timestamp = `${timestamp.toFixed(2)}ms`;
    } else if (timestamp < 60 * 1000) {
      _timestamp = `${(timestamp / 1000).toFixed(2)}s`;
    } else {
      _timestamp = `${(timestamp / (60 * 1000)).toFixed(2)}min`;
    }
    return _timestamp;
  }
}