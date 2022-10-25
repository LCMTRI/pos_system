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
            <br></br><br></br>
            <center><h1 id="tablenumbox"></h1></center>
            <br></br><br></br><br></br><br></br>
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

const tableclick = e => {
  var d = new Date();
  var currentdate = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

  var starttime = e.target.getAttribute("data-time");

  var custime = diff(starttime, currentdate);

  document.getElementById("maintable").style.pointerEvents = "none";
  document.getElementById("overlay").style.display = "block";

  currentcus = 1;

  document.getElementById("control").style.display = "initial";

  tablenum = e.target.getAttribute("data-no");
  document.getElementById("tablenumbox").innerHTML = "Bàn số " + tablenum;

  cusnum = e.target.getAttribute("data-state");
  if (cusnum == 0) {
    document.getElementById("tablestate").innerHTML = "Bàn đang trống";
    document.getElementById("tabletime").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";
    document.getElementById("intbl").style.display = "initial";
    document.getElementById("islider").style.display = "block";
  }
  else {
    document.getElementById("tablestate").innerHTML = "Bàn đang có khách";
    document.getElementById("tabletime").innerHTML = "Thời gian khách đã ngồi: " + custime;
    document.getElementById("tabletime").style.display = "initial";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "initial";
    document.getElementById("islider").style.display = "none";
  }
}

function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], start[2]);
  var endDate = new Date(0, 0, 0, end[0], end[1], end[2]);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);
  diff -= minutes * 1000 * 60;
  var seconds = Math.floor(diff / 1000);

  return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes + ":" + (seconds < 9 ? "0" : "") + seconds;
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
    document.getElementById("overlay").style.display = "none";
  }

  usetable() {
    var d = new Date();
    var currentdate = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-time", currentdate);

    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";

    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.display = "none";

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-state", currentcus);
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = '#E26868';

    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");

    document.querySelector('[data-no2 = "' + tablenum + '"]').innerHTML = currentcus + "/" + max;
    this.setState({ value: 1 });
  }

  cleartable() {
    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-time", "0");

    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";

    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.display = "none";

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-state", "0");
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = 'rgba(0, 0, 0, 0)';

    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");

    document.querySelector('[data-no2 = "' + tablenum + '"]').innerHTML = "0/" + max;
    this.setState({ value: 1 });
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
        <input type="button" value="Hủy" onClick={this.cancel} id="cancelbutton" />
      </div>
    )
  }
}


export default Table;