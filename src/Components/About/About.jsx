import React from 'react'

const skills = [
  {id: 1, img: "./images/html.png", title: "html 5", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 2, img: "./images/css.png", title: "css 3", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 3, img: "./images/js.png", title: "javascript", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 4, img: "./images/java.jpg", title: "java EE", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 5, img: "./images/react.png", title: "React js", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 6, img: "./images/rails.png", title: "ruby on rails", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 7, img: "./images/php.png", title: "php", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 8, img: "./images/mysql.png", title: "mysql", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  {id: 9, img: "./images/git.png", title: "git", desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },


]
const About = () => {
  return (
    <div className="container">
      <h1 className='headline'>skills - experience</h1>
      <div className="about-container">
        {skills.map((skill) => {
          return(
              <div className="card-wrapper" id={"card_" + skill.id}>
                <img src={skill.img} alt="card-img" className="card-img" />
                <h3 className="card-title">{skill.title}</h3>
                <div className="card-desc">
                  <p className="card-text">{skill.desc}</p>
                </div>
              </div>
              )
            }
          )
        }
        </div>
    </div>
  )
}

export default About