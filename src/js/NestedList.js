import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default
    },
    nested: {
        paddingLeft: theme.spacing.unit * 5,
        backgroundColor: theme.palette.background.paper
    },
});


class NestedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            savingsOpen: false,
            savingsPaid: this.defaultPaid(),
            savingsUnpaid: this.defaultUnpaid()
        }
    }

    defaultPaid = () => "W/ PAID";

    defaultUnpaid = () => "W/ UNPAID";

    handleSavings = () => {
        this.setState(state => ({ savingsOpen: !state.savingsOpen }));
        if (!this.state.savingsOpen) {
            this.setState({ savingsPaid: this.defaultPaid(), savingsUnpaid: this.defaultUnpaid() });
        }
    };

    handleBusiness = () => {
        this.setState(state => ({ business: !state.business }));
    };

    handleITJ = () => {
        this.setState(state => ({ itj: !state.itj }));
    };

    handleSavingsPaidClick = () => {
        if (this.state.savingsPaid != this.defaultPaid()) {
            this.setState({ savingsPaid: this.defaultPaid() });
        } else {
            this.setState({
                savingsPaid: "10142100123123123"
            });
        }
    };

    handleSavingsUnpaidClick = () => {
        if (this.state.savingsUnpaid != this.defaultUnpaid()) {
            this.setState({ savingsUnpaid: this.defaultUnpaid() });
        } else {
            this.setState({
                savingsUnpaid: "10142100123456789"
            });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* <List
              component="nav"
              subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
            >
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText inset primary="Sent mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText inset primary="Drafts" />
              </ListItem> */}
                <ListItem button onClick={this.handleSavings}>
                    <ListItemText inset primary="CREATE SAVINGS" />
                    {this.state.savingsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.savingsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={this.handleSavingsPaidClick}>
                            <ListItemText inset primary={this.state.savingsPaid} />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={this.handleSavingsUnpaidClick}>
                            <ListItemText inset primary={this.state.savingsUnpaid} />
                        </ListItem>
                    </List>
                </Collapse>
                {/* <ListItem button onClick={this.handleBusiness}>
                    <ListItemText inset primary="CREATE BUSINESS" />
                    {this.state.business ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.business} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary="W/ PAID" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary="W/ UNPAID" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={this.handleITJ}>
                    <ListItemText inset primary="CREATE ITJ" />
                    {this.state.itj ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.itj} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={this.handleITJPaidClick}>>
                            <ListItemText inset primary={this.state.itjContent.paid.value} />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText inset primary={this.state.itjContent.unpaid.value} />
                        </ListItem>
                    </List>
                </Collapse> */}
                <ListItem button>
                    <ListItemText inset primary="CREATE SAVINGS W/PAID" />
                </ListItem>
                <ListItem button>
                    <ListItemText inset primary="CREATE SAVINGS W/UNPAID" />
                </ListItem>
                <ListItem button>
                    <ListItemText inset primary="CREATE BUSINESS W/PAID" />
                </ListItem>
                <ListItem button>
                    <ListItemText inset primary="CREATE BUSINESS W/UNPAID" />
                </ListItem>
                {/* </List> */}
            </div>
        );
    }
}


//   <ListItem button onClick={this.handleClick}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText inset primary="Inbox" />
//   {this.state.open ? <ExpandLess /> : <ExpandMore />}
// </ListItem>


NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);