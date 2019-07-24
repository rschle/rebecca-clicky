import React from "react";
import "./style.css";



function CharacterCard(props) {
    return (
                <div className="col-md-3">
                    <div className="card">
                        <div className="img-container">
                            <img alt={props.name} src={props.image} />
                        </div>
                        <div className="content">
                            <p>{props.name} <i class="fas fa-ice-cream"></i></p>
                        </div>
                    </div>
                </div>
                
        


    );
}

export default CharacterCard;
