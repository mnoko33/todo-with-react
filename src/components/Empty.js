import React, { Component, Fragment } from 'react';
import '../stylesheets/Empty.css';

class Empty extends Component {
    render() {
        return (
            <Fragment>
                <div className="empty-msg-1">텅</div>
                <div className="empty-msg-2">새로운 할 일을 추가해주세요</div>
            </Fragment>
        )
    }
}

export default Empty;