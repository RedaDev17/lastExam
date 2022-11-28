import React from "react";
import airplane from "../../assets/images/airplane.png";

function listFlights() {
  return (
    <div
      className="h-100 d-flex justify-content-center"
      style={{ alignItems: "center" }}
    >
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <div style={{ height: "100px", width: "100px" }}>
              <img
                src={airplane}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div
            className="text-muted"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {console.log(localStorage.getItem("ticket"))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default listFlights;
