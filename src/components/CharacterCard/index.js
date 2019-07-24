import React from "react";
import "./style.css";



function CharacterCard(props) {
    return (
                <div className="col-md-3">
                    <div className="card" onClick={props.clickCharacter}>
                        <div className="img-container">
                            <img alt={props.name} src={props.image} />
                        </div>
                        <div className="content">
                            <p>{props.name} <i className="fas fa-ice-cream"></i></p>
                        </div>
                    </div>
                </div>
                
        


    );
}

export default CharacterCard;
