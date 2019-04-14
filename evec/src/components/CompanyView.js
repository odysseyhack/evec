import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
    getArticle, 
    clap,
    follow
} from './../redux/actions/actions'
import PropTypes from 'prop-types'
import FollowButton from './FollowButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = state => {
    return {
        _article: state.articles.article,
        user: state.authUser.user
    }
}

class CompanyView extends Component {
    componentDidMount() {
        document.body.className = 'posts show'
    }

    componentWillMount() {
        this.props.getArticle(this.props.match.params.id)
    }    

    componentWillUnmount() {
        document.body.className = ''
    }

    render() {
        const { text, claps, title, owner } = this.props._article
        let owner_name, owner_type, owner_id
        let related_papers = []
        let keywords = []
        if (owner) {
            const { name, type, _id } = owner
            owner_name = name
            owner_id = _id
            owner_type = type 
            related_papers = this.props._article.articles
            keywords = this.props._article.keywords
        }
        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                        <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">
                        <h3 className="title">{title}</h3>
                        <div className="body">
                            <p></p>
                            <p className=""dangerouslySetInnerHTML={{__html: text}}>
                            </p>
                            <p></p>
                        </div>
                        <div className="post-tags">
                            { 
                                keywords.map((keyword) => 
                                <a className="tag" href=""> { keyword }</a>
                                )                                
                             }
                        </div>

                        <div className="post-stats clearfix">
                            <div className="pull-left">
                                <div className="like-button-wrapper">
                                    <button onClick={() => this.props.clap(this.props._article._id)} className="like-button" data-behavior="trigger-overlay">
                                        <FontAwesomeIcon icon={['far', 'heart']} /><span className="hide-text">Like</span>
                                    </button>
                                     <span className="like-count">{claps}</span>
                                </div>
                            </div>
                            <div className="pull-left">
                                <a className="response-icon-wrapper" href="#">
                                    <FontAwesomeIcon icon={['far', 'comment']} />
                                    <span className="response-count" data-behavior="response-count">0</span>
                                </a>
                            </div>

                            <div className="pull-right">
                                <div className="bookmark-button-wrapper">
                                    <form className="button_to" method="get" action="">
                                        <button className="bookmark-button" data-behavior="trigger-overlay" type="submit"> 
                                            <span className="icon-bookmark-o"></span><span className="hide-text">Bookmark</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
CompanyView.propTypes = {
    params: PropTypes.object.isRequired
}
export default connect(mapStateToProps, { 
    getArticle,
    clap,
    follow
})(CompanyView);