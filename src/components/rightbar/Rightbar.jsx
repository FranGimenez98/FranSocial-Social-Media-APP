import './rightbar.css'
import {Users} from '../../data'
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightBar = () =>{
        return (
            <>
                <div className="birthdayContainer">
                        <img className="birthdayImg" src="assets/gift.png" alt="" />
                        <span className="birthdayText">
                            <b>Eren Jaeger</b> and <b> 2 other friends </b> Have a birthday today!
                        </span>
                    </div>
                    <img src="assets/ad.png" alt="" className="rightbarAd" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map((u)=>(
                            <Online key={u.id} user={u}/>
                        ))}
                    </ul>
            </>
        )
    }

    const ProfileRightBar = () =>{
        return(
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoKeyValue">Buenos Aires</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoKeyValue">Argentina</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoKeyValue">On Relationship</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/friend.png" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mikasa Ackerman</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
