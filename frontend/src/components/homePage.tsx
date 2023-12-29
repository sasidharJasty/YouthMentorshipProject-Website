import React, { useState } from "react";
import axios from "axios";
import bg from "./bg.png";
import map from "./map.png";
import mic from "./mic.png";
import speaker from "./speaker.png";
import award from "./award.png";
import divider from "./divider.png";
import SWE from "./SWE.png";
import BM from "./bm.png";
import CDE from "./CDE.png";
import EY from "./EY.png";
import unity from "./unity.png";
import ResponsiveAppBar from "./Nav2";
import Item from "./Item";
import Carousel from "./carousel";
import Footer_logo from "./Footer-logo.png";

const list: string[] = [SWE, BM, CDE, EY, unity];

interface Prop {}

export default function Home(props: Prop) {
  const val = JSON.parse(localStorage.getItem("Data") || "{}");
  return (
    <div className="">
      <div>
        <div className="z-1">
          <img
            className="absolute img"
            width="110%"
            src="https://i.ibb.co/6y0dx0Z/Whats-App-Image-2023-12-03-at-19-19-48-98168732.jpg"
          />
          <div className="flex z-1  mt-40 ml-40">
            <div className="relative z-1 title-container mt-10">
              <h1 className="relative font-bold TitleText   ">
                Teach the
                <br />
              </h1>
              <h1 className="relative font-bold TitleText   ">
                youth. Shape
                <br />
              </h1>
              <h1 className="relative font-bold TitleText ">
                the future.
                <br />
              </h1>
              <div className="mt-7 ml-12">
                <a href="/signup" className="relative font-medium Title-btn ">
                  {" "}
                  Join YMP for free
                </a>
              </div>
            </div>
            <img
              className="z-3 relative girlslearn  "
              src="https://i.ibb.co/Y2mRTpc/girlslearn-1.png"
            />
          </div>
        </div>

        <div className="z-50 mt-5 relative">
          <div className="z-40 relative">
            <div className="z-40 absolute Carousel-info ml-5 mt-10 pb-10 mr-10">
              <div className="w-3/12 ml-7 mt-5">
                <h1
                  className="mb-10 c-title font-semibold"
                  style={{ pointerEvents: "auto", userSelect: "text" }}
                >
                  How can mentorship catapult your project's impact?
                </h1>
                <h3
                  className="text-black c-text"
                  style={{ pointerEvents: "auto", userSelect: "text" }}
                >
                  With access to our vast network of mentors, you can develop a
                  project of your choosing with professional guidance. New
                  skills learned through projects translate directly to amazing
                  opportunities in the future.
                </h3>
              </div>
            </div>
            <div className="z-65 absolute flex Carousel columns-3 right-5 pb-10 pl-40 mr-10">
              {/* ... Your existing content for this section ... */}
              <Item
                url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
                title="Upcoming Events"
                description="Explore upcoming and previous events at YMP that you can participate in virtually and in person."
              />
              <Item
                url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
                title="Join YMP Today"
                description="Join YMP to take a part in programs and opportunities for youth. Gain access to a global network of mentors for your projects."
              />
              <Item
                url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
                title="Chapter Program"
                description="Create a chapter to make an impact with your community on your community by completing projects with personalized mentorship."
              />
            </div>
          </div>
        </div>

        <div className="z-100 relative w-full contain ">
          <img className="absolute divider z-80" src={divider}></img>
          <div className="absolute flex w-full info-box z-9">
            <div className="absolute left-0 pl-10">
              <h1 className="Divider-title-txt z-90">
                Explore some of out initiatives,
                <br /> missions, and impact
              </h1>
              <div className="grid grid-cols-2 gap-10 gap-y-40 pt-20 Divider-Grid w-1/2">
                <div className="z-70">
                  <div className="flex">
                    <img src={map} className="Grid-img absolute"></img>
                    <h2 className="font-bold Grid-content flex">
                      <u>YMP Match</u>
                    </h2>
                  </div>

                  <p className="Grid-content-P">
                    Using this platform you can explore experienced
                    professionals that are mentors through YMP for your project
                    on your own.{" "}
                  </p>
                </div>
                <div className="z-70">
                  <div className="flex">
                    <img src={mic} className="Grid-img absolute"></img>
                    <h2 className="font-bold Grid-content flex">
                      <u>Catapult Podcast</u>
                    </h2>
                  </div>
                  <p className="Grid-content-P">
                    We feature youth making a great impact in their community
                    and especially those who have achieved so through our
                    programs.
                  </p>
                </div>
                <div className="z-70">
                  <div className="flex">
                    <img src={speaker} className="Grid-img absolute"></img>

                    <h2 className="font-bold Grid-content flex">
                      <u>EY X YMP Speaker Session Series</u>
                    </h2>
                  </div>
                  <p className="Grid-content-P">
                    Collaborating with Embrace Youth from Indonesia, we have a
                    series of speakers talking about the skills you can learn
                    early that they learned the hard way through their
                    experiences. Register for the series from January 21 -
                    February 4.
                  </p>
                </div>
                <div className="z-80">
                  <div className="flex">
                    <img src={award} className="Grid-img absolute"></img>
                    <h2 className="font-bold Grid-content flex">
                      <u>Awards</u>
                    </h2>
                  </div>
                  <p className="Grid-content-P">
                    The Youth Mentorship Project likes to honor youth who are
                    making an impact in their community with projects they have
                    built.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 w-1/2 z-90">
              <div className="API text-center">Integrate API here</div>
              <div className="grid API-grid grid-cols-2 ">
                <div>
                  <h1 className="API-info font-bold">Countries</h1>
                  <p className="API-Data">16</p>
                </div>
                <div>
                  {" "}
                  <h1 className="API-info font-bold">Branches</h1>
                  <p className="API-Data">20</p>
                </div>
                <div>
                  <h1 className="API-info font-bold">Students</h1>
                  <p className="API-Data">?</p>
                </div>
                <div>
                  <h1 className="API-info font-bold">Mentors</h1>
                  <p className="API-Data">?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Video-Bar absolute flex w-full right-0 z-20">
            <div className="Video rounded-xl">
              <iframe
                className="Video rounded-xl"
                src="https://www.youtube.com/embed/CsE_pVrxXIg?autoplay=1&mute=1"
                title="Meet Your Team Video Template (Editable)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="Video-TXT z-30">
              <h1 className="Video-Title">
                Take a look at what <br />
                we do.
              </h1>
              <h3 className="Video-description">
                Meet the team and learn about <br />
                our initiatives as a <i>youth-lead</i> for <br />
                youth organization.
              </h3>
            </div>
          </div>
          <div className="w-full sponsor absolute right-0 z-11">
            <Carousel
              display={list}
              length={5}
              message="Corporate partners and sponsors support our goals and missions."
            ></Carousel>
          </div>
          <div className="Footer ">
            {" "}
            <div className="Footer-content flex">
              {" "}
              <img src={Footer_logo} className="Footer-image"></img>
              <div className="NAV-links">
                <ul>
                  <li className="Link">
                    <a href="#">About</a>
                  </li>
                  <li className="Link">
                    <a href="#">Programs</a>
                  </li>
                  <li className="Link">
                    <a href="#">Membership</a>
                  </li>
                </ul>
              </div>
              <div className="NAV-links">
                <ul>
                  <li className="Link">
                    <a href="#">Events</a>
                  </li>
                  <li className="Link">
                    <a href="#">Partner</a>
                  </li>
                </ul>
              </div>
              <div className="Chapter-links">
                <ul>
                  <li className="Link">
                    <p>Chapter Regions</p>
                  </li>
                  <li className="Link">
                    <a href="#">Americas</a>
                  </li>
                  <li className="Link">
                    <a href="#">Asia Pacific</a>
                  </li>
                  <li className="Link">
                    <a href="#">Europe</a>
                  </li>
                </ul>
              </div>
              <div className="Terms-links">
                <ul>
                  <li className="Link">
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li className="Link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="Link">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="Link">
                    <a href="#">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed z-50">
          <ResponsiveAppBar
            Username={{
              User: val["User"],
              Username: val["Username"],
              Id: val["Id"],
            }}
          />
        </div>
      </div>
    </div>
  );
}
