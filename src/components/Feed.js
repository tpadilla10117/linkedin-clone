import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import { InputOption, Post } from '../utils';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import { db } from "../firebase/firebase";
import firebase from 'firebase';

/* This component is for the Main LinkedIn Feed: */
function Feed()  {

/* Input state for the posts: */
    const [ input, setInput ] = useState("");
    const [ posts, setPosts ] = useState( [] ); 

/* Access the collection in Firebase: */
    useEffect( () => {

    /* SnapShot is a real-time listerner, listens for the 'posts'  data*/
        /* .orderBy('timestamp', "desc") uses the timeStamp to order */
        db.collection("posts")
        .orderBy('timestamp', "desc")
        .onSnapshot( snapshot => (
            setPosts( snapshot.docs.map( doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

    }, []);

/* Post submission function -> occurs when submit on form: */
    const sendPost = event => {
        event.preventDefault();

        db.collection('posts').add({
            name: "Trinidad Padilla",
            description: 'Test run',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), //Let's us get timestamp of post in the database
        });

        setInput(""); //reset input field

    };


    return (
        <div className="feed">

            <div className="feed__inputContainer">

                <div className="feed__input">

                    <CreateIcon />
                    <form>
                        <input value={input} onChange={ event => setInput(event.target.value) } type="text" />
                        <button type="submit" onClick={ sendPost } >Send</button>
                    </form>

                </div>

                <div className="feed__inputOptions">

                    {/*  */}
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E" />

                </div>

            </div>

            {/* Posts will be rendered here- */}
            {/* Pull data and id from snapshot on line 23: */}
            {posts.map( ( { id, data: { name, description, message, photoUrl } } ) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ) )}

            {/* <Post name="Trinidad Padilla" description="Test description" message="did it work?" /> */}

        </div>
    );
}

export default Feed;