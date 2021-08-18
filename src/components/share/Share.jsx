import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="../assets/person/profile1.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="Post something" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" />
                            <span className="ShareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label className="shareIcon" />
                            <span className="ShareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareIcon" />
                            <span className="ShareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon" />
                            <span className="ShareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
