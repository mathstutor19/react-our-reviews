import React, {useState} from "react";
import people from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];
    const checkNumber = (number) => {
        if (number < 0) {
            return people.length - 1;
        }
        if (number > people.length - 1) {
            return 0;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newPerson = index + 1;
            return checkNumber(newPerson);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newPerson = index - 1;
            return checkNumber(newPerson);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={image} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button type="" className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button type="" className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button type="" className="random-btn" onClick={randomPerson}>
                serpire me
            </button>
        </article>
    );
};

export default Review;
