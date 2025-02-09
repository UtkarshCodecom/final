import React from 'react';
import { Fragment } from 'react';
import MetaData from "../layout/MetaData";
import './udemy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '@mui/material';
import mt from "../../images/meet.png";

import { faArrowCircleRight, faStar, faStarHalfStroke, faTags } from '@fortawesome/free-solid-svg-icons';

const Udemy = () => {

  const book = ()=>{
       window.location.href ="/book"
  }
  
  const  isimge = window.innerWidth >= 784
  return (
    <Fragment>
      <MetaData title="Inhouse" />
      <div>
        <h1 className="text-center text-white font-bold text-3xl my-8">Udemy </h1>
      </div>

      <div>
        <h2 className="text-gray-300 text-lg ml-14 mt-2">Network & Security</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        <Card
          link="https://www.udemy.com/course/bug-bounty-and-vapt-course-will-make-uh-pro-rich-2023/?referralCode=A91D6514D09C378A5006"
          imgSrc="https://img-b.udemycdn.com/course/480x270/5052620_a3d6_5.jpg"
          title="Bug Bounty-Ethical Hacking"
          author="Armaan Sidana"
          price="
          Original Price₹2,799
          Discount86% off"
          rating="4.3 (182 ratings)"
        />

        <Card
          link="https://www.udemy.com/course/onestophackingmarathon/?referralCode=2AA6AB838592246703DB"
          imgSrc="https://img-b.udemycdn.com/course/480x270/5548924_2f50_7.jpg"
          title="OSCP Ethical Hacking"
          author="Armaan Sidana"
          price="
          Original Price₹1,499
          Discount73% off"
          rating="4.8 (59 ratings)"
          

        />

        <Card
          link="https://www.udemy.com/course/web3-and-blockchain-securitypen-testing-bug-bounty-part1/?referralCode=F0C016A3B58AA5B4A8BB"
          imgSrc="https://img-b.udemycdn.com/course/480x270/5880758_1e0c_2.jpg"
          title="Web3 And Blockchain Security"
          author="Armaan Sidana"
          price="
          Original Price₹1,499
          Discount73% off"
          rating="4.8 (64 ratings)"
          highlyrated = "Highly rated"
                />
      </div>

      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                            <div className="book ">
                               {isimge ? <img src={mt} /> : null}
                                <div className="book1">
                                  <h3>Book a meeting with us</h3> 
                                    {isimge ? <p>Lets Collaborate and discuss about your business goals.
                                    </p> : null}
                                </div>
                                <Button variant="contained" onClick={book}>Book a meeting</Button>
                            </div>
                        </ScrollAnimation>

    
    </Fragment>
  );
};

const Card = ({ link, imgSrc, title, author , price , rating }) => {
  return (
    <div className=" my-8 sm:w-full md:w-96 " style={{width:'fit-content', margin:'3%'}}>
      <Link to={link} className="course-link">
        <div>
          <img src={imgSrc} className="h-40 rounded-md hover:scale-105" alt="Course Thumbnail" />
        </div>
        <div>
          <p className="offer-text text-blue-500">
            <FontAwesomeIcon icon={faTags} className="text-pink-500" /> {price}
          </p>
          <h2 className="text-white font-medium">{title}</h2>
          <p className="text-[8px] text-gray-400">
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" /> {rating}
          </p>
          <p className='text-gray-400'>₹399</p>
          <p className="text-gray-400 font-semibold">{author}</p>
          <FontAwesomeIcon icon={faArrowCircleRight} className="text-gray-400 ml-[270px] text-2xl hover:text-gray-600" />
        </div>
      </Link>
    </div>
  );
};


export default Udemy;
