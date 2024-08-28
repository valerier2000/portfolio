import "./AboutMe.css";
import profilePic from "../assets/Aayush.png";

function AboutMe() {
  return (
    <section className="paralax">
      <div className="about-me">
        <div className="about-me-container">
          <div className="about-me-img">
            <img src={profilePic} alt="Aayush" />
          </div>
          <div className="about-me-text">
            <h2>About me</h2>
            <p>
              Hi, I am Aayush. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quod, dolor. Iusto ut vitae exercitationem
              reprehenderit ea nesciunt aliquid corrupti libero ratione,
              repudiandae, ipsa, dolorum architecto natus eius? Exercitationem,
              molestias aperiam! Fugit nisi eos nemo dolor architecto ab
              incidunt labore quo nostrum vero, possimus a distinctio maxime
              quos similique, tenetur id, fuga illum veritatis enim adipisci!
              Odio quis harum voluptatum molestias? Voluptatibus esse fugiat
              reprehenderit odit, earum ipsa harum incidunt debitis natus.
              Possimus labore, quo expedita sunt repellendus, delectus nisi quam
              eligendi quibusdam nemo mollitia culpa architecto nobis debitis?
              Architecto, consequatur!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
