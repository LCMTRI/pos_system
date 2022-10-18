import React from 'react';
import './Table.css';

const Table = () => {
    return (
        <div id="table">
            <div id="maintable">
                <div id="leftbank">
                    <p class="tablebox" id="rcorners1" onClick={tableclick} data-no="1" data-state="0">1</p>
                    <p class="tablebox" id="rcorners2" onClick={tableclick} data-no="2" data-state="0">2</p>
                    <p class="tablebox" id="rcorners3" onClick={tableclick} data-no="3" data-state="0">3</p>
                    <p class="tablebox" id="rcorners4" onClick={tableclick} data-no="4" data-state="0">4</p>
                    <p class="tablebox" id="rcorners5" onClick={tableclick} data-no="5" data-state="0">5</p>
                </div>
                <div id="centerbank">
                    <p class="tablebox" id="rcorners6" onClick={tableclick} data-no="6" data-state="0">6</p>
                    <p class="tablebox" id="rcorners7" onClick={tableclick} data-no="7" data-state="0">7</p>
                    <p class="tablebox" id="rcorners8" onClick={tableclick} data-no="8" data-state="0">8</p>
                    <p class="tablebox" id="rcorners9" onClick={tableclick} data-no="9" data-state="0">9</p>
                    <p class="tablebox" id="rcorners10" onClick={tableclick} data-no="10" data-state="0">10</p>
                </div>
                <div id="rightbank">
                    <p class="tablebox" id="rcorners6" onClick={tableclick} data-no="11" data-state="0">11</p>
                    <p class="tablebox" id="rcorners7" onClick={tableclick} data-no="12" data-state="0">12</p>
                    <p class="tablebox" id="rcorners8" onClick={tableclick} data-no="13" data-state="0">13</p>
                    <p class="tablebox" id="rcorners9" onClick={tableclick} data-no="14" data-state="0">14</p>
                    <p class="tablebox" id="rcorners10" onClick={tableclick} data-no="15" data-state="0">15</p>
                </div>
            </div>

            <div id="rightpanel">
                <div id="control">
                <br></br><br></br>
                <center><h1 id="tablenumbox"></h1></center>
                <br></br><br></br><br></br><br></br>
                <center><big id="tablestate"></big></center>
                <br></br><br></br><br></br><br></br>
                
                <center>
                <div id="tableslider"><InputNumber min={1} max={4} /></div>
                </center>

                <br></br><br></br><br></br><br></br>
                <center><input type="button" value="Xếp khách" onClick={usetable} id="intbl"/></center>
                <br></br><br></br>
                <center><input type="button" value="Dọn bàn" onClick={cleartable} id="clrtbl"/></center>
                </div>
            </div>
        </div>
    );
};

var tablenum;
var cusnum;
var currentcus = 1;

const tableclick = e => {
    currentcus = 1;

    document.getElementById("control").style.display = "initial";

    tablenum = e.target.getAttribute("data-no");
    document.getElementById("tablenumbox").innerHTML = "Bàn số " + tablenum;
    
    cusnum = e.target.getAttribute("data-state");
    if (cusnum == 0) {
        document.getElementById("tablestate").innerHTML = "Bàn đang trống";
        document.getElementById("clrtbl").style.display = "none";
        document.getElementById("clrtbl").disabled = true;
        document.getElementById("intbl").style.display = "initial";
        document.getElementById("intbl").disabled = false;
        document.getElementById("tableslider").style.display = "initial";
        document.getElementById("tableslider").disabled = false;
    }
    else {
        document.getElementById("tablestate").innerHTML = "Bàn đang có khách";
        document.getElementById("intbl").style.display = "none";
        document.getElementById("intbl").display = true;
        document.getElementById("clrtbl").style.display = "initial";
        document.getElementById("clrtbl").disabled = false;
        document.getElementById("tableslider").style.display = "none";
        document.getElementById("tableslider").disabled = true;
    }
}

const usetable = () => {
    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";
    document.getElementById("tableslider").style.display = "none";

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-state", "1"); 
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = '#E26868'; 

    document.querySelector('[data-no = "' + tablenum + '"]').innerHTML = currentcus + "/10";
}

const cleartable = () => {
    document.getElementById("control").style.display = "none";
    document.getElementById("intbl").style.display = "none";
    document.getElementById("clrtbl").style.display = "none";
    document.getElementById("tableslider").style.display = "none";

    var element = document.querySelector('[data-no = "' + tablenum + '"]')
    element.setAttribute("data-state", "0"); 
    document.querySelector('[data-no = "' + tablenum + '"]').style.background = 'rgba(0, 0, 0, 0)';

    document.querySelector('[data-no = "' + tablenum + '"]').innerHTML = tablenum;
}

class InputNumber extends React.Component {
    state = {
      value: 1,
    }
  
    constructor() {
      super();
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    get value() {
      return this.state.value;
    }
  
    increment() {
      const { max } = this.props;
      if (typeof max === 'number' && this.value >= max) return;
      this.setState({ value: this.value + 1 });

      currentcus = this.value + 1;
    }
  
    decrement() {
      const { min } = this.props;
      if (typeof min === 'number' && this.value <= min) return;
      this.setState({ value: this.value - 1 });

      currentcus = this.value - 1;
    }
    
    render() {
      return (
        <div className="input-number" style={this.props.style}>
          <button type="button" onClick={this.decrement}>&minus;</button>
          <span>{this.value}</span>
          <button type="button" onClick={this.increment}>&#43;</button>     
        </div>
      )
    }
  }


export default Table;