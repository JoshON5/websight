import Image1 from '../assets/shaffa.png';
import Image2 from '../assets/websight-icon.png';
import { Link } from 'react-router-dom';


const people = [
    {
      name: 'Houston Davis',
      role: 'Full Stack Web Developer',
      github: 'https://github.com/HDavis147',
      about: 'About stuff',
      imageUrl: Image2    
    },
    {
        name: 'Joshua Nichols',
        role: 'Full Stack Web Developer',
        github: 'https://github.com/JoshON5',
        about: 'About stuff',
        imageUrl: Image2
      },
      {
        name: 'Shaffa Chaudhry',
        role: 'Front End Web Developer',
        github: 'https://github.com/shaffachaudhry',
        about: 'Making websites appear pleasing to the eye since 2023. Big fan of Tailwind!',
        imageUrl: Image1,
      },
  ]
  
  const About = () => {
    return (
      <div className=" w-full m-12 bg-white py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-webTeal sm:text-4xl">Meet our Team!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Websight is the result of a group project during our UTSA Web Developing bootcamp. We are super proud of how far it has come and excited to see where it goes from here! 
            </p>
          </div>
          <ul role="list" className=" mx-10 px-12 grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-24 w-24 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-webTeal">{person.role}</p>
                    <Link className="text-sm font-semibold leading-6 text-webGrey hover:text-gray-400" > Github: {person.github}</Link>
                    <p className="text-sm font-semibold leading-6 text-webGrey">{person.about}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  export default About;