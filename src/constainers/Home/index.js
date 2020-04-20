import React from 'react';
import { connect } from 'react-redux';
import { actions, selecter } from '../../redux/modules/home';
import Footer from '../../component/Footer';
import Hall from './Hall';
import Count from './Count';
import Order from './Order';

function Home(props) {
    return (
        <div>
            {
                props.hall ? <Hall 
                history={props.history}
                /> : null
            }
            {
                props.count ? <Count /> : null
            }
            {
                props.order ? <Order /> : null
            }
            <Footer 
                page = { props.changePage }
                curPage = { props.curPage }
            />
        </div>
    )
}

const mapStateToProps = state => ({
    hall: selecter.getHall(state),
    count: selecter.getCount(state),
    order: selecter.getOrder(state),
    curPage:selecter.getCurPage(state)
})

const mapDispatchToProps = dispatch => ({
    changePage:(page)=>dispatch(actions.changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)