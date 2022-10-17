import React from 'react';
import './Table.css';

const Table = () => {
    return (
        <div id="maintable">
            <div id="leftbank">
                <p class="tablebox" id="rcorners1">1</p>
                <p class="tablebox" id="rcorners2">2</p>
                <p class="tablebox" id="rcorners3">3</p>
                <p class="tablebox" id="rcorners4">4</p>
                <p class="tablebox" id="rcorners5">5</p>
            </div>
            <div id="rightbank">
                <p class="tablebox" id="rcorners6">6</p>
                <p class="tablebox" id="rcorners7">7</p>
                <p class="tablebox" id="rcorners8">8</p>
                <p class="tablebox" id="rcorners9">9</p>
                <p class="tablebox" id="rcorners10">10</p>
            </div>
        </div>
    );
};

export default Table;