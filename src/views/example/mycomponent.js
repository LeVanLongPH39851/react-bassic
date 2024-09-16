import React from "react";
import ChildComponent from "./childcomponent";
import AddComponent from "./addcomponent";

class MyComponent extends React.Component {
  /**
   * JSX => return block
   * fragment
   */

  //key:value
  state = {
    // name: "",
    // age: 11,
    // firstName: "",
    // lastName: "",
    arrJobs: [
      {
        id: "job1",
        title: "Developers",
        salary: "500",
      },
      {
        id: "job2",
        title: "Testers",
        salary: "400",
      },
      {
        id: "job3",
        title: "Project Managers",
        salary: "1000",
      },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidMount() {
    console.log(">>> run component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> run component did update: ",
      "prev state: ",
      prevState,
      " current state: ",
      this.state
    );
  }

  // handleOnChangeName = (event) => {
  //   // console.log(event.target.value, event.target, event);
  //   // merge
  //   // this.state.name = event.target.value //bad code
  //   this.setState({
  //     name: event.target.value,
  //     age: 18,
  //   });
  // };

  // handleClickButton = () => {
  //   alert("Click me");
  // };

  render() {
    // let name = "Le Van Long";
    // console.log(this.state);
    return (
      // <>
      //   <div className="first">
      //     <input
      //       value={this.state.name}
      //       type="text"
      //       onChange={(event) => this.handleOnChangeName(event)}
      //     />
      //     {/* {console.log("My name is : ", name)} */}
      //     Hello, My name is {this.state.name} {/* {this.state['name']} */}
      //   </div>
      //   <div className="second">I am {this.state.age}</div>
      //   <div className="third">
      //     <button onClick={() => this.handleClickButton()}>Click me</button>
      //   </div>
      // </>
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
