import { benefits } from "../constants";
import Heading from "./Heading";
import VolunteerContainer from "./volunteer-container";
import Button from "./Button";

const Benefits = () => {
  const benefitSlice = benefits.slice(0,6)
  return (
    <section id="features">
      <div className="max-container overflow-splide  relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Join Us" tag={'Our Units'} text={'Discover the diverse and vibrant units within our organization, each dedicated to a unique aspect of our mission. Our units work collaboratively to address various needs, from outreach programs to educational initiatives. Explore how each unit contributes to our overall impact, and see how they drive progress and foster community spirit.'}
        />
        <div>
          <VolunteerContainer data={benefitSlice}/>
        </div>
        <div className="mt-12 text-center"> <Button title="See more" link="/volunteer" /></div>
      </div>
    </section>
  );
};

export default Benefits;
