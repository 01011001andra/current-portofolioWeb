import React from "react";
import { styles } from "../../styles";
import { SkillCard } from "../atoms";

const About = () => {
  const contentCard = [
    {
      title: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      title: "CSS",
      image:
        "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png",
    },
    {
      title: "JAVASCRIPT",
      image:
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    },
    {
      title: "TAILWINDCSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      title: "REACTJS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      title: "Redux Toolkit",
      image:
        "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png",
    },
  ];
  return (
    <div name="about" className="w-full min-h-screen px-4">
      <div className="w-full max-w-6xl mx-auto 2xl:max-w-7xl">
        <h1 className={`${styles.sectionHeadText}`}>ABOUT ME</h1>
        <p className={`${styles.sectionSubText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequuntur velit voluptates facilis, rem pariatur quas
          necessitatibus labore maxime expedita commodi? Vel expedita quaerat
          vitae autem eveniet dolor tempora cumque qui quibusdam deserunt
          praesentium soluta nam, eligendi eos, harum sapiente minima obcaecati
          sequi laboriosam magnam quia! Ipsum amet adipisci veritatis. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Amet vero nobis
          fugiat quasi sit maxime molestiae. Amet minus atque repudiandae ab ea
          necessitatibus! Eum, obcaecati, accusantium enim laudantium doloribus
          dolores porro perferendis laborum commodi veritatis nemo! Possimus
          esse, perferendis eos omnis qui sit quos maiores atque itaque voluptas
          iste maxime!
        </p>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {contentCard.map((item, index) => {
            return (
              <SkillCard title={item.title} index={index} image={item.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
