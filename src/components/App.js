import React, { Component } from "react";

import ProfileCard from "./ProfileCard";

class App extends Component {
  state = {
    dues: [],
    addTable: false,
    currentData: "",
  };

  componentDidMount() {
    const payments = [
      {
        fineName: "Тезликни ошириш",
        fine: 20273,
        speed: 75,
      },
      {
        fineName: "Қизил чироқда ўтиш",
        fine: 40546,
        speed: "🚦",
      },
      {
        fineName: "Енгил тан жарохати етказиш",
        fine: 101365,
        speed: "🚑",
      },
      {
        fineName: "Тўхтаб туриш қоидасини бузиш",
        fine: 60810,
        speed: "🚫",
      },
      {
        fineName: "Маст холатда машина хайдаш",
        fine: 506820,
        speed: "🤑🥂",
      },
    ];
    this.setState({
      dues: payments,
    });
  }

  deleteDues = (index) => {
    const deleteDus = this.state.dues;
    deleteDus.splice(index, 1);
    this.setState({
      dues: deleteDus,
    });
  };

  addTable = () => {
    this.setState({
      addTable: true,
    });
  };
  offTable = () => {
    this.setState({
      addTable: false,
    });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  changeNewData = (type, isIncr) => {
    const newChangeData = this.state.currentData
      ? this.state.currentData
      : {
          fineName: "",
          fine: 20,
          speed: 70,
        };

    if (type === "speed") {
      if (isIncr) {
       newChangeData.speed++;
      } else if (newChangeData.speed < 1) {
        newChangeData.speed = 0;
      } else {
        newChangeData.speed--;
      }
    }

    if (type === "fine") {
      if (isIncr) {
        newChangeData.fine++;
      } else if (newChangeData.fine < 1) {
        newChangeData.fine = 0;
      } else {
        newChangeData.fine--;
      }
    }
    this.setState({
      currentData: newChangeData,
    });
  };

  saveNewData = () => {
    const { dues, currentData } = this.state;
    dues.push(currentData);
    currentData.fineName = "New Penalties";
    this.setState({
      dues,
    });
  };
  render() {
    const { dues, addTable, currentData } = this.state;
    return (
      <div className="market">
        <div className="container">
          <h1 className="text-center p-2">👨‍✈️ PAYMENT SCHEDULE</h1>
          <div className="group btn-group-lg">
            <button className="btn btn-primary mb-2" onClick={this.addTable}>
              Add Table
            </button>
            <button
              className="btn btn-danger mb-2 ml-2"
              onClick={this.offTable}
            >
              Off Table
            </button>
            {addTable ? (
              <ProfileCard
                clearData={this.clearCurrentData}
                changeNewData={this.changeNewData}
								saveNewData={this.saveNewData}
                currentData={currentData}
              />
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>№</th>
                    <th>JARIMALAR TURI</th>
                    <th>FAOLIYAT TURI</th>
                    <th>TO`LOV SUMMASI</th>
                    <th>OFF | ON</th>
                  </tr>
                </thead>
                <tbody>
                  {dues.map((car, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{car.fineName}</td>
                      <td>{car.speed}</td>
                      <td>
                        <span className="badge badge-primary p-2">
                          💰 {car.fine}0.000 sum
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.deleteDues(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
