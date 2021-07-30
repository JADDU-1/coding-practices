import UserInfo from '../UserInfo/index'
import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="profile-container">
      <img
        className="person"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile pic"
      />
      <h2>Wade Warren</h2>
      <p className="changeTextColor">Software developer at UK</p>
    </div>
    <ul className="list-container">
      {blogsData.map(eachItem => (
        <UserInfo
          key={eachItem.id}
          eachItem={eachItem}
          length={blogsData.length}
        />
      ))}
    </ul>
  </div>
)

export default Home
