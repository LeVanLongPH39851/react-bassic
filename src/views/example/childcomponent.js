import React from "react";
import "./demo.scss";
// class component
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnclickDelete = (job) => {
    console.log("handleOnclickDelete: ", job);
    this.props.deleteAJob(job);
  };

  render() {
    console.log(this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    //key:value
    let { name, age, address, arrJobs } = this.props; //ngắn gọn
    let { showJobs } = this.state; //ngắn gọn
    return (
      <>
        {!showJobs ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, key) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// function component
// const ChildComponent = (props) => {
//   console.log(">>> props: ", props);
//   let { arrJobs } = props; //ngắn gọn
//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, key) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
