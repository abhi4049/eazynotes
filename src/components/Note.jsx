import React from "react";
import "./notestyle.css";
const Note = () => {
  function openMenu() {
    document.querySelector(".pallete").style.visibility = "visible";
    document.querySelector(".menu").style.visibility = "collapse";
    document.querySelector(".closebtn").style.visibility = "visible";
  }
  function closeMenu() {
    document.querySelector(".pallete").style.visibility = "collapse";
    document.querySelector(".menu").style.visibility = "visible";
    document.querySelector(".closebtn").style.visibility = "collapse";
  }
  return (
    <section className="note">
      <div className="container">
        <div className="left">
          <button className="menu" onClick={openMenu}>
            +
          </button>{" "}
          <button className="closebtn" onClick={closeMenu}>
            ×
          </button>
          <div className="pallete">
            <button id="crimsonch" onClick={closeMenu}></button>
            <button id="orangech" onClick={closeMenu}></button>
            <button id="yellowch" onClick={closeMenu}></button>
            <button id="aquach" onClick={closeMenu}></button>
            <button id="limech" onClick={closeMenu}></button>
            <button id="tealch" onClick={closeMenu}></button>
            <button id="violetch" onClick={closeMenu}></button>
          </div>
        </div>

        <div className="right">
          <div className="navbar">eazynotes</div>
          <div className="notes-container">
            <div className="notesdoc" id="crimsonch">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="orangech">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="yellowch">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="aquach">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="limech">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="tealch">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
            <div className="notesdoc" id="violetch">
              <h3>Note Title</h3>
              <p>note body</p>
              <div className="optbar">
                <input type="date" readOnly></input>
                <button>📝</button>
                <button>🗑️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Note;
