var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement(Clock, null),
          React.createElement(Author, null)));


    } }]);return App;}(React.Component);var


Clock = function (_React$Component2) {_inherits(Clock, _React$Component2);
  function Clock(props) {_classCallCheck(this, Clock);var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this,
    props));_this2.














































































































    toMMSS = function (sec) {
      //var sec_num = parseInt(sec, 10); // don't forget the second param
      var sec_num = sec;

      var minutes = Math.floor(sec_num / 60);
      var seconds = sec_num - minutes * 60;

      if (minutes < 10) {minutes = "0" + minutes;}
      if (seconds < 10) {seconds = "0" + seconds;}
      return minutes + ':' + seconds;
    };_this2.state = { session: 25, break: 5, leftSeconds: 60 * 25, isSession: 'Session', isStart: 'fa fa-play' };_this2.timer = 0;_this2.start_stop = _this2.start_stop.bind(_this2);_this2.startTimer = _this2.startTimer.bind(_this2);_this2.countDown = _this2.countDown.bind(_this2);_this2.reset = _this2.reset.bind(_this2);_this2.step = _this2.step.bind(_this2);_this2.toMMSS = _this2.toMMSS.bind(_this2);return _this2;}_createClass(Clock, [{ key: 'start_stop', value: function start_stop() {if (this.state.isStart == 'fa fa-play') {this.setState({ isStart: 'fa fa-pause' });this.startTimer();} else {clearInterval(this.timer);this.timer = 0;this.audioBeep.pause();this.setState({ isStart: 'fa fa-play' });}} }, { key: 'startTimer', value: function startTimer() {if (this.timer == 0) {this.timer = setInterval(this.countDown, 1000);}} }, { key: 'countDown', value: function countDown() {var leftSeconds = this.state.leftSeconds;if (leftSeconds == 0) {if (this.state.isSession == 'Session') {this.setState({ leftSeconds: 60 * this.state.break + 1, isSession: 'Break' });} else {this.setState({ leftSeconds: 60 * this.state.session + 1, isSession: 'Session' });}}leftSeconds = this.state.leftSeconds - 1;this.setState({ leftSeconds: leftSeconds });if (leftSeconds == 0) {this.audioBeep.play();}} }, { key: 'reset', value: function reset() {clearInterval(this.timer);this.timer = 0;this.audioBeep.pause();this.audioBeep.currentTime = 0;this.setState({ session: 25, break: 5, leftSeconds: 60 * 25, isSession: 'Session', isStart: 'fa fa-play' });} }, { key: 'step', value: function step(e) {if (this.state.isStart == 'fa fa-play') {if (e.target.getAttribute('value') == 'session') {if (e.target.getAttribute('step') == '-1') {if (1 < this.state.session) {this.setState({ session: eval(this.state.session + e.target.getAttribute('step')) });if (this.state.isSession == 'Session') {this.setState({ leftSeconds: 60 * eval(this.state.session + e.target.getAttribute('step')) });}}} else {if (this.state.session < 60) {this.setState({ session: eval(this.state.session + e.target.getAttribute('step')) });if (this.state.isSession == 'Session') {this.setState({ leftSeconds: 60 * eval(this.state.session + e.target.getAttribute('step')) });}}}} else {if (e.target.getAttribute('step') == '-1') {if (1 < this.state.break) {this.setState({ break: eval(this.state.break + e.target.getAttribute('step')) });if (this.state.isSession == 'Break') {this.setState({ leftSeconds: 60 * eval(this.state.break + e.target.getAttribute('step')) });}}} else {if (this.state.break < 60) {this.setState({ break: eval(this.state.break + e.target.getAttribute('step')) });if (this.state.isSession == 'Break') {this.setState({ leftSeconds: 60 * eval(this.state.break + e.target.getAttribute('step')) });}}}}}} }, { key: 'render', value: function render()

    {var _this3 = this;
      return (
        React.createElement('div', { className: 'grid-container' },
          React.createElement('div', { className: 'title' }, 'Pomodoro Clock'),
          React.createElement('div', { className: 'session-label', id: 'session-label' }, 'Session Length'),
          React.createElement('div', { className: 'break-label', id: 'break-label' }, 'Break Length'),
          React.createElement('div', { className: 'session-up-down' },
            React.createElement('i', { className: 'fa fa-arrow-down', 'aria-hidden': 'true', id: 'session-decrement', value: 'session', step: '-1', onClick: this.step }),
            React.createElement('div', { className: 'number', id: 'session-length' }, this.state.session),
            React.createElement('i', { className: 'fa fa-arrow-up', 'aria-hidden': 'true', id: 'session-increment', value: 'session', step: '+1', onClick: this.step })),

          React.createElement('div', { className: 'break-up-down' },
            React.createElement('i', { className: 'fa fa-arrow-down', 'aria-hidden': 'true', id: 'break-decrement', value: 'break', step: '-1', onClick: this.step }),
            React.createElement('div', { className: 'number', id: 'break-length' }, this.state.break),
            React.createElement('i', { className: 'fa fa-arrow-up', 'aria-hidden': 'true', id: 'break-increment', value: 'break', step: '+1', onClick: this.step })),

          React.createElement('div', { className: this.state.leftSeconds > 60 ? 'timer' : 'timer timerColor' },
            React.createElement('div', { id: 'timer-label' }, this.state.isSession),
            React.createElement('div', { id: 'time-left' }, this.toMMSS(this.state.leftSeconds))),

          React.createElement('div', { className: 'control' },
            React.createElement('i', { className: this.state.isStart, 'aria-hidden': 'true', id: 'start_stop', onClick: this.start_stop }),
            React.createElement('i', { className: 'fa fa-refresh', 'aria-hidden': 'true', id: 'reset', onClick: this.reset })),

          React.createElement('audio', { id: 'beep', preload: 'auto',
            src: 'https://goo.gl/65cBl1', ref: function ref(audio) {_this3.audioBeep = audio;} })));


    } }]);return Clock;}(React.Component);var


Author = function (_React$Component3) {_inherits(Author, _React$Component3);function Author() {_classCallCheck(this, Author);return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));}_createClass(Author, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'author' }, 'Designed and Coded By',
          React.createElement('br', null),
          React.createElement('a', { target: '_blank', href: 'https://codepen.io/dashzeveg' }, 'Dashzeveg')));


    } }]);return Author;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/*
                                                                                 $(document).ready(function(){
                                                                                   $('#app').click(function() {
                                                                                     $(this).css('color', 'red');
                                                                                   });
                                                                                 });
                                                                                 */