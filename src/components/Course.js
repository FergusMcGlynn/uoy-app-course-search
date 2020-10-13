import React from "react";
import { COURSE_MODEL } from "../constants/CourseModel";
import { CourseDetails } from "./CourseDetails";

const Course = ({ course }) => {
    const title = () => {
        if (course.award) {
            return `${course.title} - ${course.award}`;
        }

        return course.title;
    };

    return (
        <li className="c-listings-item ">
            {course.title} {course.awardSuffix}
            <a className="c-listings-item__link" href={course.liveUrl}>
                <h2 className="c-listings-item__title">{title(course)}</h2>
            </a>
            <CourseDetails course={course} />
        </li>
    );
};

Course.propTypes = {
    course: COURSE_MODEL,
};

export { Course };
