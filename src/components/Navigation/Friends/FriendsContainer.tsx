import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";


function FriendsContainer() {

    return (<StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().navigationPage;
                    return (
                        <Friends friends={state.friends}/>
                    )
                }
            }
        </StoreContext.Consumer>

    );
}

export default FriendsContainer;