import React, {Component} from 'react';
import './FeedsChoser.css';

// Components
import Logo from '../../components/Logo/Logo';
import FeedsList from '../../components/FeedsList/FeedsList';

class FeedsChoser extends Component {

    state = {
        allFeeds: []
    };

    toggleFeedCheckedStatus = (feed) => {
        console.log('clicked');
        console.log(feed);
    };

    render() {
        return (
            <div className="FeedsChoser">
                <Logo/>
                <FeedsList clicked={this.toggleFeedCheckedStatus} feeds={this.state.allFeeds}/>
            </div>
        );
    };

}

export default FeedsChoser;