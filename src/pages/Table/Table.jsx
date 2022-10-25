import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div id="table">
      <div id="maintable">
        <div id="leftbank">
          <p class="tablebox" id="rcorners1" onClick={tableclick} data-no="1" data-state="0" data-time="0" data-maxcus="2">
            <p class="tablenum">1</p>
            <p class="tablestate" id="tablestate1" data-no2="1">0/2</p>
          </p>
          <p class="tablebox" id="rcorners2" onClick={tableclick} data-no="2" data-state="0" data-time="0" data-maxcus="2">
            <p class="tablenum">2</p>
            <p class="tablestate" id="tablestate2" data-no2="2">0/2</p>
          </p>
          <p class="tablebox" id="rcorners3" onClick={tableclick} data-no="3" data-state="0" data-time="0" data-maxcus="2">
            <p class="tablenum">3</p>
            <p class="tablestate" id="tablestate3" data-no2="3">0/2</p>
          </p>
          <p class="tablebox" id="rcorners4" onClick={tableclick} data-no="4" data-state="0" data-time="0" data-maxcus="2">
            <p class="tablenum">4</p>
            <p class="tablestate" id="tablestate4" data-no2="4">0/2</p>
          </p>
        </div>
        <div id="centerbank">
          <p class="tablebox2" id="rcorners5" onClick={tableclick} data-no="5" data-state="0" data-time="0" data-maxcus="4">
            <p class="tablenum">5</p>
            <p class="tablestate2" id="tablestate5" data-no2="5">0/4</p>
          </p>
          <p class="tablebox2" id="rcorners6" onClick={tableclick} data-no="6" data-state="0" data-time="0" data-maxcus="4">
            <p class="tablenum">6</p>
            <p class="tablestate2" id="tablestate6" data-no2="6">0/4</p>
          </p>
          <p class="tablebox2" id="rcorners7" onClick={tableclick} data-no="7" data-state="0" data-time="0" data-maxcus="4">
            <p class="tablenum">7</p>
            <p class="tablestate2" id="tablestate7" data-no2="7">0/4</p>
          </p>
          <p class="tablebox2" id="rcorners8" onClick={tableclick} data-no="8" data-state="0" data-time="0" data-maxcus="4">
            <p class="tablenum">8</p>
            <p class="tablestate2" id="tablestate8" data-no2="8">0/4</p>
          </p>
          <p class="tablebox2" id="rcorners9" onClick={tableclick} data-no="9" data-state="0" data-time="0" data-maxcus="4">
            <p class="tablenum">9</p>
            <p class="tablestate2" id="tablestate9" data-no2="9">0/4</p>
          </p>
        </div>
        <div id="rightbank">
          <p class="tablebox3" id="rcorners10" onClick={tableclick} data-no="10" data-state="0" data-time="0" data-maxcus="6">
            <p class="tablenum">10</p>
            <p class="tablestate3" id="tablestate10" data-no2="10">0/4</p>
          </p>
          <p class="tablebox3" id="rcorners11" onClick={tableclick} data-no="11" data-state="0" data-time="0" data-maxcus="6">
            <p class="tablenum">11</p>
            <p class="tablestate3" id="tablestate11" data-no2="11">0/4</p>
          </p>
          <p class="tablebox3" id="rcorners12" onClick={tableclick} data-no="12" data-state="0" data-time="0" data-maxcus="6">
            <p class="tablenum">12</p>
            <p class="tablestate3" id="tablestate12" data-no2="12">0/4</p>
          </p>
        </div>
      </div>

      <div id="overlay">
        <div id="rightpanel">
          <div id="control">
            <br></br><br></br><br></br><br></br>
            <center><big id="tablenumbox"></big></center>
            <br></br><br></br><br></br><br></br><br></br>
            <center><big id="tablestate"></big></center>
            <br></br>
            <center><big id="tabletime"></big></center>
            <br></br><br></br><br></br><br></br>

            <center><div id="tableslider"><InputNumber /></div></center>
          </div>
        </div>
      </div>
    </div>
  );
};

var tablenum;
var cusnum;
var currentcus = 1;
var loopv = 0;

const tableclick = e => {
  loopv = 0;

  var starttime = e.target.getAttribute("data-time");

  document.getElementById("maintable").style.pointerEvents = "none";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("rightpanel").style.width = "520px";

  currentcus = 1;

  document.getElementById("control").style.display = "initial";

  tablenum = e.target.getAttribute("data-no");
  document.getElementById("tablenumbox").innerHTML = "Bàn số " + tablenum;

  cusnum = e.target.getAttribute("data-state");
  if (cusnum === "0") {
    document.getElementById("tablestate").innerHTML = "Bàn đang trống";
    document.getElementById("tabletime").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";
    document.getElementById("intbl").style.display = "initial";
    document.getElementById("islider").style.display = "block";
  }
  else {
    startTimeCounter(starttime);

    document.getElementById("tablestate").innerHTML = "Bàn đang có khách";
    document.getElementById("tabletime").style.display = "initial";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "initial";
    document.getElementById("islider").style.display = "none";
  }
}


async function startTimeCounter(startTime) {
  while (loopv < 1) {
    var now = Math.floor(Date.now() / 1000); // get the time now

    var diff = now - startTime; // diff in seconds between now and start

    var h = Math.floor(diff / 3600); // get hours value (quotient of diff)
    var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
    h = checkTime(h);
    m = checkTime(m); // add a leading zero if it's single digit
    s = checkTime(s); // add a leading zero if it's single digit
    document.getElementById("tabletime").innerHTML = "Thời gian khách đã ngồi: " + h + ":" + m + ":" + s; // update the element where the timer will appear
    await new Promise(r => setTimeout(r, 100));
  }
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

class InputNumber extends React.Component {
  state = {
    value: 1,
  }

  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.cancel = this.cancel.bind(this);
    this.usetable = this.usetable.bind(this);
    this.cleartable = this.cleartable.bind(this);
  }

  get value() {
    return this.state.value;
  }

  increment() {
    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");
    if (this.value >= max) return;
    this.setState({ value: this.value + 1 });

    currentcus = this.value + 1;
  }

  decrement() {
    var min = 1;
    if (this.value <= min) return;
    this.setState({ value: this.value - 1 });

    currentcus = this.value - 1;
  }

  cancel() {
    this.setState({ value: 1 });
    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("rightpanel").style.width = "0px";

    loopv = 1;
  }

  usetable() {
    var currentdate = Math.floor(Date.now() / 1000);

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-time", currentdate);

    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";

    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("rightpanel").style.width = "0px";

    var nelement2 = document.querySelector('[data-no = "' + tablenum + '"]')
    nelement2.setAttribute("data-state", currentcus);
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = '#E26868';

    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");

    document.querySelector('[data-no2 = "' + tablenum + '"]').innerHTML = currentcus + "/" + max;
    this.setState({ value: 1 });

    loopv = 1;
  }

  cleartable() {
    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-time", "0");

    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";

    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("rightpanel").style.width = "0px";

    var nelement2 = document.querySelector('[data-no = "' + tablenum + '"]')
    nelement2.setAttribute("data-state", "0");
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = 'rgba(0, 0, 0, 0)';

    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");

    document.querySelector('[data-no2 = "' + tablenum + '"]').innerHTML = "0/" + max;
    this.setState({ value: 1 });

    loopv = 1;
  }

  render() {
    return (
      <div>
        <div id="islider" className="input-number" style={this.props.style}>
          <button type="button" onClick={this.decrement}>&minus;</button>
          <span>{this.value}</span>
          <button type="button" onClick={this.increment}>&#43;</button>
        </div>
        <br></br><br></br><br></br><br></br>
        <input type="button" value="Xếp khách" onClick={this.usetable} id="intbl" />
        <br></br><br></br>
        <input type="button" value="Dọn bàn" onClick={this.cleartable} id="clrtbl" />
        <br></br><br></br><br></br>
        <input type="button" value="Trở lại" onClick={this.cancel} id="cancelbutton" />
      </div>
    )
  }
}


export default Table;