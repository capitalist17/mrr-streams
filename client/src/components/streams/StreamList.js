import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    showHideAdminControls(stream){
        if (stream.userId === this.props.currentUserId) {
            return (
              <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                    Delete
                </Link>
              </div>
            );
          }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.showHideAdminControls(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                    </div>
                    <div className="description">{stream.description}</div>
                </div>
            );
        })
    }
    
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list"> {this.renderList()} </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    };
};

export default connect(
                        mapStateToProps, { fetchStreams }
                    )(StreamList);