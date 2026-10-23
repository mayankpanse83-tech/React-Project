import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card-2">
        <div className="card-top">
          <div className="avatar-2">MP</div>
        </div>
        
        <h2 className="name-2">Mayank Panse</h2>
        <span className="badge">React Learner</span>
        
        <p className="bio-2">
          I am learning React and CSS to build modern, clean and fast websites.
          Passionate about UI/UX.
        </p>

        <div className="skills">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="actions">
          <button className="btn-primary">Contact Me</button>
          <button className="btn-secondary">View Projects</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

