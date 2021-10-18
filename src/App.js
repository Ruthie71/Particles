import "./App.css";
import Particles from "react-particles-js";
import undraw_welcome_cats_thqn from "./SVG/undraw_welcome_cats_thqn.svg";

const App = () => {
    return (
        <div>
            <div className="scale-in-center" id="welcome">
                <img src={undraw_welcome_cats_thqn} alt="welcome cats" />
            </div>
            <Particles
                id="particles-js"
                params={{
                    particles: {
                        number: {
                            value: 400,
                            density: {
                                enable: true,
                                value_area: 1000,
                            },
                        },
                        color: {
                            value: "#fff",
                        },
                        opacity: {
                            value: 0.5,
                            anim: {
                                enable: true,
                            },
                        },
                        size: {
                            value: 7,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3,
                            },
                        },
                        line_linked: {
                            enable: false,
                        },
                        move: {
                            speed: 0.2,
                        },
                    },
                }}
            />
        </div>
    );
};

export default App;
