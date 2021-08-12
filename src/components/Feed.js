import React from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import { InputOption } from '../utils';
import ImageIcon from "@material-ui/icons/Image";

/* This component is for the Main LinkedIn Feed: */
function Feed()  {
    return (
        <div className="feed">

            <div className="feed__inputContainer">

                <div className="feed__input">

                    <CreateIcon />
                    <form>
                        <input  type="text" />
                        <button type="submit">Send</button>
                    </form>

                </div>

                <div className="feed__inputOptions">

                    {/*  */}
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />

                </div>

            </div>

        </div>
    );
}

export default Feed;