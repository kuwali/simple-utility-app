'use strict';

const gui = require("nw.gui");
const os = require('os');
var prettyDate = require('./src/prettyDate');

// Extend application menu for Mac OS
if (process.platform == "darwin") {
  var menu = new gui.Menu({ type: "menubar" });
  menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
  gui.Window.get().menu = menu;
}

window.onload = () => {
  document.getElementById('endians').innerHTML = os.endianness();
  document.getElementById('freemem').innerHTML = os.freemem();
  document.getElementById('totalmem').innerHTML = os.totalmem();
  document.getElementById('homedir').innerHTML = os.homedir();
  document.getElementById('hostname').innerHTML = os.hostname();
  document.getElementById('loadavg').innerHTML = os.loadavg();
  document.getElementById('release').innerHTML = os.release();
  document.getElementById('type').innerHTML = os.type();
  document.getElementById('uptime').innerHTML = prettyDate(os.uptime());
}


