import React, { useEffect, useState } from "react";

import "./Style/ZoomScheduleStyle.scss";
import { PageTitlebar } from "./../PageTitlebar/PageTitlebar";
import { TiTick, TiVideo } from "react-icons/ti";
import axios from "../../../index";
import { useParams } from "react-router-dom";

export function ZoomSchedule() {
  const mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [allSchedule, setAllSchedule] = useState([]);
  const param = useParams();
  const token = localStorage.getItem("token");

  function getAllSchedule() {
    axios
      .post("/schedule/view/" + param.courseId, { token: token })
      .then((res) => {
        console.log(res.data);
        setAllSchedule(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    getAllSchedule();
  }, [param.courseId]);
  return (
    <div className="zoomSchedule">
      <PageTitlebar emoji="" title={"Zoom Schedule"} />
      <div className="zoomSchedule-username">
        Hi &#128522; ijass, you are enrolled in{" "}
        <span style={{ color: "green", fontWeight: "500" }}>THREE JS</span>{" "}
        course.
      </div>

      <div className="zoomSchedule-Btn-Row">
        <div className="zoomSchedule-viewSyllabus">View Syllabus</div>
      </div>

      {allSchedule.map((schedule, key) => {
        let dateTime = new Date(schedule.classDate);
        let date = dateTime.getDate();
        let month = dateTime.getMonth();

        return (
          <div key={key} className="zoomSchedule-Card">
            <div className="zoomSchedule-Card-Left">
              <p>{schedule.batchTime} PM</p>
              <p>{date}</p>
              <p>{mL[month]}</p>
            </div>
            <div className="zoomSchedule-Card-Right-Row">
              <div className="zoomSchedule-Card-Right-Div1">
                <p>{schedule.topic}</p>
                <p>Zoom Meeting with {schedule.trainer.trainerName}</p>
                <p>60 Minutes</p>
              </div>
              {schedule.isCompleted ? (
                <div className="zoomSchedule-Card-Right-Div2">
                  <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
                  <p>Completed</p>
                </div>
              ) : (
                <div className="zoomSchedule-Card-Right-Div2">
                  <TiVideo className="zoomSchedule-Card-Right-Div2-icons" />
                  <p>Join</p>
                </div>
              )}

              <div className="zoomSchedule-Card-Right-Div3"></div>
            </div>
          </div>
        );
      })}
      {/* 
      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div>

      <div className="zoomSchedule-Card">
        <div className="zoomSchedule-Card-Left">
          <p>10:00 AM</p>
          <p>22</p>
          <p>June</p>
        </div>
        <div className="zoomSchedule-Card-Right-Row">
          <div className="zoomSchedule-Card-Right-Div1">
            <p>Syllabus</p>
            <p>Zoom Meeting with Thamizharasan</p>
            <p>90 Minutes</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div2">
            <TiTick className="zoomSchedule-Card-Right-Div2-icons" />
            <p>Completed</p>
          </div>
          <div className="zoomSchedule-Card-Right-Div3"></div>
        </div>
      </div> */}
    </div>
  );
}
