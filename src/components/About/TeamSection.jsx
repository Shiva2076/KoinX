import React from 'react';
import './TeamSection.css';

// Import images
import SandeepImage from '../../assets/sandeep.png';

const teamMembers = [
  {
    name: 'John Smith',
    designation: 'Designation here',
    description:
      'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.',
    image: SandeepImage,
  },
  {
    name: 'Elina Williams',
    designation: 'Designation here',
    description:
      'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.',
    image: SandeepImage,
  },
  {
    name: 'John Smith',
    designation: 'Designation here',
    description:
      'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.',
    image: SandeepImage,
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis
        in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam
        augue.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="member-info">
              <img className="member-image" src={member.image} alt={member.name} />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-designation">{member.designation}</p>
            </div>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
