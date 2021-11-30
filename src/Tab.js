import React, { useState } from "react";

const MyTabsComponent = () => {
    const [toogleState, setToogleState] = useState(1);
     const toogleTab = (index) =>{
         setToogleState(index);
     }
     const style = {
        div: {
          height:"30px",
          background:"#ddd",
          marginLeft:"5px",
          padding:"0px 25px",
          cursor:"pointer",
          textAlign: "center",
          width: "50%",
          boxSizing: "content-box",
          position: "relative",
          outline: "none"
        },
        tabs_div:{
            display: "flex",
            width: "50%",
            position:"absolute",
            left:"25%"
        },
        contentTabs:{
            flexGrow : "1"
          }
      }
    return <div className="tabsBlock">
        <div className="tabbtn" style={style.tabs_div}>
        <div className={toogleState === 1 ? "tabs active-tab":"tabs"} onClick={() => toogleTab(1)} style={style.div}>Tab 1</div>
        <div className={toogleState === 2 ? "tabs active-tab":"tabs"} onClick={() => toogleTab(2)} style={style.div}>Tab 2</div>
        <div className={toogleState === 3 ? "tabs active-tab":"tabs"} onClick={() => toogleTab(3)} style={style.div}>Tab 3</div>
        </div>
        <div className="contents" style={style.contentTabs}>
            <div className={toogleState === 1 ? "content active-content":"content"}>
                <h2>content 2</h2>
            </div>
            <div className={toogleState === 2 ? "content active-content":"content"}>
                <h2>content 2</h2>
            </div>
            <div className={toogleState === 3 ? "content active-content":"content"}>
                <h2>content 2</h2>
            </div>
        </div>
    </div>;
};

export default MyTabsComponent;