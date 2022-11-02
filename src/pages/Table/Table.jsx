import React from 'react';
import './Table.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const Table = () => {
  return (
    <div id="table">
      <div id="maintable">
        <div id="leftbank">
          <p className="tablebox" id="rcorners1" onClick={tableclick} data-no="1" data-state="0" data-time="0" data-maxcus="2">
            <p className="tablenum">1</p>
            <p className="tablestate" id="tablestate1" data-no2="1">0/2</p>
          </p>
          <p className="tablebox" id="rcorners2" onClick={tableclick} data-no="2" data-state="0" data-time="0" data-maxcus="2">
            <p className="tablenum">2</p>
            <p className="tablestate" id="tablestate2" data-no2="2">0/2</p>
          </p>
          <p className="tablebox" id="rcorners3" onClick={tableclick} data-no="3" data-state="0" data-time="0" data-maxcus="2">
            <p className="tablenum">3</p>
            <p className="tablestate" id="tablestate3" data-no2="3">0/2</p>
          </p>
          <p className="tablebox" id="rcorners4" onClick={tableclick} data-no="4" data-state="0" data-time="0" data-maxcus="2">
            <p className="tablenum">4</p>
            <p className="tablestate" id="tablestate4" data-no2="4">0/2</p>
          </p>
        </div>
        <div id="centerbank">
          <p className="tablebox2" id="rcorners5" onClick={tableclick} data-no="5" data-state="0" data-time="0" data-maxcus="4">
            <p className="tablenum">5</p>
            <p className="tablestate2" id="tablestate5" data-no2="5">0/4</p>
          </p>
          <p className="tablebox2" id="rcorners6" onClick={tableclick} data-no="6" data-state="0" data-time="0" data-maxcus="4">
            <p className="tablenum">6</p>
            <p className="tablestate2" id="tablestate6" data-no2="6">0/4</p>
          </p>
          <p className="tablebox2" id="rcorners7" onClick={tableclick} data-no="7" data-state="0" data-time="0" data-maxcus="4">
            <p className="tablenum">7</p>
            <p className="tablestate2" id="tablestate7" data-no2="7">0/4</p>
          </p>
          <p className="tablebox2" id="rcorners8" onClick={tableclick} data-no="8" data-state="0" data-time="0" data-maxcus="4">
            <p className="tablenum">8</p>
            <p className="tablestate2" id="tablestate8" data-no2="8">0/4</p>
          </p>
          <p className="tablebox2" id="rcorners9" onClick={tableclick} data-no="9" data-state="0" data-time="0" data-maxcus="4">
            <p className="tablenum">9</p>
            <p className="tablestate2" id="tablestate9" data-no2="9">0/4</p>
          </p>
        </div>
        <div id="rightbank">
          <p className="tablebox3" id="rcorners10" onClick={tableclick} data-no="10" data-state="0" data-time="0" data-maxcus="6">
            <p className="tablenum">10</p>
            <p className="tablestate3" id="tablestate10" data-no2="10">0/6</p>
          </p>
          <p className="tablebox3" id="rcorners11" onClick={tableclick} data-no="11" data-state="0" data-time="0" data-maxcus="6">
            <p className="tablenum">11</p>
            <p className="tablestate3" id="tablestate11" data-no2="11">0/6</p>
          </p>
          <p className="tablebox3" id="rcorners12" onClick={tableclick} data-no="12" data-state="0" data-time="0" data-maxcus="6">
            <p className="tablenum">12</p>
            <p className="tablestate3" id="tablestate12" data-no2="12">0/6</p>
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

// Called when click on any table square, show control side menu =========================================
const tableclick = e => {
  loopv = 0;

  var starttime = e.target.getAttribute("data-time");

  document.getElementById("maintable").style.pointerEvents = "none";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("rightpanel").style.width = "26vw";

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
// ==========================================================================================================


// Calculate elapsed time of table when clicked on table that already has customer ==========================
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
// ==========================================================================================================


// Right-side panel (include customer quantity selector, "Xếp khách", "Dọn bàn", and "Trở lại" button) ======
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

  // Increase customer count button
  increment() {
    var max = document.querySelector('[data-no = "' + tablenum + '"]').getAttribute("data-maxcus");
    if (this.value >= max) return;
    this.setState({ value: this.value + 1 });

    currentcus = this.value + 1;
  }

  // Decrease customer count button
  decrement() {
    var min = 1;
    if (this.value <= min) return;
    this.setState({ value: this.value - 1 });

    currentcus = this.value - 1;
  }

  // Return (hide right side panel) button
  cancel() {
    this.setState({ value: 1 });
    document.getElementById("maintable").style.pointerEvents = "all";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("rightpanel").style.width = "0px";

    loopv = 1;
  }

  // "Xếp khách" button
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

    sendtableusagedb(currentcus); // Send customer quantity data to DB
  }

  // "Dọn bàn" button
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
// ==========================================================================================================



//=======================================================================================================================================================================
// FIREBASE BLOCK

// Config key for the specific DB, DON'T CHANGE ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyDYDXaRXUvNlfnM6m_1XsOs7Rpi9u8f9Yc",
  authDomain: "pos-system-f8619.firebaseapp.com",
  projectId: "pos-system-f8619",
  storageBucket: "pos-system-f8619.appspot.com",
  messagingSenderId: "100368632661",
  appId: "1:100368632661:web:54506c712ae570699e3ddc"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const firebaseData = db.collection("table-customercount");
// ========================================================================================

// Send time:customer number to DB (called when press "Xếp khách")
function sendtableusagedb(cuscount) {
  var timecap = new Date();
  firebaseData.doc().set({
    date: timecap,
    count: cuscount
  })
}

/*
// Test function
async function test() {
  var totalcusv = 0; 
  var ss = new Date("2022-11-01T10:20:30Z");
  var ee = new Date("2022-11-03T10:20:30Z");
  totalcusv = await gettotalcustomer(ss, ee); 
  console.log("ccc" + totalcusv); 
}  
*/

// Use this function to get total customer in a time period
// startdate and enddate must be in the following format: YYYY-MM-DDTHH:MM:SS
async function gettotalcustomer(startdate, enddate) {
  var sdate = new Date(startdate);
  var edate = new Date(enddate);
  var totalcusv = 0;

  const snapshot = await firebaseData.get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
      var docdate = doc.data()['date'];
      var ddate = new Date(docdate.toDate());

      if (ddate > sdate && ddate < edate) {
        var cust = doc.data()['count'];
        totalcusv += cust;
      }
    });
  });
  return totalcusv;
}

export default Table;