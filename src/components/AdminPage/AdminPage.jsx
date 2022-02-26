import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import zIndex from "@mui/material/styles/zIndex";
import "./AdminPage.css";
import Swal from "sweetalert2"; //sweetalert 2 import
import { animated, useSpring } from "react-spring";

function AdminPage() {
  let [feedbackArray, setFeedbackArray] = useState([]);
  let [totalFeedback, setTotalFeedback] = useState("");

  useEffect(() => {
    refreshFeedback();
  }, []);

  //GET attempt
  const refreshFeedback = () => {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        console.log("response.data is:", response.data);
        console.log(
          "latest feedback:",
          response.data[response.data.length - 1].id
        );
        setFeedbackArray(response.data);
        setTotalFeedback(response.data[response.data.length - 1].id);
      })
      .catch((error) => {
        console.log("error on GET client side:", error);
      });
  };

  //put client side
  const switchFlag = (lasagna) => {
    console.log("selected ID is:", lasagna);
    axios({
      method: "PUT",
      url: "/feedback/" + lasagna,
    })
      .then((response) => {
        console.log("response.data is:", lasagna);
        refreshFeedback();
      })
      .catch((error) => {
        console.log("error on PUT client side", error);
      });
  };

  const deleteWarn = (pancakes) => {
    console.log("using swal to warn before delete");
    Swal.fire({
      title: "Whoa...are you sure?",
      text: "This person's feedback will be gone forever.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yep!",
      cancelButtonText: "On Second Thought...",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFeedback(pancakes);
        Swal.fire("Deleted!", "Feedback deleted.", "success");
      }
    });
  };

  //delete client side
  const deleteFeedback = (pancakes) => {
    console.log("selected ID is:", pancakes);
    axios({
      method: "DELETE",
      url: "/feedback/" + pancakes,
    }).then((response) => {
      console.log("response.data is:", pancakes);
      refreshFeedback();
    });
  };

  // return to page 1 on click of 'here' text
  const history = useHistory();
  const goToPage1 = () => {
    history.push("/");
  };

  const feedbackColor = (feelz) => {
    switch (feelz) {
      case 1:
        return "one";
        break;
      case 2:
        return "two";
        break;
      case 3:
        return "three";
        break;
      case 4:
        return "four";
        break;
      case 5:
        return "five";
        break;
      case 6:
        return "six";
        break;
      case 7:
        return "seven";
        break;
      case 8:
        return "eight";
        break;
      case 9:
        return "nine";
        break;
      case 10:
        return "ten";
        break;
    }
  };

  console.log("feedbackArray is now:", feedbackArray);

  const props = useSpring({
    delay: 400,
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const propsFooter = useSpring({
    delay: 1200,
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <div>
      <animated.div style={props}>
        <h1 id="adminHeader">OH SNAP. You found my Admin Page!</h1>
        <h4>
          As of <i>this moment</i>, anonymous feedback has been left{" "}
          <span id="totalFeedback">
            <u>{totalFeedback}</u>
          </span>{" "}
          times. Leave yours{" "}
          <span id="here" onClick={() => goToPage1()}>
            <b>here</b>
          </span>
          !
        </h4>
        <table className="center">
          <thead>
            <tr>
              <th id="idCell">ID</th>
              <th>FEELING</th>
              <th>UNDERSTANDING</th>
              <th>SUPPORT</th>
              <th>COMMENTS</th>
              <th>FLAGGED?</th>
              <th></th>
              <th>DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {feedbackArray.map((feedback, i) => (
              <tr key={i}>
                <td>
                  <b>{feedback.id}</b>
                </td>
                <td className={feedbackColor(feedback.feeling)}>
                  {feedback.feeling}
                </td>
                <td className={feedbackColor(feedback.understanding)}>
                  {feedback.understanding}
                </td>
                <td className={feedbackColor(feedback.support)}>
                  {feedback.support}
                </td>
                <td>{feedback.comments}</td>
                <td>
                  {feedback.flagged ? (
                    <div className="yes">
                      <b>Yes</b>
                    </div>
                  ) : (
                    <div className="no">No</div>
                  )}
                </td>
                <td id="flagButtonCell">
                  {feedback.flagged ? (
                    <button
                      id="flagButton"
                      onClick={() => switchFlag(feedback.id)}
                    >
                      Un-Flag
                    </button>
                  ) : (
                    <button
                      id="flagButton"
                      onClick={() => switchFlag(feedback.id)}
                    >
                      Flag
                    </button>
                  )}
                </td>
                <td id="dateCell">
                  {new Date(feedback.date)
                    .toISOString()
                    .slice(0, 10)
                    .replace(`T`, ``)}
                </td>
                <td>
                  <button
                    id="deleteButton"
                    onClick={() => deleteWarn(feedback.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </animated.div>
      {/* <animated.div style={propsFooter}>
            <h2>Thanks for checking out my Prime Feedback Project!</h2>

                <footer>
                    <p id="copyrightLine">Copyright © 2021 Chris "Mo" Mochinski (<a href="mailto:cmochinski@gmail.com">Email</a> |
                        <a href="https://github.com/chrismochinski" target="_blank">Github</a>)</p>
                    <p id="vsCodeAcknowledgement">Made with <a href="https://code.visualstudio.com/" target="_blank">VS Code</a> |
                        <a href="https://www.pixelmator.com/pro/" target="_blank">Pixelmator Pro</a></p>
                </footer>
            </animated.div> */}
    </div>
  );
}

export default AdminPage;
