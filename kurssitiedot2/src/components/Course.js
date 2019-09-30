import React from 'react'

const Header = (props) => {
    return (
        <h2>{props.course}</h2>
    )
}

const Part = ({name, nr}) => {
    return (
        <p>
            {name} {nr}
        </p>
    )
}

const Content = ({parts}) => {
    const partlist = () => parts.map(part => 
        <Part
            key={part.id}
            name={part.name}
            nr={part.exercises}
        />      
    )
    return (
        <div>
            {partlist()}
        </div> 
    )   
}

const Total = ({parts}) => {
    const sum = parts.reduce(function (acc, curVal) {
        return acc + curVal.exercises;
    }, 0)
    return (
        <b>total of exercises {sum}</b>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course