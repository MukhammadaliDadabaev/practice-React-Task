import React, { Component } from "react";

class ProfileCard extends Component {
  changeData(type, isIncr) {
    this.props.changeNewData(type, isIncr);
  }

  saveChangeClearData = () => {
    this.props.saveNewData();
    this.props.clearData();
  };

  render() {
    const { currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h2>Add Modal</h2>
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-sm-4">
              <h4>New fine:</h4>
              <div className="btn-group btn-group-lg">
                <button
                  className="btn btn-dark"
                  onClick={() => this.changeData("speed", false)}
                >
                  -
                </button>
                <button className="btn">
                  {currentData ? currentData.speed : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeData("speed", true)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                className="img-fluid w-50"
                src="https://cartechnic.ru/img/articles/1/2700/top-10_samyh_opasnyh_kamer_i_radarov_gibdd_dlja_voditelej3.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-4">
              <h4>Payment amount:</h4>
              <div className="btn-group btn-group-lg">
                <button
                  className="btn btn-dark"
                  onClick={() => this.changeData("fine", false)}
                >
                  -
                </button>
                <button className="btn">
                  💰 {currentData ? currentData.fine : 0}0.000sum
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeData("fine", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer mb-3 p-3">
          <button
            className="btn btn-success btn-lg ml-2"
            onClick={this.saveChangeClearData}
          >
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
